import { Locator, Page, expect } from '@playwright/test'

export class SearchValidation {
    readonly pageS: Page
    readonly searchInput: Locator

    constructor(page: Page) {
        this.pageS = page
        this.searchInput = page.locator('#Search-In-Inline')
    }

    async searchData(query: string) {
        await this.searchInput.fill(query)
        await this.searchInput.press('Enter')
        await this.pageS.waitForURL(/search/, { timeout: 3000 })
    }

    async verifySearchResults() {
        // Чекаємо що URL містить search
        await expect(this.pageS).toHaveURL(/search/)

        // Перевіряємо що є хоч щось на сторінці (не порожня)
        const bodyText = await this.pageS.textContent('body')
        await expect(bodyText).toContain('Smart Door Lock Slim')
    }

    async verifyNoResults() {
        const dropdown = this.pageS.locator('.predictive-search__group--with-media')
        await expect(dropdown).toBeHidden({ timeout: 1500 })
    }
}