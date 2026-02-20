"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";
import { useState } from "react";

import { SavingsEntryAmountStep, SavingsEntryDetailsStep, SavingsEntryDrawer, SavingsEntrySuccessStep } from ".";
import { Button } from "@/components/primitives";

const meta = {
  title: "Features/Home/SavingsEntryDrawer",
  component: SavingsEntryDrawer,
  tags: ["autodocs"],
  args: {
    open: false,
    onOpenChange: () => {},
    currentTotalAmount: 12500,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SavingsEntryDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveFlow: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className={css({ minH: "96", padding: 6 })}>
        <Button variant="cta" onClick={() => setOpen(true)}>
          ドロワーを開く
        </Button>
        <SavingsEntryDrawer open={open} onOpenChange={setOpen} currentTotalAmount={12500} />
      </div>
    );
  },
};

export const DetailsStepPreview: Story = {
  render: () => (
    <div className={css({ maxW: "md", marginX: "auto", padding: 6, backgroundColor: "white" })}>
      <SavingsEntryDetailsStep
        itemName="コンビニのお菓子"
        category="convenience"
        onItemNameChange={() => {}}
        onCategoryChange={() => {}}
        onNext={() => {}}
      />
    </div>
  ),
};

export const AmountStepPreview: Story = {
  render: () => (
    <div className={css({ maxW: "md", marginX: "auto", padding: 6, backgroundColor: "white" })}>
      <SavingsEntryAmountStep amount={500} onAmountChange={() => {}} onBack={() => {}} onNext={() => {}} />
    </div>
  ),
};

export const SuccessStepPreview: Story = {
  render: () => (
    <div className={css({ maxW: "md", marginX: "auto", padding: 6, backgroundColor: "white" })}>
      <SavingsEntrySuccessStep amount={300} totalAmount={12800} onClose={() => {}} />
    </div>
  ),
};
