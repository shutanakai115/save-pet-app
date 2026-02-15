# ADR-006: Go バックエンドのライブラリ選定

## ステータス

採用

## コンテキスト

Go バックエンドで使用するライブラリを決定する必要がある。
学習目的を考慮し、Goの思想を学べる構成を目指す。

## 決定

以下の構成を採用する：

| 領域 | 技術 | 理由 |
|------|------|------|
| HTTPルーター | 標準ライブラリ（net/http） | Go 1.22+ のパターンマッチングで十分 |
| DBアクセス | sqlc | SQLから型安全なコード生成、学習価値が高い |
| ログ | log/slog（標準） | Go 1.21+ で標準化 |
| バリデーション | go-playground/validator | 定番、タグベースで簡潔 |

## 理由

### 標準ライブラリ（net/http）を選んだ理由

Go 1.22 から `http.ServeMux` でパターンマッチングがサポートされた：

```go
mux.HandleFunc("GET /api/entries", handleGetEntries)
mux.HandleFunc("POST /api/entries", handleCreateEntry)
mux.HandleFunc("GET /api/entries/{id}", handleGetEntry)
mux.HandleFunc("DELETE /api/entries/{id}", handleDeleteEntry)
```

- 外部依存が不要
- Goの標準的な書き方を学べる
- 十分な機能（メソッド指定、パスパラメータ）

### sqlc を選んだ理由

| 観点 | sqlc | GORM |
|------|------|------|
| SQL学習 | SQLを直接書く | 抽象化される |
| 型安全性 | コード生成で保証 | リフレクション |
| パフォーマンス | 最適化しやすい | マジックが多い |
| デバッグ | SQLが明確 | 生成SQLを追う必要 |

**sqlc の流れ**:

1. SQLを書く（`query.sql`）
2. `sqlc generate` でGoコードを生成
3. 生成されたコードを呼び出す

```sql
-- queries/entries.sql

-- name: GetEntries :many
SELECT * FROM entries 
WHERE user_id = $1 
ORDER BY created_at DESC;

-- name: CreateEntry :one
INSERT INTO entries (user_id, amount, memo)
VALUES ($1, $2, $3)
RETURNING *;

-- name: UpdateEntry :one
UPDATE entries 
SET amount = $2, memo = $3, updated_at = NOW()
WHERE id = $1
RETURNING *;

-- name: DeleteEntry :exec
DELETE FROM entries WHERE id = $1;
```

生成されるコード:

```go
// 型安全なメソッドが生成される
func (q *Queries) GetEntries(ctx context.Context, userID string) ([]Entry, error)
func (q *Queries) CreateEntry(ctx context.Context, arg CreateEntryParams) (Entry, error)
```

### log/slog を選んだ理由

- Go 1.21+ で標準ライブラリに追加
- 構造化ログ対応
- 将来性がある（標準なので）

```go
slog.Info("entry created", 
    "user_id", userID,
    "amount", amount,
)
```

## ディレクトリ構成（参考）

```
apps/api/
├── main.go
├── internal/
│   ├── handler/      # HTTPハンドラー
│   ├── db/           # sqlc生成コード
│   └── middleware/   # 認証ミドルウェア等
├── sql/
│   ├── schema.sql    # テーブル定義
│   └── queries/      # クエリ定義
└── sqlc.yaml         # sqlc設定
```

## 結果

- 標準ライブラリ中心でGoの思想を学べる
- sqlcでSQL力とGoの型安全性を両立
- 外部依存が最小限で保守しやすい
