import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";

import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Primitives/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    value: 25,
    max: 100,
    label: "目標進捗",
    showValue: true,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Examples: Story = {
  render: () => (
    <div className={css({ display: "grid", gap: 4, width: "sm" })}>
      <ProgressBar value={25} label="はじめの一歩" />
      <ProgressBar value={60} label="順調です" />
      <ProgressBar value={90} label="あと少し" />
    </div>
  ),
};
