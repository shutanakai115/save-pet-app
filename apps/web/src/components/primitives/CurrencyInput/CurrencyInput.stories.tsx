"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";
import { useState } from "react";

import { CurrencyInput } from "./CurrencyInput";

const meta = {
  title: "Primitives/CurrencyInput",
  component: CurrencyInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    value: null,
    onValueChange: () => {},
  },
} satisfies Meta<typeof CurrencyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(1200);

    return (
      <div className={css({ width: "sm" })}>
        <CurrencyInput
          label="貯金する金額"
          description="数字のみ入力できます"
          placeholder="0"
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(5000);

    return (
      <div className={css({ width: "sm" })}>
        <CurrencyInput
          size="lg"
          label="貯金額"
          placeholder="0"
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(null);

    return (
      <div className={css({ width: "sm" })}>
        <CurrencyInput
          label="目標金額"
          value={value}
          onValueChange={setValue}
          errorMessage="金額を入力してください"
          placeholder="10000"
        />
      </div>
    );
  },
};
