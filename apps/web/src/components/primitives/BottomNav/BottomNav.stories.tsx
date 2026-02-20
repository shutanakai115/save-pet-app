import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";

import { BottomNav } from "./BottomNav";

const meta = {
  title: "Primitives/BottomNav",
  component: BottomNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BottomNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeActive: Story = {
  render: () => (
    <div className={css({ minH: "96", backgroundColor: "bg.subtle" })}>
      <BottomNav currentPath="/" />
    </div>
  ),
};

export const GoalActive: Story = {
  render: () => (
    <div className={css({ minH: "96", backgroundColor: "bg.subtle" })}>
      <BottomNav currentPath="/goal" />
    </div>
  ),
};
