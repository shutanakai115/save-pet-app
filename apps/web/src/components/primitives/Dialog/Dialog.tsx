"use client";

import type { ReactNode } from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import {
  dialogBackdropClass,
  dialogDescriptionClass,
  dialogPopupClass,
  dialogTitleClass,
} from "./Dialog.recipe";

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Dialog({ open, onOpenChange, title, description, children }: DialogProps) {
  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className={dialogBackdropClass} />
        <BaseDialog.Popup className={dialogPopupClass}>
          <BaseDialog.Title className={dialogTitleClass}>{title}</BaseDialog.Title>
          {description && (
            <BaseDialog.Description className={dialogDescriptionClass}>
              {description}
            </BaseDialog.Description>
          )}
          {children}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
