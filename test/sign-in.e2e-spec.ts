import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByTestId('email-input').fill('cliente@youdrive.com')
  await page.getByTestId('password-input').fill('password')

  await page.getByTestId('sign-in-button').click()

  await page.waitForURL('/profile')

  expect(page).toHaveURL('/profile')
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByTestId('email-input').fill('wrong@youdrive.com')
  await page.getByTestId('password-input').fill('password')

  await page.getByTestId('sign-in-button').click()

  const toast = page.getByText('Email ou Senha incorretos. Tente novamente.')

  await page.waitForTimeout(2000)
  expect(toast).toBeVisible()
})
