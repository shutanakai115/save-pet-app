"use client";

import type { ReactNode } from "react";

import { motion } from "motion/react";

import { Button } from "@/components/primitives";

import {
  drawerStepHeaderRecipe,
  drawerStepRootRecipe,
  drawerStepSubtitleRecipe,
  drawerStepTitleRecipe,
} from "./DrawerStep.recipe";

interface DrawerStepRootProps {
  children: ReactNode;
}

interface DrawerStepHeaderProps {
  children: ReactNode;
}

interface DrawerStepTitleProps {
  children: ReactNode;
}

interface DrawerStepSubtitleProps {
  children: ReactNode;
}

interface DrawerStepSubmitProps {
  label: string;
  onSubmit: () => void | Promise<void>;
  canSubmit?: boolean;
  loading?: boolean;
}

function Root({ children }: DrawerStepRootProps) {
  return <section className={drawerStepRootRecipe()}>{children}</section>;
}

function Header({ children }: DrawerStepHeaderProps) {
  return <header className={drawerStepHeaderRecipe()}>{children}</header>;
}

function Title({ children }: DrawerStepTitleProps) {
  return <h2 className={drawerStepTitleRecipe()}>{children}</h2>;
}

function Subtitle({ children }: DrawerStepSubtitleProps) {
  return <p className={drawerStepSubtitleRecipe()}>{children}</p>;
}

function Submit({ label, onSubmit, canSubmit = true, loading = false }: DrawerStepSubmitProps) {
  const isDisabled = !canSubmit || loading;

  return (
    <motion.div
      whileTap={!isDisabled ? { scale: 0.9, y: 4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
    >
      <Button
        variant="cta"
        size="xl"
        fullWidth
        disabled={isDisabled}
        loading={loading}
        onClick={() => void onSubmit()}
      >
        {label}
      </Button>
    </motion.div>
  );
}

export const DrawerStep = {
  Root,
  Header,
  Title,
  Subtitle,
  Submit,
};
