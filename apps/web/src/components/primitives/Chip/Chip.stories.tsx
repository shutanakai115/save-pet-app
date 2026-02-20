import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";

import { Chip } from "./Chip";

const meta = {
  title: "Primitives/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "カフェ",
    selected: false,
    size: "md",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    children: "コンビニ",
    selected: true,
  },
};

export const CategorySet: Story = {
  render: () => (
    <div className={css({ display: "flex", flexWrap: "wrap", gap: 2 })}>
      <Chip selected>コンビニ</Chip>
      <Chip>カフェ</Chip>
      <Chip>外食</Chip>
      <Chip>ネット通販</Chip>
      <Chip>その他</Chip>
    </div>
  ),
};
