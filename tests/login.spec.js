
import { test, expect } from '@playwright/test';

test('successful user login', async ({ page }) => {

  // Step 1: Open the banking-style demo application
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter username
  await page.locator('[data-test="username"]').fill('standard_user');

  // Step 3: Enter password
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Step 4: Click the login button
  await page.locator('[data-test="login-button"]').click();

  // Step 5: Verify successful login
  await expect(page).toHaveURL(/inventory/);

  await expect(page.getByText('Products')).toBeVisible();

});

test('unsuccessful login with incorrect password', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('wrong_password');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();

});




