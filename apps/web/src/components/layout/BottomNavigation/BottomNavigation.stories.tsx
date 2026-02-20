import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";

import { BottomNavigation } from "./BottomNavigation";

const meta = {
  title: "Layout/BottomNavigation",
  component: BottomNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeActive: Story = {
  render: () => (
    <div className={css({ minH: "96", backgroundColor: "bg.subtle" })}>
      <BottomNavigation currentPath="/" />
    </div>
  ),
};

export const GoalActive: Story = {
  render: () => (
    <div className={css({ minH: "96", backgroundColor: "bg.subtle" })}>
      <BottomNavigation currentPath="/goal" />
    </div>
  ),
};
