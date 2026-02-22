import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Bell, Flame, Mail, Settings } from "lucide-react";

import { Button } from "./Button";

const meta = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
PandaCSSで構築された多機能なボタンコンポーネントです。
複数のバリアント、サイズ、ローディング状態、アイコンセクションをサポートします。

## 機能
- 5つのバリアント: primary, secondary, outline, subtle, danger
- 5つのサイズ: xs, sm, md, lg, xl  
- スピナー付きローディング状態
- 左右のアイコンセクション
- フルワイドオプション
- 8pxグリッドシステム準拠
- 適切なフォーカス管理によるアクセシビリティ対応
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "subtle", "danger"],
      description: "ボタンの視覚的なスタイルバリアント",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "8pxグリッドシステムに従ったボタンのサイズ",
    },
    fullWidth: {
      control: "boolean",
      description: "コンテナの全幅を占めるかどうか",
    },
    loading: {
      control: "boolean",
      description: "ローディングスピナーを表示し、操作を無効化",
    },
    disabled: {
      control: "boolean",
      description: "ボタンを無効化",
    },
    children: {
      control: "text",
      description: "ボタンの内容・テキスト",
    },
    leftSection: {
      control: false,
      description: "ボタンテキストの左側に表示するコンテンツ",
    },
    rightSection: {
      control: false,
      description: "ボタンテキストの右側に表示するコンテンツ",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトストーリー
export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
};

// バリアント一覧
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "利用可能なすべてのボタンバリアントの表示例です。",
      },
    },
  },
};

// サイズ一覧
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "8pxグリッドシステムに従った全サイズの表示例です（24px, 32px, 40px, 48px, 56px）。",
      },
    },
  },
};

// 状態一覧
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button>通常</Button>
      <Button disabled>無効</Button>
      <Button loading>ローディング</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通常、無効、ローディングなど、ボタンの各状態の表示例です。",
      },
    },
  },
};

// アイコン・セクション付き
export const WithSections: Story = {
  render: () => (
    <div
      style={{ display: "flex", gap: "16px", flexDirection: "column", alignItems: "flex-start" }}
    >
      <Button leftSection={<Mail size={14} />}>メール送信</Button>
      <Button rightSection={<span style={{ fontSize: "14px" }}>→</span>} variant="outline">
        次へ
      </Button>
      <Button
        leftSection={<Settings size={14} />}
        rightSection={<span style={{ fontSize: "14px" }}>▼</span>}
        variant="secondary"
      >
        設定メニュー
      </Button>
      <Button leftSection={<Flame size={14} />} variant="danger" loading>
        アカウント削除
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "アイコンや追加コンテンツ用の左右セクション付きボタンの例です。",
      },
    },
  },
};

// フルワイドバリアント
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <Button fullWidth variant="primary" size="lg">
        プライマリ フルワイド
      </Button>
      <Button fullWidth variant="outline" size="md">
        アウトライン フルワイド
      </Button>
      <Button fullWidth variant="subtle" size="sm" disabled>
        無効 フルワイド
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "コンテナの全幅を占めるフルワイドボタンの例です。",
      },
    },
  },
};

// インタラクティブプレイグラウンド
export const Playground: Story = {
  args: {
    children: "プレイグラウンドボタン",
    variant: "primary",
    size: "md",
    fullWidth: false,
    loading: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "異なるボタン設定をテストするためのインタラクティブプレイグラウンドです。コントロールパネルでpropsを変更できます。",
      },
    },
  },
};

// バリアント別ローディング状態
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button variant="primary" loading>
        プライマリ ローディング
      </Button>
      <Button variant="secondary" loading>
        セカンダリ ローディング
      </Button>
      <Button variant="outline" loading>
        アウトライン ローディング
      </Button>
      <Button variant="subtle" loading>
        サブトル ローディング
      </Button>
      <Button variant="danger" loading>
        デンジャー ローディング
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "全ボタンバリアントのローディング状態とスピナーアニメーションの例です。",
      },
    },
  },
};

// サイズ×バリアントマトリックス
export const SizeVariantMatrix: Story = {
  render: () => {
    const variants = ["primary", "secondary", "outline", "subtle", "danger"] as const;
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ width: "80px", fontSize: "14px", fontWeight: "500" }}>{variant}:</div>
            {sizes.map((size) => (
              <Button key={size} variant={variant} size={size}>
                {size}
              </Button>
            ))}
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "全バリアントとサイズの組み合わせを表示する完全マトリックスです。",
      },
    },
  },
};

// アクセシビリティ例
export const AccessibilityExample: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}
    >
      <Button>Tabでフォーカス</Button>
      <Button disabled>フォーカス不可（無効）</Button>
      <Button
        onClick={() => alert("ボタンがクリックされました！")}
        leftSection={<Bell size={14} />}
      >
        クリックでアラート
      </Button>
      <Button
        variant="danger"
        onClick={() => confirm("よろしいですか？") && alert("確認しました！")}
      >
        危険なアクション
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "フォーカス管理やキーボードナビゲーションなどのアクセシビリティ機能を示す例です。",
      },
    },
  },
};
