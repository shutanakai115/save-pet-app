"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";
import { useState } from "react";

import { Button } from "../Button";
import { Dialog } from "./Dialog";

const meta = {
  title: "Primitives/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: {
    open: false,
    onOpenChange: () => {},
    title: "タイトル",
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className={css({ minH: "96", padding: 6 })}>
        <Button variant="outline" onClick={() => setOpen(true)}>
          ダイアログを開く
        </Button>

        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="この記録を削除しますか？"
          description="削除した内容は元に戻せません。"
        >
          <div className={css({ display: "flex", justifyContent: "flex-end", gap: 3 })}>
            <Button variant="outline" onClick={() => setOpen(false)}>
              キャンセル
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              削除する
            </Button>
          </div>
        </Dialog>
      </div>
    );
  },
};
