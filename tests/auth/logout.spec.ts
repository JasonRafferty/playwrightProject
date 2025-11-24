import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";

test("Standard user can log out @smoke @regression", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.login("standard_user", "secret_sauce");
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await expect(page.locator('[data-test="username"]')).toBeVisible();
});
