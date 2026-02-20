import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";

import { CircularProgress } from "./CircularProgress";

const meta = {
  title: "Primitives/CircularProgress",
  component: CircularProgress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    value: 12500,
    max: 30000,
    size: 180,
    strokeWidth: 14,
    showValue: true,
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Milestones: Story = {
  render: () => (
    <div className={css({ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" })}>
      <CircularProgress value={3000} max={30000} size={140} />
      <CircularProgress value={12000} max={30000} size={140} />
      <CircularProgress value={27000} max={30000} size={140} />
    </div>
  ),
};
