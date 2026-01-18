import { test, expect, _baseTest } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";

test("User can add to Cart @smoke @regression", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.login("standard_user", "secret_sauce");

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
});
