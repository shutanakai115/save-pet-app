"use client";

interface PiggyMascotProps {
  /** trueのとき貯金完了アニメーションを再生 */
  celebrating: boolean;
  onClick?: () => void;
}

export function PiggyMascot({ celebrating, onClick }: PiggyMascotProps) {
  return (
    <div
      onClick={onClick}
      role="button"
      aria-label="ブタに貯金する"
      style={{
        width: "100%",
        cursor: "pointer",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <style>{`
        .piggy-breathe {
          transform-origin: 120px 150px;
          animation: piggy-breathe 3.2s ease-in-out infinite;
        }
        .piggy-tail {
          transform-origin: 196px 128px;
          animation: piggy-tail 2.4s ease-in-out infinite;
        }
        .piggy-ear-l {
          transform-origin: 78px 78px;
          animation: piggy-ear 5s ease-in-out infinite;
        }
        .piggy-ear-r {
          transform-origin: 156px 78px;
          animation: piggy-ear 5s ease-in-out infinite 2.5s;
        }
        .piggy-eyes {
          animation: piggy-blink 4.6s infinite;
          transform-origin: 120px 112px;
        }
        .piggy-happy {
          animation: piggy-bounce 0.7s ease-in-out 2;
          transform-origin: 120px 190px;
        }
        .piggy-coin {
          animation: piggy-coin-drop 0.9s cubic-bezier(.55,0,.6,1.2) forwards;
        }
        .piggy-sparkle {
          opacity: 0;
          animation: piggy-sparkle 0.9s ease-out 0.45s forwards;
        }
        @keyframes piggy-breathe {
          0%, 100% { transform: scale(1, 1); }
          50%      { transform: scale(1.02, 0.985); }
        }
        @keyframes piggy-tail {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(14deg); }
        }
        @keyframes piggy-ear {
          0%, 88%, 100% { transform: rotate(0deg); }
          92%           { transform: rotate(-9deg); }
          96%           { transform: rotate(4deg); }
        }
        @keyframes piggy-blink {
          0%, 91%, 100% { transform: scaleY(1); }
          94%           { transform: scaleY(0.08); }
        }
        @keyframes piggy-bounce {
          0%, 100% { transform: scale(1, 1) translateY(0); }
          30%      { transform: scale(1.06, 0.9) translateY(4px); }
          60%      { transform: scale(0.96, 1.06) translateY(-8px); }
        }
        @keyframes piggy-coin-drop {
          0%   { transform: translateY(-70px); opacity: 0; }
          25%  { opacity: 1; }
          70%  { transform: translateY(-6px); opacity: 1; }
          100% { transform: translateY(2px); opacity: 0; }
        }
        @keyframes piggy-sparkle {
          0%   { opacity: 0; transform: scale(0.4); }
          40%  { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1.3); }
        }
        @media (prefers-reduced-motion: reduce) {
          .piggy-breathe, .piggy-tail, .piggy-ear-l, .piggy-ear-r,
          .piggy-eyes, .piggy-happy, .piggy-coin, .piggy-sparkle {
            animation: none;
          }
          .piggy-coin { opacity: 0; }
        }
      `}</style>

      <svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
        {/* 地面の影 */}
        <ellipse cx="120" cy="198" rx="70" ry="10" fill="#F5C9A8" opacity="0.35" />

        <g className={celebrating ? "piggy-happy" : undefined}>
          <g className="piggy-breathe">
            {/* しっぽ */}
            <path
              className="piggy-tail"
              d="M194 128 q14 -6 10 -16 q-3 -8 -12 -5 q-6 2 -4 8"
              fill="none"
              stroke="#F09CB4"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* 脚 */}
            <rect x="86" y="172" width="18" height="22" rx="8" fill="#F09CB4" />
            <rect x="136" y="172" width="18" height="22" rx="8" fill="#F09CB4" />

            {/* 耳 */}
            <path className="piggy-ear-l" d="M70 88 Q62 58 86 62 Q94 74 88 86 Z" fill="#F09CB4" />
            <path
              className="piggy-ear-r"
              d="M170 88 Q178 58 154 62 Q146 74 152 86 Z"
              fill="#F09CB4"
            />
            <path className="piggy-ear-l" d="M74 84 Q70 66 84 68 Q89 76 85 83 Z" fill="#FBC5D2" />
            <path
              className="piggy-ear-r"
              d="M166 84 Q170 66 156 68 Q151 76 155 83 Z"
              fill="#FBC5D2"
            />

            {/* からだ（貯金箱） */}
            <ellipse cx="120" cy="132" rx="78" ry="62" fill="#F8B4C6" />
            {/* ほっぺのハイライト */}
            <ellipse cx="92" cy="112" rx="26" ry="20" fill="#FCD3DE" opacity="0.7" />

            {/* コイン投入口 */}
            <rect x="102" y="74" width="36" height="7" rx="3.5" fill="#D97390" />

            {/* ほっぺ */}
            <ellipse cx="78" cy="140" rx="11" ry="7" fill="#F78FAC" opacity="0.8" />
            <ellipse cx="162" cy="140" rx="11" ry="7" fill="#F78FAC" opacity="0.8" />

            {/* 目 */}
            <g className="piggy-eyes">
              {celebrating ? (
                <>
                  {/* にっこり目 */}
                  <path
                    d="M88 112 q8 -8 16 0"
                    stroke="#5C4038"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M136 112 q8 -8 16 0"
                    stroke="#5C4038"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </>
              ) : (
                <>
                  <circle cx="96" cy="112" r="5.5" fill="#5C4038" />
                  <circle cx="144" cy="112" r="5.5" fill="#5C4038" />
                  <circle cx="98" cy="110" r="1.8" fill="#FFFFFF" />
                  <circle cx="146" cy="110" r="1.8" fill="#FFFFFF" />
                </>
              )}
            </g>

            {/* 鼻 */}
            <ellipse cx="120" cy="134" rx="20" ry="14" fill="#F48FB1" />
            <ellipse
              cx="120"
              cy="134"
              rx="20"
              ry="14"
              fill="none"
              stroke="#E27A9E"
              strokeWidth="2"
            />
            <ellipse cx="113" cy="134" rx="3.2" ry="4.5" fill="#C95F82" />
            <ellipse cx="127" cy="134" rx="3.2" ry="4.5" fill="#C95F82" />
          </g>
        </g>

        {/* 貯金完了時のコインとキラキラ */}
        {celebrating && (
          <>
            <g className="piggy-coin">
              <circle cx="120" cy="70" r="13" fill="#F6C244" stroke="#DFA729" strokeWidth="2.5" />
              <text
                x="120"
                y="76"
                textAnchor="middle"
                fontSize="15"
                fontWeight="bold"
                fill="#B7841B"
                fontFamily="sans-serif"
              >
                ¥
              </text>
            </g>
            <g className="piggy-sparkle" style={{ transformOrigin: "120px 100px" }}>
              <path d="M58 90 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z" fill="#F6C244" />
              <path
                d="M178 84 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z"
                fill="#F09CB4"
              />
              <circle cx="70" cy="66" r="3" fill="#F6C244" />
              <circle cx="172" cy="112" r="2.5" fill="#F6C244" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
