# 開発環境セットアップガイド

> このドキュメントは実装フェーズで更新予定

## 前提条件

- Node.js (バージョンは `.node-version` を参照)
- pnpm
- Go 1.23+
- Docker (PostgreSQL用)

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/shutanakai115/save-pet-app
cd saving-pet-app
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. 環境変数の設定

```bash
cp .env.example .env
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env
```

必要な環境変数:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk公開キー
- `CLERK_SECRET_KEY` - Clerkシークレットキー
- `DATABASE_URL` - PostgreSQL接続文字列

### 4. データベースの起動

```bash
docker compose up -d
```

### 5. 開発サーバーの起動

```bash
pnpm dev
```

- フロントエンド: http://localhost:3000
- API: http://localhost:8080

## 開発コマンド

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | ビルド |
| `pnpm lint` | リント実行 |
| `pnpm storybook` | Storybook起動 |
