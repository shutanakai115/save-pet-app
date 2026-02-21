import { cva } from "$styled-system/css";

export const historyEndMarkRecipe = cva({
  base: {
    opacity: 0.4,
    paddingBottom: "4",
    display: "flex",
    justifyContent: "center",
  },
});

export const historyEndMarkTextRecipe = cva({
  base: {
    fontSize: "xs",
    fontWeight: "500",
    lineHeight: "1.33",
    color: "#8C8C8C",
  },
});
