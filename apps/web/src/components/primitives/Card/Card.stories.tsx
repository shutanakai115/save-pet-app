import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";

import { Card } from "./Card";

const meta = {
  title: "Primitives/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "通常のカードです。",
  },
};

export const Variants: Story = {
  render: () => (
    <div className={css({ display: "grid", gap: 4, width: "sm" })}>
      <Card variant="default">Default card</Card>
      <Card variant="accent">Accent card</Card>
    </div>
  ),
};
