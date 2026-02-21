import { cva } from "$styled-system/css";
import type { SavingsCategory } from "@/components/features/history";

export const goalChangeDrawerContentRecipe = cva({
  base: {
    display: "grid",
    gap: "4",
    paddingBottom: "2",
  },
});

export const goalChangeAmountPanelRecipe = cva({
  base: {
    display: "grid",
    gap: "3",
    borderRadius: "xl",
    border: "1px solid",
    borderColor: "primary.300",
    backgroundColor: "white",
    paddingX: "4",
    paddingY: "3",
  },
});

export const goalChangeAmountHintRecipe = cva({
  base: {
    fontSize: "sm",
    color: "neutral.500",
    textAlign: "center",
    fontWeight: "600",
  },
});

export const goalChangeFieldGroupRecipe = cva({
  base: {
    display: "grid",
    gap: "2",
  },
});

export const goalChangeFieldLabelRecipe = cva({
  base: {
    fontSize: "xs",
    fontWeight: "bold",
    color: "primary.500",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
});

export const goalChangeCategoryGridRecipe = cva({
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "3",
  },
});

export const goalChangeCategoryChipRecipe = cva({
  variants: {
    category: {
      convenience: {},
      cafe: {},
      online: {},
      dining: {},
      other: {},
    } satisfies Record<SavingsCategory, Record<string, never>>,
    selected: {
      true: {
        fontWeight: "700",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      category: "convenience",
      selected: false,
      css: { borderColor: "rgba(202,138,4,0.35)", backgroundColor: "white", color: "#CA8A04" },
    },
    {
      category: "convenience",
      selected: true,
      css: { borderColor: "#CA8A04", backgroundColor: "#FEF9C3", color: "#CA8A04" },
    },
    {
      category: "cafe",
      selected: false,
      css: { borderColor: "rgba(249,115,22,0.35)", backgroundColor: "white", color: "#F97316" },
    },
    {
      category: "cafe",
      selected: true,
      css: { borderColor: "#F97316", backgroundColor: "#FFEDD5", color: "#F97316" },
    },
    {
      category: "online",
      selected: false,
      css: { borderColor: "rgba(168,85,247,0.35)", backgroundColor: "white", color: "#A855F7" },
    },
    {
      category: "online",
      selected: true,
      css: { borderColor: "#A855F7", backgroundColor: "#F3E8FF", color: "#A855F7" },
    },
    {
      category: "dining",
      selected: false,
      css: { borderColor: "rgba(59,130,246,0.35)", backgroundColor: "white", color: "#3B82F6" },
    },
    {
      category: "dining",
      selected: true,
      css: { borderColor: "#3B82F6", backgroundColor: "#DBEAFE", color: "#3B82F6" },
    },
    {
      category: "other",
      selected: false,
      css: { borderColor: "rgba(34,197,94,0.35)", backgroundColor: "white", color: "#22C55E" },
    },
    {
      category: "other",
      selected: true,
      css: { borderColor: "#22C55E", backgroundColor: "#DCFCE7", color: "#22C55E" },
    },
  ],
});

export const goalChangeBackButtonRecipe = cva({
  base: {
    justifySelf: "center",
    minH: "11",
    paddingX: "4",
    color: "neutral.600",
    fontSize: "sm",
    fontWeight: "700",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    _hover: {
      color: "neutral.700",
    },
    _active: {
      color: "neutral.800",
    },
  },
});

export const goalChangeTriggerButtonRecipe = cva({
  base: {
    maxW: "72",
    marginInline: "auto",
    borderRadius: "full",
    border: "2px solid #FF6F4A",
    backgroundColor: "transparent",
    color: "#FF6F4A",
    fontWeight: "bold",
    fontSize: "sm",
    minHeight: "14",
    paddingX: "8",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    cursor: "pointer",
    opacity: "0.95",
  },
});
