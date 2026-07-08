import { expect, test } from "@playwright/test";

test.describe("ホーム画面", () => {
  test("貯金概要が表示される", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "つもり貯金" })).toBeVisible();
    await expect(page.getByRole("region", { name: "貯金概要" })).toBeVisible();
    await expect(page.getByText("貯金総額")).toBeVisible();
  });
});

test.describe("ナビゲーション", () => {
  test("目標ページへ遷移できる", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "目標" }).click();

    await expect(page).toHaveURL("/goal");
    await expect(page.getByRole("heading", { level: 1, name: "目標" })).toBeVisible();
  });
});
