import { test, expect } from '@playwright/test'
import { domainsData } from './constants/constants'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

for (const item of domainsData) {
  test(`testing navbar with ${item.domain}`, async ({ page }) => {
    await page.getByTestId(`navbar-item-${item.domain}`).first().click()
    await expect(page).toHaveURL(new RegExp(item.linkUrl, 'i'))
  })
}
