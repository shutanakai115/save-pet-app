import { Select, type SelectItem } from "./Select";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const basicItems: SelectItem[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const meta = {
  title: "Primitives/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
ArkUIとPandaCSSで構築された多機能なセレクトコンポーネントです。
基本的な選択機能、キーボードナビゲーション、アクセシビリティ機能を提供します。

## 機能
- ArkUI: 堅牢な選択ロジックとアクセシビリティ
- PandaCSS: デザイントークンによる一貫したスタイリング
- キーボードナビゲーション対応
- シンプルなAPI設計
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: false,
      description: "ラベルと値を持つ選択肢の配列",
    },
    placeholder: {
      control: "text",
      description: "何も選択されていない時のプレースホルダーテキスト",
    },
    onValueChange: {
      control: false,
      description: "値が変更された時のコールバック関数",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトストーリー
export const Default: Story = {
  args: {
    items: basicItems,
    placeholder: "果物を選択",
  },
};

// コールバック付き
export const WithCallback: Story = {
  args: {
    items: basicItems,
    placeholder: "果物を選択",
    onValueChange: (value) => console.log("選択された値:", value),
  },
};
