import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { HomePage } from '../../../pages/HomePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');  
})



test.describe('Cart Case', () => {
   
    /*
    2. Add Item to Cart
    - Add at least one item to cart
    - Verify cart badge count
    - Verify item appears in cart page
    */
    test('TC_CART_001 | should add item to cart and update cart badge', async ({ page }) => {
        await homePage.addItem('sauce-labs-backpack');    
        await homePage.verifyCartBadge('1');
        await homePage.clickCartIcon();
        await homePage.verifyItemAppearsByTitle('Sauce Labs Backpack')
    })  

})