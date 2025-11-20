import { expect, test } from '@playwright/test'
test.describe('Check elements of homepage', () => {
    test('homepage test', async ({ page }) => {
        await page.goto('/')
        await expect(page).toHaveURL('/')
        await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
    })

    test('main_logo_verification', async ({ page }) => {
        await page.goto('/')
        const logo = page.locator('a.header__heading-link').nth(0)
        const logoImage = logo.locator('img.header__heading-logo')
        await expect(logo).toBeVisible({ timeout: 3000 })
        await expect(logo).toHaveAttribute('href', '/')
        await expect(logoImage).toBeVisible()
        await expect(logoImage).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_Logo_3468ca3e-4c94-4a38-b086-2fca61a54d36.png?v=1713460187&width=500')
        await expect(logoImage).toHaveAttribute('width', '180')
        await expect(logoImage).toHaveAttribute('height', '90.0')
    })

    test('search_area_ui_verification', async ({ page }) => {
        await page.goto('/')
        const search_area = page.locator('form.search').first()
        await expect(search_area).toBeVisible()
        await expect(search_area).toHaveAttribute('action', /search/)

        const search_placeholder = page.locator('#Search-In-Inline')
        await expect(search_placeholder).toBeVisible()
        await expect(search_placeholder).toHaveAttribute('placeholder', 'Search')

        const search_icon = page.locator('use[href="#icon-search"], use[*|href="#icon-search"]')
        await expect(search_icon.first()).toBeVisible()
    })

    test('customer support', async ({ page }) => {
        await page.goto('/')
        const cell_redirection = page.locator('a.header__customer-support-region__button.header__customer-support-region').nth(1)
        await expect(cell_redirection).toBeVisible({ timeout: 3000 })
        await expect(cell_redirection).toHaveAttribute('href', 'tel:(305) 330-3424')
    })

    test('account_icon', async ({ page }) => {
        await page.goto('/')
        const account_icon = page.locator('a.header__icon.header__icon--account').nth(2)
        await expect(account_icon).toBeVisible({ timeout: 3000 })
        await expect(account_icon).toHaveAttribute('href', 'https://theconnectedshop.com/customer_authentication/redirect?locale=en&region_country=UA')
    })

    test('cart_icon', async ({ page }) => {
        await page.goto('/')
        const cart_icon = page.locator('a.header__icon--cart').last()
        await expect(cart_icon).toBeVisible()
        await expect(cart_icon).toHaveAttribute('href', '/cart')
    })

    test('footer_OurStory', async ({ page }) => {
        await page.goto('/')
        await expect(page.getByRole('link', { name: 'About us' })).toHaveAttribute('href', '/pages/about-us')
    })

    test('footer_BBBRating', async({ page })=> {
        await page.goto('/') // main page
        const BBB = page.locator('div.footer-block__details-content')
    })
})