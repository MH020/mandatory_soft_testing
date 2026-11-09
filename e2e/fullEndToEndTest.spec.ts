import { test, expect, Page } from '@playwright/test';

type Elements = {
  name?: boolean;
  gender?: boolean;
  birthdate?: boolean;
  cpr?: boolean;
  address?: boolean;
  phone?: boolean;
}


test('Full end to end test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  // generate 1 person
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('.personCard')).toHaveCount(1);

  // generate 20 persons
  await page.locator('#txtNumberPersons').click();
  await page.locator('#txtNumberPersons').fill('20');
  await page.locator('#txtNumberPersons').press('Enter');

  await expect(page.locator('.personCard')).toHaveCount(20);

  // start partial generation (starting with just cpr)
  await page.getByRole('radio', { name: 'Partial generation:' }).check();
  await page.getByRole('button', { name: 'Generate' }).click();
  await checkOnlyCorrectElementsAreShowing({ cpr: true })

  // generate name-gender
  await page.locator('#cmbPartialOptions').selectOption('name-gender');
  await page.getByRole('button', { name: 'Generate' }).click();
  await checkOnlyCorrectElementsAreShowing({ name: true, gender: true })

  // generate name-gender-dob
  await page.locator('#cmbPartialOptions').selectOption('name-gender-dob');
  await page.getByRole('button', { name: 'Generate' }).click();
  await checkOnlyCorrectElementsAreShowing({ name: true, gender: true, birthdate: true })

  // generate cpr-name-gender
  await page.locator('#cmbPartialOptions').selectOption('cpr-name-gender');
  await page.getByRole('button', { name: 'Generate' }).click();
  await checkOnlyCorrectElementsAreShowing({ name: true, gender: true, cpr: true })

  // generate cpr-name-gender-dob
  await page.locator('#cmbPartialOptions').selectOption('cpr-name-gender-dob');
  await page.getByRole('button', { name: 'Generate' }).click();
  await checkOnlyCorrectElementsAreShowing({ name: true, gender: true, birthdate: true, cpr: true })

  // generate address
  await page.locator('#cmbPartialOptions').selectOption('address');
  await page.getByRole('button', { name: 'Generate' }).click();
  await checkOnlyCorrectElementsAreShowing({ address: true })

  // generate phone
  await page.locator('#cmbPartialOptions').selectOption('phone');
  await page.getByRole('button', { name: 'Generate' }).click();
  await page.getByRole('radio', { name: 'person(s)' }).check();
  await checkOnlyCorrectElementsAreShowing({ phone: true })

  // go back to full generation
  await page.locator('#txtNumberPersons').click();
  await page.locator('#txtNumberPersons').fill('2');
  await page.locator('#txtNumberPersons').press('Enter');

  await expect(page.locator('.personCard')).toHaveCount(2);

  // helper function to check if only the correct elements are showing,
  // and that the other elements are hidden during partial generation
  async function checkOnlyCorrectElementsAreShowing(elements: Elements)
  {
    await expect(page.locator('.personCard')).toHaveCount(1);

    // all elements have 1 class if they are showing, and 2 classes if they are not showing (the second class is "hidden")
    if (elements.name)
    {
      await expect(page.locator('.firstName')).not.toHaveClass(/hidden/);
      await expect(page.locator('.firstNameValue')).not.toHaveClass(/hidden/);
      await expect(page.locator('.lastName')).not.toHaveClass(/hidden/);
      await expect(page.locator('.lastNameValue')).not.toHaveClass(/hidden/);
    } else 
    {
      await expect(page.locator('.firstName')).toHaveClass(/hidden/);
      await expect(page.locator('.firstNameValue')).toHaveClass(/hidden/);
      await expect(page.locator('.lastName')).toHaveClass(/hidden/);
      await expect(page.locator('.lastNameValue')).toHaveClass(/hidden/);
    }

    if (elements.gender)
    {
      await expect(page.locator('.gender')).not.toHaveClass(/hidden/);
      await expect(page.locator('.genderValue')).not.toHaveClass(/hidden/);
    } else 
    {
      await expect(page.locator('.gender')).toHaveClass(/hidden/);
      await expect(page.locator('.genderValue')).toHaveClass(/hidden/);
    }

    if (elements.birthdate)
    {
      await expect(page.locator('.dob')).not.toHaveClass(/hidden/);
      await expect(page.locator('.dobValue')).not.toHaveClass(/hidden/);
    } else 
    {
      await expect(page.locator('.dob')).toHaveClass(/hidden/);
      await expect(page.locator('.dobValue')).toHaveClass(/hidden/);
    }

    if (elements.address)
    {
      await expect(page.locator('.address')).not.toHaveClass(/hidden/);
    } else 
    {
      await expect(page.locator('.address')).toHaveClass(/hidden/);
    }
    
    if (elements.cpr)
    {
      await expect(page.locator('.cpr')).not.toHaveClass(/hidden/);
      await expect(page.locator('.cprValue')).not.toHaveClass(/hidden/);
    } else 
    {
      await expect(page.locator('.cpr')).toHaveClass(/hidden/);
      await expect(page.locator('.cprValue')).toHaveClass(/hidden/);
    }
  }
});