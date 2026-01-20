import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test.describe('Login Case', () => {

    /* 
    1. Successful Login
    - Login using valid credentials
    - Verify user is redirected to the inventory page
    */
    test('TC_LOG_001 | should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.assertOnPage('/inventory.html');
    })



    /* 
    3. Negative Login
    - Login with invalid credentials
    - Verify correct error message is displayed
    */
    test('TC_LOG_002 | should show error message for invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('invalid_user', 'invalid_password');
        await loginPage.assertWarningMessage('Epic sadface: Username and password do not match any user in this service');
        await loginPage.assertOnPage('https://www.saucedemo.com');
    })

})
