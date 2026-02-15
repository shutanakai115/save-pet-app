# ADR-005: スキーマ検証として Valibot を採用

## ステータス

採用

## コンテキスト

TanStack DB でコレクションのスキーマ定義が必要。Standard Schema 互換のライブラリから選択する：

1. **Zod** - 最も人気、豊富なエコシステム
2. **Valibot** - 軽量、モジュラー設計
3. **ArkType** - 高速、型推論が強力
4. **Effect Schema** - Effect エコシステムの一部

## 決定

**Valibot** を採用する。

## 理由

### Valibot を選んだ理由

| 観点 | Valibot | Zod |
|------|---------|-----|
| バンドルサイズ | 小さい（モジュラー） | 大きい（モノリシック） |
| Standard Schema | 対応 | 対応 |
| 学習コスト | 低い（Zodに似たAPI） | 低い |
| パフォーマンス | 高速 | 標準的 |

- **軽量**: PWAではバンドルサイズが重要。Valibotはツリーシェイキングが効きやすい
- **Standard Schema 互換**: TanStack DB との統合がスムーズ
- **モダン**: 比較的新しく、設計がモダン

### 使用例

```typescript
import * as v from 'valibot'

// 貯金記録のスキーマ
const savingEntrySchema = v.object({
  id: v.string(),
  userId: v.string(),
  amount: v.pipe(v.number(), v.minValue(1)),
  memo: v.optional(v.string(), ''),
  createdAt: v.pipe(v.string(), v.transform((val) => new Date(val))),
})

// 目標のスキーマ
const goalSchema = v.object({
  id: v.string(),
  userId: v.string(),
  targetAmount: v.pipe(v.number(), v.minValue(1)),
  currentAmount: v.pipe(v.number(), v.minValue(0)),
})

// 型の取得
type SavingEntry = v.InferOutput<typeof savingEntrySchema>
type Goal = v.InferOutput<typeof goalSchema>
```

### TanStack DB との統合

```typescript
import { createCollection } from '@tanstack/react-db'
import { queryCollectionOptions } from '@tanstack/query-db-collection'

const entriesCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['entries'],
    queryFn: async () => fetch('/api/entries').then(r => r.json()),
    getKey: (item) => item.id,
    schema: savingEntrySchema,
    onInsert: async ({ transaction }) => {
      await api.entries.create(transaction.mutations[0].changes)
    },
  })
)
```

## 結果

- PWA向けに軽量なスキーマ検証を実現
- TanStack DB との統合で型安全なデータ管理
- フォームバリデーションにも再利用可能
