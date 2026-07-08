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

### バックエンド（Cloud Run）

1. Google Cloud プロジェクトを作成
2. Artifact Registry に Docker イメージをプッシュ
3. Cloud Run（asia-northeast1 / 東京）にデプロイ
4. 環境変数 `PORT` は Cloud Run が自動設定
5. 本番 DB は Supabase（東京リージョン）の `DATABASE_URL` を設定

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
