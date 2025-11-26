import { Locator, Page, expect } from '@playwright/test'
export class Header {
    readonly page_tcs: Page;
    readonly logo_link: Locator;
    readonly logo: Locator;
    readonly cart: Locator;
    constructor(page: Page) {
        this.page_tcs = page;
        this.logo_link = page.locator('a.header__heading-link');
        this.logo = page.locator('img.header__heading-logo');
        this.cart = page.locator('a.header__icon--cart');
    }
    async checkLogo_link() {
        await expect(this.logo_link).toBeVisible()
        await expect(this.logo_link).toHaveAttribute('href', '/')
    }
    async mainLogo() {
        await expect(this.logo).toHaveAttribute('width', '180')
        await expect(this.logo).toBeVisible()
    }
    async cartLink() {
        await expect(this.cart).toHaveAttribute('href', '/cart')
    }
}