import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { Header } from '../pages/header'
import { Footer } from '../pages/footer'
import { Search } from '../pages/Search'

test.describe('Check elements of homepage', () => {
    let homepage: HomePage
    let header: Header
    let footer: Footer
    let search: Search
    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page)
        header = new Header(page)
        footer = new Footer(page)
        search = new Search(page)
        await homepage.openHomePage()
    })
    test('Check_UI_elements', async ({ page }) => {
        await header.checkLogo_link()
        await header.mainLogo()
        await header.cartLink()
        await footer.ourStoryLink()
        await footer.bbb()
        await search.checkSearchIcon()
        await search.checkSearchPlaceholder()
        await search.checkSearchIcon()
    })
})