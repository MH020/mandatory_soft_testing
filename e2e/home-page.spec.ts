import { test, expect } from '@playwright/test';

test('has heading "Fake Personal Data Generator"', async ({ page }) => {
    const path = 'http://localhost:8080/';
    
    await page.goto(path);

    await expect( page.getByRole('heading', { name: 'Fake Personal Data Generator' }) ).toBeVisible();
});