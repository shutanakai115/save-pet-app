import { cva } from "$styled-system/css";

export const recordsPanelRecipe = cva({
  base: {
    marginTop: "1",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    borderTop: "1px solid rgba(255,255,255,0.6)",
    backgroundColor: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(12px)",
    boxShadow: "0px -5px 25px -5px rgba(0,0,0,0.05)",
    paddingX: "6",
    paddingTop: "6",
    paddingBottom: "28",
    display: "flex",
    flexDirection: "column",
    gap: "4",
  },
});

export const recordListRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5",
  },
});

export const recordCardRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    padding: "3",
    borderRadius: "40px",
    border: "1px solid rgba(243,244,246,0.5)",
    backgroundColor: "white",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
  },
});

export const recordBodyRecipe = cva({
  base: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
  },
});

export const recordDateRecipe = cva({
  base: {
    fontSize: "xs",
    fontWeight: "bold",
    lineHeight: "1.5",
    color: "#9C8E49",
  },
});

export const recordDescriptionRecipe = cva({
  base: {
    fontSize: "sm",
    fontWeight: "bold",
    lineHeight: "1.4",
    color: "#4A4036",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export const recordAmountRecipe = cva({
  base: {
    fontSize: "lg",
    fontWeight: "800",
    lineHeight: "1.55",
    color: "#FFC107",
  },
});
