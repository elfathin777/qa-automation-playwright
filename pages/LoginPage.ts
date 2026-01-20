import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly warningMessage: Locator;
    readonly warningSuccess: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.warningMessage = page.locator('[data-test="error"]');
        this.warningSuccess = page.getByText('Products');
    }

    async login(username: string, password: string){
        if (username){
            await this.usernameField.fill(username);
        }
        
        if (password){
            await this.passwordField.fill(password);
        }
        await this.loginButton.click();
    }

    async assertOnPage(URL: string){
        await expect(this.page).toHaveURL(new RegExp(URL));
    }

    async assertWarningMessage(message: string){
        await expect(this.warningMessage).toHaveText(message);
    }
}