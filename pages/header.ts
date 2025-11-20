import { Locator, Page, expect} from '@playwright/test'
export class Header {
    readonly page: Page;
    readonly logo_link: Locator;
    constructor(page: Page) {
        this.page = page;
        this.logo_link = page.locator('a.header__heading-link')
    }
    async checkLogo_link() {
        await expect (this.logo_link).toBeVisible();
    }
    async verifyURL() {
        await expect(this.page).toHaveURL('/')

    }
}