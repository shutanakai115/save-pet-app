"use client";

import type { ReactNode } from "react";

import { DrawerPreview as Drawer } from "@base-ui/react/drawer";

import { bottomSheetSlotRecipe } from "./BottomSheet.recipe";

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
  const classes = bottomSheetSlotRecipe();

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} swipeDirection="down">
      <Drawer.Portal>
        <Drawer.Backdrop className={classes.backdrop} />
        <Drawer.Viewport className={classes.viewport}>
          <Drawer.Popup className={classes.popup}>
            <div className={classes.handle} />

            <Drawer.Content>
              {title && <Drawer.Title className={classes.title}>{title}</Drawer.Title>}
              {description && (
                <Drawer.Description className={classes.description}>
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
