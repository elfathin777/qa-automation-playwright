import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('[data-test="inventory-item-name"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');   
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }
    
    async addItem(itemName: string){
        await this.page.locator(`[data-test="add-to-cart-${itemName}"]`).click();
    }
    
    async verifyCartBadge(count: string){
        await expect(this.cartBadge).toHaveText(count);
    }
    
    async clickCartIcon(){
        await this.cartIcon.click();
    }

    async verifyItemAppearsByTitle(itemName: string){
        await expect(this.productTitle.filter({hasText: itemName})).toBeVisible();
    }


}