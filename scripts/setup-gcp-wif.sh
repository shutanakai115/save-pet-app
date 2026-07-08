#!/usr/bin/env bash
#
# GitHub Actions から Cloud Run へデプロイするための GCP 初回セットアップ。
#
# 仕組み: Workload Identity Federation (WIF)
#   サービスアカウントのキー(JSON)を GitHub に置かず、
#   GitHub Actions の OIDC トークンを GCP が直接信頼する方式。
#   キー漏洩リスクがなく、なりすまし防止のためリポジトリを条件で絞る。
#
# 冪等性: 既に作成済みのリソースはスキップするので、再実行しても安全。
# 前提: gcloud にログイン済みで、対象プロジェクトの編集権限があること。

set -euo pipefail

PROJECT_ID="save-pet-app-api-1105"
REPO="shutanakai115/save-pet-app"

SA_NAME="github-deployer"
POOL="github"
PROVIDER="github-provider"
LOCATION="global"

PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
RUNTIME_SA="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"

echo "PROJECT_ID     = ${PROJECT_ID}"
echo "PROJECT_NUMBER = ${PROJECT_NUMBER}"
echo "REPO           = ${REPO}"
echo "SA_EMAIL       = ${SA_EMAIL}"
echo

# --- 0. 必要な API を有効化 -------------------------------------------------
echo "==> 必要な API を有効化"
gcloud services enable \
  iamcredentials.googleapis.com \
  sts.googleapis.com \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  --project="$PROJECT_ID"

# --- 1. デプロイ用サービスアカウント ----------------------------------------
echo "==> デプロイ用サービスアカウント: ${SA_EMAIL}"
if gcloud iam service-accounts describe "$SA_EMAIL" --project="$PROJECT_ID" >/dev/null 2>&1; then
  echo "    既に存在するのでスキップ"
else
  gcloud iam service-accounts create "$SA_NAME" \
    --project="$PROJECT_ID" \
    --display-name="GitHub Actions deployer"
fi

# --- 2. 権限付与: Cloud Run 管理 + イメージ push ----------------------------
echo "==> ロール付与: run.admin / artifactregistry.writer"
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/run.admin" \
  --condition=None >/dev/null

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/artifactregistry.writer" \
  --condition=None >/dev/null

# --- 3. Cloud Run 実行サービスアカウントを「使う」権限 ----------------------
echo "==> ロール付与: iam.serviceAccountUser (実行SA: ${RUNTIME_SA})"
gcloud iam service-accounts add-iam-policy-binding "$RUNTIME_SA" \
  --project="$PROJECT_ID" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/iam.serviceAccountUser" >/dev/null

# --- 4. Workload Identity Pool ---------------------------------------------
echo "==> Workload Identity Pool: ${POOL}"
if gcloud iam workload-identity-pools describe "$POOL" \
  --project="$PROJECT_ID" --location="$LOCATION" >/dev/null 2>&1; then
  echo "    既に存在するのでスキップ"
else
  gcloud iam workload-identity-pools create "$POOL" \
    --project="$PROJECT_ID" \
    --location="$LOCATION" \
    --display-name="GitHub Actions"
fi

# --- 5. GitHub OIDC プロバイダ ---------------------------------------------
# attribute-condition でこのリポジトリからのトークンだけを許可する（安全上の要点）
echo "==> OIDC プロバイダ: ${PROVIDER}"
if gcloud iam workload-identity-pools providers describe "$PROVIDER" \
  --project="$PROJECT_ID" --location="$LOCATION" \
  --workload-identity-pool="$POOL" >/dev/null 2>&1; then
  echo "    既に存在するのでスキップ"
else
  gcloud iam workload-identity-pools providers create-oidc "$PROVIDER" \
    --project="$PROJECT_ID" \
    --location="$LOCATION" \
    --workload-identity-pool="$POOL" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
    --attribute-condition="assertion.repository=='${REPO}'"
fi

# --- 6. このリポジトリのトークンだけが SA になれる紐付け --------------------
echo "==> workloadIdentityUser の紐付け (repo=${REPO} のみ)"
gcloud iam service-accounts add-iam-policy-binding "$SA_EMAIL" \
  --project="$PROJECT_ID" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/${LOCATION}/workloadIdentityPools/${POOL}/attribute.repository/${REPO}" >/dev/null

echo
echo "セットアップ完了。ワークフローに設定する値:"
echo "  workload_identity_provider: projects/${PROJECT_NUMBER}/locations/${LOCATION}/workloadIdentityPools/${POOL}/providers/${PROVIDER}"
echo "  service_account:            ${SA_EMAIL}"
