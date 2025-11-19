import { test, expect } from '@playwright/test';

test('Vantage homepage logo and title test', async ({ page }) => {
  // 1. Відкрити головну сторінку
  await page.goto('https://www.vantage.software');

  // 2. Перевірити, що заголовок сторінки містить очікуваний текст
  await expect(page).toHaveTitle(/Vantage/);

  // 3. Знайти логотип (припустимо, він у <a> з класом або aria-label)
  const logo = page.locator('a[href="/"]');

  // Переконатися, що логотип існує на сторінці
  await expect(logo).toBeVisible();

  // 4. Перевірити, що посилання логотипа веде на головну URL
  const logoHref = await logo.getAttribute('href');
  expect(logoHref).toBe('/');

  // 5. Перевірити наявність повного тексту на сторінці
  const fullText = 'Installation management software built for sign & print shops';

  // Очікуємо, що текст присутній на сторінці (незалежно від регістру)
  const content = await page.locator('body').innerText();
  expect(content.toLowerCase()).toContain(fullText.toLowerCase());

  // (опціонально) натиснути на логотип і перевірити, що ми потрапили на головну
  await logo.click();
  await expect(page).toHaveURL('https://www.vantage.software');

});
