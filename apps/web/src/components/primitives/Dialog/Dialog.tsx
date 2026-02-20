"use client";

import type { ReactNode } from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { dialogSlotRecipe } from "./Dialog.recipe";

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Dialog({ open, onOpenChange, title, description, children }: DialogProps) {
  const classes = dialogSlotRecipe();

  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className={classes.backdrop} />
        <BaseDialog.Popup className={classes.popup}>
          <BaseDialog.Title className={classes.title}>{title}</BaseDialog.Title>
          {description && (
            <BaseDialog.Description className={classes.description}>
              {description}
            </BaseDialog.Description>
          )}
          {children}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
