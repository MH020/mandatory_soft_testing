import { test, expect } from '@playwright/test';

test('has heading "Fake Personal Data Generator"', async ({ page }) => {
    
    // Todo: Replace path with localhost, when backend is up.
    const path = 'your/path/here/public/index.html';
    //const path = 'http://localhost:8080/';
    
    await page.goto(path);

    await expect( page.getByRole('heading', { name: 'Fake Personal Data Generator' }) ).toBeVisible();
});