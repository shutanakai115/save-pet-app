"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";
import { useState } from "react";

import { Button } from "../Button";
import { BottomSheet } from "./BottomSheet";

const meta = {
  title: "Primitives/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  args: {
    open: false,
    onOpenChange: () => {},
    children: null,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className={css({ minH: "96", padding: 6 })}>
        <Button onClick={() => setOpen(true)}>ボトムシートを開く</Button>
        <BottomSheet
          open={open}
          onOpenChange={setOpen}
          title="クイック入力"
          description="1画面1アクションで入力できます。"
        >
          <div className={css({ display: "grid", gap: 3 })}>
            <Button fullWidth>次へ</Button>
            <Button variant="outline" fullWidth onClick={() => setOpen(false)}>
              閉じる
            </Button>
          </div>
        </BottomSheet>
      </div>
    );
  },
};
