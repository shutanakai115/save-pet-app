---
name: audit-rsc-boundary
description: Next.js の Server/Client Component 境界を監査し、不要な "use client" の除去や分割候補を特定する。コンポーネント実装の最後や PR 前のレビュー時に使用。
---

# RSC 境界監査

## ワークフロー

### Step 1: "use client" ファイルを列挙

`apps/web/src/components/` 配下で `"use client"` を持つ全ファイルを検索する。

### Step 2: 各ファイルの必要性を判定

各ファイルについて以下を確認し、いずれにも該当しなければ "use client" は不要:

- React hooks を使用しているか
- ブラウザ API を使用しているか
- クライアント専用ライブラリをインポートしているか
- イベントハンドラを受け取る前提のインタラクティブ要素か

### Step 3: 分割候補を特定

"use client" が必要なファイルについて、静的構造と Client ロジックが分離可能か確認する。分離可能なら co-located パターンで分割し境界をリーフに下げる。

### Step 4: 修正を実施

- 不要な "use client" を除去
- 分割候補を co-located で実装
- recipe ファイルに "use client" が混入していないことを確認

### Step 5: 検証

`pnpm --filter @saving-pet/web build` でビルド通過を確認する。

## 判定早見表

| パターン | "use client" | 例 |
|---|---|---|
| hooks 使用 | 必要 | usePathname, useState |
| Base UI 使用 | 必要 | Dialog, Select, Input |
| インタラクティブ要素 | 必要 | Button, Chip |
| 純粋な表示 | 不要 | Card, CircularProgress |
| recipe ファイル | 絶対不要 | *.recipe.ts |
| 混在 | 分割検討 | BottomNav → BottomNav + BottomNavLink |
