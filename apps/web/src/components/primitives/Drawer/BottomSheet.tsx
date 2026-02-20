"use client";

import type { ReactNode } from "react";

import { DrawerPreview as Drawer } from "@base-ui/react/drawer";

import {
  bottomSheetBackdropClass,
  bottomSheetDescriptionClass,
  bottomSheetHandleClass,
  bottomSheetPopupClass,
  bottomSheetTitleClass,
  bottomSheetViewportClass,
} from "./BottomSheet.recipe";

export interface BottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: ReactNode;
}

export function BottomSheet({
  open,
  onOpenChange,
  title,
  description,
  children,
}: BottomSheetProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} swipeDirection="down">
      <Drawer.Portal>
        <Drawer.Backdrop className={bottomSheetBackdropClass} />
        <Drawer.Viewport className={bottomSheetViewportClass}>
          <Drawer.Popup className={bottomSheetPopupClass}>
            <div className={bottomSheetHandleClass} />

            <Drawer.Content>
              {title && <Drawer.Title className={bottomSheetTitleClass}>{title}</Drawer.Title>}
              {description && (
                <Drawer.Description className={bottomSheetDescriptionClass}>
                  {description}
                </Drawer.Description>
              )}
              {children}
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
