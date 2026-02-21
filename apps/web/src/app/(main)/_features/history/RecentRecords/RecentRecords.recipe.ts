import { cva } from "$styled-system/css";

export const recentRecordsPanelRecipe = cva({
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

export const recentRecordsListRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5",
  },
});

export const recentRecordsEmptyRecipe = cva({
  base: {
    padding: "5",
    borderRadius: "32px",
    border: "1px solid rgba(243,244,246,0.6)",
    backgroundColor: "rgba(255,255,255,0.9)",
    textAlign: "center",
    fontSize: "sm",
    fontWeight: "600",
    color: "neutral.500",
  },
});
