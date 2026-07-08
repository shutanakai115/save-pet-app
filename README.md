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

Vercel の Git 連携を使う場合、`main` への push で本番デプロイが走る（GitHub の `Web CI` 完了を待たない）。一人開発で `main` へ直接 push する運用でも同様。

CI を先に通したい場合は、GitHub のブランチ保護で `Web CI` を required checks にするか、Vercel の Production Deployment 保護を有効にする。

```bash
# Vercel CLIで手動デプロイ
cd apps/web && vercel
```

### バックエンド（Cloud Run / GitHub Actions で自動デプロイ）

`main` への push（`apps/api/**` または `packages/**` の変更時）で `.github/workflows/api.yml`（API CI）が実行され、**成功後にのみ** `.github/workflows/deploy-api.yml` が発火して build → Artifact Registry へ push → Cloud Run へデプロイまで自動実行される。イメージタグはコミットハッシュで、「本番で動いているコード = このコミット」を常に特定できる。

認証は Workload Identity Federation（WIF）を使用し、サービスアカウントのキー（JSON）は GitHub に保持しない。

#### 初回のみ: GCP 側の信頼設定

```bash
# WIF プール / OIDC プロバイダ / デプロイ用 SA を作成（冪等・再実行可）
./scripts/setup-gcp-wif.sh
```

- 環境変数 `PORT` は Cloud Run が自動設定
- 本番 DB は Supabase（東京リージョン）の `DATABASE_URL` を設定（将来フェーズ）

#### CI / デプロイの挙動

| シナリオ | API CI | Deploy API | Web CI | Vercel 本番 |
|---|---|---|---|---|
| `main` 直 push（API 変更） | 実行 | CI 成功後のみ実行 | API 変更のみならスキップ | web 変更なしならスキップ |
| `main` 直 push（web 変更） | web 変更のみならスキップ | スキップ | 実行 | push 後にデプロイ（CI 完了待ちなし） |
| PR（API 変更） | 実行 | 実行しない | — | — |
| API CI 失敗 | 失敗 | 実行しない | — | — |

- `apps/api/**` の PR / push: `.github/workflows/api.yml` が lint / typecheck / format / build / migration test を実行
- `apps/web/**` の PR / push: `.github/workflows/web.yml` が lint / typecheck / format / unit / minimal e2e を実行

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
