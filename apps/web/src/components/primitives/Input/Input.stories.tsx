import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";

import { Input } from "./Input";

const meta = {
  title: "Primitives/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "入力してください",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "名称",
    description: "我慢した内容を記録します。",
  },
};

export const Currency: Story = {
  args: {
    label: "金額",
    inputMode: "numeric",
    placeholder: "500",
    type: "text",
  },
};

export const WithError: Story = {
  args: {
    label: "名称",
    required: true,
    errorMessage: "必須項目です",
  },
};

export const Group: Story = {
  render: () => (
    <div className={css({ display: "grid", gap: 4, width: "sm" })}>
      <Input label="名称" placeholder="例: コンビニのお菓子" />
      <Input label="金額" type="text" inputMode="numeric" placeholder="500" />
    </div>
  ),
};
