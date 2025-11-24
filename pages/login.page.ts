import { Page, Locator } from "@playwright/test";
export class LoginPage {
  // Class properties with their types
  private page: Page;
  private username_textbox: Locator;
  private password_textbox: Locator;
  private login_button: Locator;

  // Constructor: runs when we create a new LoginPage object
  constructor(page: Page) {
    this.page = page;
    this.username_textbox = page.locator('[data-test="username"]');
    this.password_textbox = page.locator('[data-test="password"]');
    this.login_button = page.locator('[data-test="login-button"]');
  }

  async goToLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}

// A class is a blueprint (template) for creating a login page object.
// The constructor is the setup function that runs when we make a new object.
// Setup = prepare it so it can work later.
// It runs automatically when we do: const login = new LoginPage(page);
