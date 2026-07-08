# Saving Pet App

Next.js + Hono のモノレポ構成アプリケーション

## 構成

- **apps/web** - Next.js 15 + Panda CSS + Base UI
- **apps/api** - Hono REST API サーバー（TypeScript）
- **packages/** - 共有パッケージ（将来用）

## 必要要件

- Node.js 24+
- pnpm 10+
- Docker（ローカル開発用）

## 開発

### ローカル開発（Docker使用）

```bash
# API + PostgreSQLを起動
docker compose up -d

# ログ確認
docker compose logs -f api

# ヘルスチェック
curl http://localhost:8080/health

# 停止
docker compose down
```

### 個別起動

```bash
# すべてのアプリを起動
pnpm dev

# フロントエンドのみ
pnpm dev:web

# バックエンドのみ
pnpm dev:api
```

## ビルド

```bash
# すべてビルド
pnpm build

# 個別ビルド
pnpm build:web
pnpm build:api

# Dockerイメージビルド
docker build -t saving-pet-api ./apps/api
```

## デプロイ

### フロントエンド（Vercel）

```bash
# Vercel CLIでデプロイ
cd apps/web && vercel
```

### バックエンド（Cloud Run / GitHub Actions で自動デプロイ）

`main` への push で `.github/workflows/deploy-api.yml` が発火し、build → Artifact Registry へ push → Cloud Run へデプロイまで自動実行される（`apps/api/**` または `packages/**` の変更時のみ）。イメージタグはコミットハッシュ（`github.sha`）で、「本番で動いているコード = このコミット」を常に特定できる。

認証は Workload Identity Federation（WIF）を使用し、サービスアカウントのキー（JSON）は GitHub に保持しない。

#### 初回のみ: GCP 側の信頼設定

```bash
# WIF プール / OIDC プロバイダ / デプロイ用 SA を作成（冪等・再実行可）
./scripts/setup-gcp-wif.sh
```

- 環境変数 `PORT` は Cloud Run が自動設定
- 本番 DB は Supabase（東京リージョン）の `DATABASE_URL` を設定（将来フェーズ）

#### CI（PR 時）

- `apps/api/**` の PR で `.github/workflows/api.yml` が lint / build を実行（デプロイはしない）
- `apps/web/**` の PR は `.github/workflows/web.yml` が lint / unit / minimal e2e を実行

## その他

```bash
# リント
pnpm lint

# フォーマット
pnpm format

# DB接続確認（Docker起動中）
docker compose exec db psql -U postgres -d savingpet
```

## 環境変数

`apps/api/.env.example` を `apps/api/.env` にコピーして設定:

```bash
cp apps/api/.env.example apps/api/.env
```
