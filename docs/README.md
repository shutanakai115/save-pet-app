# ドキュメント

このディレクトリには、つもり貯金アプリの設計ドキュメントが格納されています。

## 構造

```
docs/
├── requirements/          # 要件定義
│   └── mvp.md            # MVP要件定義
├── design/               # 設計ドキュメント
│   ├── screen-design.md  # 画面設計
│   ├── api-design.md     # API設計（予定）
│   └── database-design.md # DB設計（予定）
├── decisions/            # ADR (Architecture Decision Records)
│   ├── 001-tech-stack.md
│   ├── 002-auth-clerk.md
│   ├── 003-database-postgres.md
│   └── 004-tanstack-db.md
└── guides/               # 開発ガイド（予定）
    └── development.md
```

## ADR (Architecture Decision Records)

技術的な決定とその理由を記録しています。

| ADR | タイトル |
|-----|---------|
| [001](./decisions/001-tech-stack.md) | 技術スタック選定 |
| [002](./decisions/002-auth-clerk.md) | 認証方式としてClerkを採用 |
| [003](./decisions/003-database-postgres.md) | データベースとしてPostgreSQLを採用 |
| [004](./decisions/004-tanstack-db.md) | 状態管理としてTanStack DBを採用 |
| [005](./decisions/005-schema-valibot.md) | スキーマ検証としてValibotを採用 |
| [006](./decisions/006-go-backend-libs.md) | Goバックエンドのライブラリ選定 |

## 開発フェーズ

1. **Phase 1: ドキュメント整備** ✅
   - 要件定義、ADR、画面設計

2. **Phase 2: 画面実装**
   - UI コンポーネント実装

3. **Phase 3: API設計・実装**
   - Go APIエンドポイント

4. **Phase 4: DB設計・実装**
   - PostgreSQLスキーマ
