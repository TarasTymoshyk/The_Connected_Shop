import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { Header } from '../pages/header'
import { Footer } from '../pages/footer'
import { Search } from '../pages/search'

test.describe('Check elements of homepage', () => {
    let homepage: HomePage
    let header: Header
    let footer: Footer
    let search: Search
    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page)
        header = new Header(page)
        footer = new Footer(page)
        search = new search(page)
        await homepage.openHomePage()
    })
    test('Check_logo', async ({ page }) => {
        await header.checkLogo_link ()
        await header.mainLogo ()
    })
})