# ADR-007: バックエンドを Go から Node.js (Hono) に変更

## ステータス

採用

## コンテキスト

ADR-001 および ADR-006 に基づき、バックエンドは Go（標準ライブラリ + sqlc）で実装する方針だった。
一方で、フロントエンドは Next.js + TypeScript + Valibot で構築しており、スキーマ定義や型の共有ができない構造になっていた。

MVP の開発速度と型安全性を優先し、バックエンドの技術選定を見直す必要が生じた。

## 決定

バックエンドを **Node.js + Hono** に変更する。関連する技術選定は以下のとおり：

| 領域 | 技術 | 理由 |
|------|------|------|
| HTTPフレームワーク | Hono + @hono/node-server | 軽量・高速、TypeScript ファースト |
| DBアクセス | Drizzle ORM | TypeScript ネイティブ、型安全なクエリ |
| データベース | PostgreSQL | ADR-003 を継続（本番: Supabase 東京 / ローカル: docker compose） |
| デプロイ | Cloud Run（東京リージョン） | コンテナベース、スケーラブル、東京リージョン対応 |
| 認証 | Clerk | ADR-002 を継続 |

## 理由

### Node.js (Hono) を選んだ理由

| 観点 | Node.js (Hono) | Go |
|------|----------------|-----|
| スキーマ共有 | Valibot スキーマをフロント・バックで共有可能 | 別言語のため共有不可 |
| 型安全性 | TypeScript で end-to-end の型安全が実現可能 | sqlc で DB 層は型安全だが API 境界は別管理 |
| 開発速度 | モノレポ内で単一言語、ツールチェーン統一 | 言語切り替えのコスト |
| 学習価値 | TypeScript エコシステムの深掘り | Go の標準ライブラリ・並行処理の学習 |

### Valibot スキーマ共有の利点

フロントエンド（TanStack DB）とバックエンドで同じ Valibot スキーマを `packages/` 経由で共有できる：

```typescript
// packages/schemas/src/entry.ts（将来）
import * as v from "valibot";

export const savingEntrySchema = v.object({
  id: v.string(),
  userId: v.string(),
  amount: v.pipe(v.number(), v.minValue(1)),
  memo: v.optional(v.string(), ""),
});

export type SavingEntry = v.InferOutput<typeof savingEntrySchema>;
```

- フロント: TanStack DB のコレクションスキーマとして使用
- バック: リクエスト/レスポンスのバリデーションとして使用
- 型定義の二重管理が不要になり、スキーマ変更時の不整合を防止

### トレードオフ: Go 学習目的の放棄

ADR-001 では「Go のキャッチアップも兼ねている」としていた。本 ADR により以下を手放す：

- Go 標準ライブラリ（net/http, log/slog）の学習機会
- sqlc による SQL → 型安全コード生成の体験
- Go の並行処理モデル（goroutine, channel）の実践

**判断**: MVP の開発速度とフロント・バック間の型安全を優先し、Go 学習は別プロジェクトで行う。

### Drizzle を選んだ理由

| 観点 | Drizzle | sqlc (Go) |
|------|---------|-----------|
| 言語 | TypeScript ネイティブ | Go コード生成 |
| 型推論 | スキーマ定義から自動推論 | SQL から生成 |
| マイグレーション | drizzle-kit で管理 | 別ツールが必要 |
| エコシステム | Node.js / Hono と統合しやすい | Go 専用 |

### Cloud Run を選んだ理由

- コンテナベースで Dockerfile から直接デプロイ可能
- 東京リージョン（asia-northeast1）で低レイテンシ
- リクエストベースの課金で MVP に適したコスト構造
- Supabase（東京）との地理的近接性

## 置き換え対象

| 旧 ADR | 変更内容 |
|--------|---------|
| ADR-001 | バックエンド行を Go → Node.js (Hono) に更新 |
| ADR-003 | DBアクセスを sqlc → Drizzle に更新、デプロイ先を Railway → Supabase/Cloud Run に更新 |
| ADR-006 | Go バックエンドライブラリ選定を本 ADR で置き換え（ステータス: 却下） |

## ディレクトリ構成

```
apps/api/
├── src/
│   └── index.ts        # エントリポイント（Hono アプリ）
├── package.json        # @saving-pet/api
├── tsconfig.json
├── Dockerfile          # Node マルチステージビルド（Cloud Run 向け）
└── .env.example
```

## 結果

### 良い点

- フロント・バックで Valibot スキーマと TypeScript 型を共有可能
- pnpm workspace としてモノレポに統合され、開発体験が統一
- Hono の軽量さと Cloud Run のスケーラビリティを両立

### 注意点

- Go 学習の機会を失う（意図的なトレードオフ）
- Drizzle は sqlc と異なり SQL を直接書かず、スキーマ定義から型を推論する（設計思想の違い）
- 共有パッケージ導入時は Docker ビルドコンテキストをリポジトリルートに移す必要がある
