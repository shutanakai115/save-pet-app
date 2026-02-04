# Saving Pet App

Go + Next.jsのモノレポ構成アプリケーション

## 構成

- **apps/web** - Next.js 15 + Panda CSS + Ark UI
- **apps/api** - Go REST APIサーバー
- **packages/** - 共有パッケージ（将来用）

## 必要要件

- Node.js 20+
- pnpm 10+
- Go 1.23+
- Docker (ローカル開発用)

## 開発

### ローカル開発（Docker使用）

```bash
# API + PostgreSQLを起動
docker compose up -d

# ログ確認
docker compose logs -f api

# 停止
docker compose down
```

### 個別起動

```bash
# すべてのアプリを起動
pnpm dev

# フロントエンドのみ
pnpm dev:web

# バックエンドのみ（Goを直接実行）
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

### バックエンド（Railway）

1. Railwayでプロジェクト作成
2. PostgreSQLアドオンを追加
3. GitHubリポジトリを接続
4. Root Directoryを `apps/api` に設定
5. 環境変数は自動で設定される

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

`.env.example` を `.env` にコピーして設定:

```bash
cp .env.example .env
```