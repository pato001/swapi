import { test, expect } from '@playwright/test'
import { domainsData } from './constants/constants'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

for (const item of domainsData) {
  test(`testing navbar with ${item.domain}`, async ({ page }) => {
    await page.getByTestId(`navbar-item-${item.domain}`).first().click()
    // Check that url is the one expected
    await expect(page).toHaveURL(new RegExp(item.linkUrl, 'i'))
    // Check that the title of the section is the one expected
    await expect(page.getByTestId('domain-title')).toContainText(item.domain)
    // Check search feature
    await page.getByTestId('domain-search-input').click()
    await page.getByTestId('domain-search-input').fill(item.searchText)
    await page.getByTestId('domain-search-input').press('Enter')
    const elements: any = await page.$$('[title="profile-card-name"]')
    for (const element of elements) {
      await expect(element).toHaveText(item.searchText)
    }
  })
}
