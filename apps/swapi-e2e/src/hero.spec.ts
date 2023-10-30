import { test, expect } from '@playwright/test'
import { domainsData } from './constants/constants'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

for (const item of domainsData) {
  test(`testing hero with ${item.domain}`, async ({ page }) => {
    await page.getByTestId(`hero-nav-btn-${item.domain}`).click()
    await expect(page.getByTestId(`hero-title-${item.domain}`)).toHaveText(
      item.title
    )
    await expect(
      page.getByTestId(`hero-description1-${item.domain}`)
    ).toHaveText(item.description1)
    await expect(
      page.getByTestId(`hero-description2-${item.domain}`)
    ).toHaveText(item.description2)
    await page.getByTestId(`hero-link-${item.domain}`).click()
    await expect(page).toHaveURL(new RegExp(item.linkUrl, 'i'))
  })
}
