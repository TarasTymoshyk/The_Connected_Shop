import { Locator, Page, expect } from '@playwright/test'
export class Header {
    readonly search_area: Locator
    readonly search_placeholder: Locator
    readonly search_icon: Locator
    readonly search_autocomplete_default: Locator
    constructor(page: Page) {
        this.search_area = page.locator('form.search').first()
        this.search_placeholder = page.locator('#Search-In-Inline')
        this.search_icon = page.locator('use[href="#icon-search"], use[*|href="#icon-search"]')
        this.search_autocomplete_default = this.search_placeholder
    }
    async checkSearchAction() {
        await expect(this.search_area).toHaveAttribute('action', /search/)
    }
    async checkSearchPlaceholder() {
        await expect(this.search_placeholder).toBeVisible()
        await expect(this.search_placeholder).toHaveAttribute('placeholder', 'Search')
        await expect(this.search_autocomplete_default).toHaveAttribute('autocomplete', 'off')
    }
    async checkSearchIcon() {
        await expect(this.search_icon).toBeVisible()
    }
}