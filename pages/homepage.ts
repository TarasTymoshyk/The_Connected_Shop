import { Page, expect} from '@playwright/test'
export class HomePage {
    readonly page_: Page;
    constructor(page: Page) {
        this.page_ = page;
    }
    async openHomePage() {
        await this.page_.goto('/')
    }
    async verifyURL() {
        await expect(this.page_).toHaveURL('/')

    }
}