import {
  decorativeBackgroundCircleRecipe,
  decorativeBackgroundLayerRecipe,
} from "./DecorativeBackground.recipe";

export function DecorativeBackground() {
  return (
    <div className={decorativeBackgroundLayerRecipe()} aria-hidden="true">
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "coralSoft",
          size: "3xl",
          blur: "xl",
          position: "topRight",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "goldSoft",
          size: "2xl",
          blur: "lg",
          position: "middleLeft",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "coralSoft",
          size: "xl",
          blur: "md",
          position: "bottomRight",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "coralStrong",
          size: "md",
          blur: "none",
          position: "topRightDot",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "goldStrong",
          size: "lg",
          blur: "none",
          position: "topLeftDot",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "coral",
          size: "sm",
          blur: "none",
          position: "topCenterDot",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "coralStrong",
          size: "xs",
          blur: "none",
          position: "leftMidDot",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "gold",
          size: "sm",
          blur: "none",
          position: "rightMidDot",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "whiteSoft",
          size: "3xl",
          blur: "lg",
          position: "heroTop",
        })}
      />
      <span
        className={decorativeBackgroundCircleRecipe({
          tone: "whiteSoft",
          size: "2xl",
          blur: "sm",
          position: "heroBottom",
        })}
      />
    </div>
  );
}
