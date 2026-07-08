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
- `DATABASE_URL` - PostgreSQL 接続文字列

## データベース

```bash
# PostgreSQL を起動（ルートディレクトリから）
docker compose up -d db

# マイグレーション生成・適用
DATABASE_URL="postgres://postgres:postgres@localhost:5432/savingpet" pnpm db:generate
DATABASE_URL="postgres://postgres:postgres@localhost:5432/savingpet" pnpm db:migrate
```

## テスト

マイグレーション検証テストは実 DB に接続する統合テストです。  
実行前に PostgreSQL の起動と `db:migrate` が必要です。

### 責務の分担

| 層                 | 検証対象                                                   | テストの置き場所                     |
| ------------------ | ---------------------------------------------------------- | ------------------------------------ |
| DB（このファイル） | テーブル・型・CHECK・UNIQUE・インデックス                  | `src/db/migrations.test.ts`          |
| API（次フェーズ）  | category 妥当性、リクエストバリデーション、HTTP ステータス | エンドポイント実装後の振る舞いテスト |

`category` カラムは DB 上は `text` のため任意の文字列を許容します。  
カテゴリ値（`convenience` / `cafe` / `online` / `dining` / `other`）の妥当性は API 層（Valibot）で検証し、「不正な category で 400」は API 振る舞いテストで担保します。

```bash
# ルートディレクトリから
docker compose up -d db
DATABASE_URL="postgres://postgres:postgres@localhost:5432/savingpet" pnpm --filter @saving-pet/api db:migrate
DATABASE_URL="postgres://postgres:postgres@localhost:5432/savingpet" pnpm --filter @saving-pet/api test

# または apps/api ディレクトリから
DATABASE_URL="postgres://postgres:postgres@localhost:5432/savingpet" pnpm db:migrate
DATABASE_URL="postgres://postgres:postgres@localhost:5432/savingpet" pnpm test
```

検証内容:

- `goals` / `records` テーブルの存在
- カラム型・NOT NULL・DEFAULT
- `target_amount` / `amount` の CHECK 制約（INSERT 拒否まで検証）
- `goals.user_id` の UNIQUE 制約（2件目 INSERT 拒否まで検証）
- `records_user_id_date_idx` インデックス（`user_id`, `date DESC`）

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
