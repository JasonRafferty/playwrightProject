import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";

test("Standard user can log in @smoke @regression", async ({ page }) => {
  const loginPage = new LoginPage(page); // Initialise the LoginPage POM, giving it access to the Playwright page object

  await loginPage.goToLoginPage();
  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL(/.*\/inventory\.html/);
  await expect(page.getByText("Products")).toBeVisible();
});

test("Login fails with invalid credentials @regression", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login("invalid_user", "invalid_password");

  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service"
    )
  ).toBeVisible();
});
