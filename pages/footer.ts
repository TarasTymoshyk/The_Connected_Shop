import { Locator, Page, expect } from '@playwright/test'
export class Footer {
    readonly our_story: Locator;
    readonly BBBRating: Locator;
    constructor(page: Page) {
        this.our_story = page.getByRole('link', { name: 'About us' });
        this.BBBRating = page.locator('div.footer-block__details-content');
    }
    async ourStoryLink() {
        await expect(this.our_story).toHaveAttribute('href', '/pages/about-us');
    }
    async BBB() {
        await expect(this.BBBRating).toHaveAttribute('src', 'https://seal-seflorida.bbb.org/seals/black-seal-293-61-bbb-92025167.png');

    }
}