import { sva } from "$styled-system/css";

export const dialogSlotRecipe = sva({
  slots: ["backdrop", "popup", "title", "description"],
  base: {
    backdrop: {
      position: "fixed",
      inset: 0,
      minH: "dvh",
      backgroundColor: "black",
      opacity: 0.35,
      transition: "opacity 150ms ease-in-out",
      "&[data-starting-style], &[data-ending-style]": { opacity: 0 },
    },
    popup: {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "sm",
      maxW: "calc(100vw - 24px)",
      backgroundColor: "white",
      border: "1px solid",
      borderColor: "border.DEFAULT",
      borderRadius: "2xl",
      boxShadow: "xl",
      padding: 6,
      color: "fg.DEFAULT",
      "&[data-starting-style], &[data-ending-style]": {
        opacity: 0,
        transform: "translate(-50%, -50%) scale(0.96)",
      },
    },
    title: {
      marginTop: 0,
      marginBottom: 1,
      fontSize: "xl",
      fontWeight: "bold",
    },
    description: {
      marginTop: 0,
      marginBottom: 5,
      fontSize: "sm",
      color: "fg.muted",
    },
  },
});
