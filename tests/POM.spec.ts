import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { Header } from '../pages/header'
import { Footer } from '../pages/footer'
import { Search } from '../pages/Search'
import { SearchValidation } from '../pages/SearchValidation'

test.describe('Check elements of homepage', () => {
    let homepage: HomePage
    let header: Header
    let footer: Footer
    let search: Search
    let search_test: SearchValidation
    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page)
        header = new Header(page)
        footer = new Footer(page)
        search = new Search(page)
        search_test = new SearchValidation(page)
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
    test('Search_validation', async ({ page }) => {
        await search_test.searchData("Smart")
        await search_test.verifySearchResults()
        await search_test.searchData("adfaksdfnakljsdnf")
        await search_test.verifyNoResults()
    })
})