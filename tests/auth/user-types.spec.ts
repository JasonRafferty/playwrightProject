import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import users from "../../data/users.json";

for (const user of users) {
  test(`Login with user ${user.username} @regression`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login(user.username, user.password);

    await expect(page).toHaveURL(/.*\/inventory\.html/);
    await expect(page.getByText("Products")).toBeVisible();
  });
}
