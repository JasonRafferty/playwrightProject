import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page.ts";

test("test", async ({ page }) => {

  const Login = new LoginPage(page); // Initialise the LoginPage POM, giving it access to the Playwright page object

  await Login.goToLoginPage();
  await Login.login("standard_user", "secret_sauce");
});
