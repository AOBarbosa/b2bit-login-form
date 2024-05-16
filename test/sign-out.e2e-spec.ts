import { expect, test } from '@playwright/test'

test('logout successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByTestId('email-input').fill('cliente@youdrive.com')
  await page.getByTestId('password-input').fill('password')
  await page.getByTestId('sign-in-button').click()

  await page.waitForURL('/profile')

  await page.goto('/profile', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Logout' }).click()

  await expect(page).toHaveURL('/sign-in')
})
