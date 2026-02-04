import { css } from "../../styled-system/css";

export function SpacingExample() {
  return (
    <div className={css({ padding: 8, backgroundColor: "secondary.100", borderRadius: "lg" })}>
      <h3 className={css({ fontSize: "lg", fontWeight: "semibold", marginBottom: 4 })}>
        Spacing vs Sizes の使い分け
      </h3>

      {/* Spacing の例 - 数値ベース */}
      <div className={css({ marginBottom: 6 })}>
        <h4 className={css({ fontSize: "md", fontWeight: "medium", marginBottom: 2 })}>
          ✅ Spacing（余白）- 数値ベース
        </h4>
        <div
          className={css({
            display: "flex",
            gap: 2, // 8px - 小さなgap
            padding: 4, // 16px - 標準的なpadding
            backgroundColor: "white",
            borderRadius: "md",
          })}
        >
          <div
            className={css({
              padding: 1, // 4px - 最小padding
              backgroundColor: "primary.100",
              borderRadius: "sm",
            })}
          >
            gap: 2 (8px)
          </div>
          <div
            className={css({
              padding: 2, // 8px - 小padding
              backgroundColor: "primary.200",
              borderRadius: "sm",
            })}
          >
            padding: 4 (16px)
          </div>
          <div
            className={css({
              padding: 1,
              backgroundColor: "primary.100",
              borderRadius: "sm",
            })}
          >
            数値＝直感的
          </div>
        </div>
      </div>

      {/* Sizes の例 - セマンティック */}
      <div className={css({ marginBottom: 6 })}>
        <h4 className={css({ fontSize: "md", fontWeight: "medium", marginBottom: 2 })}>
          ✅ Sizes（寸法）- セマンティック
        </h4>
        <div
          className={css({
            display: "flex",
            gap: 4,
            alignItems: "flex-end",
          })}
        >
          <div
            className={css({
              width: "xs", // 320px - 小さいコンテナ
              height: 8, // 32px
              backgroundColor: "success.200",
              borderRadius: "md",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "xs",
            })}
          >
            width: xs
          </div>
          <div
            className={css({
              width: "sm", // 384px - 中サイズコンテナ
              height: 12, // 48px
              backgroundColor: "success.300",
              borderRadius: "md",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "sm",
            })}
          >
            width: sm
          </div>
          <div
            className={css({
              width: "md", // 448px - 大サイズコンテナ
              height: 16, // 64px
              backgroundColor: "success.400",
              borderRadius: "md",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "sm",
              color: "white",
            })}
          >
            width: md（意味のあるサイズ）
          </div>
        </div>
      </div>

      {/* 悪い例 */}
      <div>
        <h4
          className={css({
            fontSize: "md",
            fontWeight: "medium",
            marginBottom: 2,
            color: "error.600",
          })}
        >
          ❌ 避けるべき - セマンティックなSpacing
        </h4>
        <div
          className={css({
            padding: 4,
            backgroundColor: "error.50",
            borderRadius: "md",
            fontSize: "sm",
            color: "error.700",
          })}
        >
          {/* これは避けるべき例 */}
          margin: "small", padding: "medium", gap: "large"
          <br />👆 「small」「medium」は文脈によって意味が変わるため不明確
        </div>
      </div>
    </div>
  );
}
