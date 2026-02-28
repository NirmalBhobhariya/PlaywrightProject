import { test, expect } from '@playwright/test';

test('Successful login with valid credentials', async ({ page }) => {
  // 1. Navigate to the login page page
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Fill in the username and password fields
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // 3. Click the login button
  await page.click('button[type="submit"]');

  // 4. Verify successful login by checking for the success message and secure area
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  await expect(page).toHaveURL(/secure/); // Verify URL changes to include '/secure'

  // 5. Verify the logout button is visible (optional assertion)
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});
