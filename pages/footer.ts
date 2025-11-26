import { Locator, Page, expect } from '@playwright/test'
export class Footer {
    readonly our_story: Locator;
    readonly BBBRating: Locator;
    constructor(page: Page) {
        this.our_story = page.getByRole('link', { name: 'About us' });
        this.BBBRating = page.locator('.footer-block__details-content a[href*="bbb.org"]').nth(0);
    }
    async ourStoryLink() {
        await expect(this.our_story).toHaveAttribute('href', '/pages/about-us');
    }
    async bbb() {
        const container = this.BBBRating;
        const anchor = container.locator('a');
        const img = container.locator('img');

        await expect(img).toHaveAttribute('alt', 'Connected Shop Inc BBB Business Review');

    }
}