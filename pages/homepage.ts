import { Page, expect} from '@playwright/test'
export class HomePage {
    readonly page_tcs: Page;
    constructor(page: Page) {
        this.page_tcs = page;
    }
    async openHomePage() {
        await this.page_tcs.goto('/')
    }
    async verifyURL() {
        await expect(this.page_tcs).toHaveURL('/')

    }
}