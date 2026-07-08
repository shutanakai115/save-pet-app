# Saving Pet App - API

Hono 製の REST API サーバー（TypeScript）

## 開発

```bash
# ルートディレクトリから
pnpm dev:api

# またはこのディレクトリから
pnpm dev
```

デフォルトでポート 8080 で起動します。

## エンドポイント

- `GET /health` - ヘルスチェック

## 環境変数

- `PORT` - サーバーポート（デフォルト: 8080）
- `DATABASE_URL` - PostgreSQL 接続文字列（将来フェーズで使用）

## Docker

```bash
# ルートディレクトリから API + PostgreSQL を起動
docker compose up -d

# ヘルスチェック
curl http://localhost:8080/health
```

## ビルド

```bash
pnpm build   # TypeScript コンパイル → dist/
pnpm start   # 本番起動
```

## デプロイ

Cloud Run（東京リージョン）向けのマルチステージ Dockerfile を同梱しています。
`PORT` 環境変数に対応しており、Cloud Run が自動設定するポートでリッスンします。

> **Note**: 共有パッケージ（`packages/`）導入時は、Docker ビルドコンテキストをリポジトリルートに移す必要があります。
