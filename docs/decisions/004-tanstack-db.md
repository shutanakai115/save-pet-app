# ADR-004: 状態管理として TanStack DB を採用

## ステータス

採用

## コンテキスト

フロントエンドでのデータ管理・状態管理が必要。以下の選択肢を検討した：

1. **TanStack Query のみ** - データフェッチとキャッシュ
2. **TanStack DB** - TanStack Query の拡張、オプティミスティック更新対応
3. **Zustand / Jotai** - 軽量な状態管理ライブラリ

## 決定

**TanStack DB** を採用する。

## 理由

### TanStack DB を選んだ理由

- **オプティミスティック更新**: 「使ったつもり」を記録した瞬間にUIに反映される
- **Live Queries**: サブミリ秒のリアルタイムクエリ（10万件でも0.7ms程度）
- **TanStack Query との統合**: REST API との連携が容易
- **オフライン対応の可能性**: LocalStorage Collection でオフライン時のデータ保持が可能
- **Standard Schema 対応**: Valibot などのスキーマライブラリと統合可能

### スキーマ検証に Valibot を採用

TanStack DB は Standard Schema 互換のスキーマライブラリをサポートしている。
Valibot を選んだ理由：

- **軽量**: Zodより小さいバンドルサイズ
- **Standard Schema 互換**: TanStack DB との統合がスムーズ
- **型安全**: TypeScript との相性が良い
- **デフォルト値・変換**: スキーマでデフォルト値や型変換を定義可能

```typescript
import * as v from 'valibot'

const entrySchema = v.object({
  id: v.string(),
  amount: v.number(),
  memo: v.optional(v.string(), ''),
  createdAt: v.pipe(v.string(), v.transform((val) => new Date(val))),
})

const collection = createCollection(
  queryCollectionOptions({
    schema: entrySchema,
    // ...
  })
)
```

### UX要件との適合

つもり貯金アプリでは「その瞬間」に入力する体験が重要。TanStack DB のオプティミスティック更新により：

1. ユーザーが金額を入力 → 即座にUIに反映
2. バックグラウンドでGo APIに送信
3. 同期完了後、確定データに置き換え

これにより、ネットワーク遅延を感じさせない即時フィードバックが可能。

### アーキテクチャ

```
┌─────────────────────────────────────────┐
│           Next.js (フロントエンド)        │
│  ┌─────────────────────────────────┐    │
│  │         TanStack DB             │    │
│  │  - Collection (貯金記録)         │    │
│  │  - Live Queries                 │    │
│  │  - Optimistic Updates           │    │
│  └─────────────────────────────────┘    │
└────────────────┬────────────────────────┘
                 │ REST API
                 ▼
┌─────────────────────────────────────────┐
│              Go API                     │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│            PostgreSQL                   │
└─────────────────────────────────────────┘
```

## 注意点

- TanStack DB は Beta 版（v0）
- 破壊的変更の可能性があるため、バージョン固定を推奨
- ドキュメントやコミュニティがまだ発展途上

## 結果

- 「その瞬間」に入力する体験をオプティミスティック更新で実現
- Go APIとの連携は QueryCollection で対応
- 将来的なオフライン対応への道筋も確保
