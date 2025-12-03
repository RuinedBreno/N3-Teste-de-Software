const { test, expect } = require('@playwright/test');

test.describe("Teste de Navegação - Mini Rede Social", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/index.html");
  });

  test("Navegar para Posts", async ({ page }) => {
    await page.click('text=Posts');
    await expect(page).toHaveURL(/posts\.html/);
  });

  test("Navegar para Usuários", async ({ page }) => {
    await page.click('text=Usuários');
    await expect(page).toHaveURL(/users\.html/);
  });

  test("Navegar para Comentários", async ({ page }) => {
    await page.click('text=Comentários');
    await expect(page).toHaveURL(/comments\.html/);
  });

  test("Navegar para Todos", async ({ page }) => {
    await page.click('text=Todos');
    await expect(page).toHaveURL(/todos\.html/);
  });

  test("Navegar para Álbuns", async ({ page }) => {
    await page.click('text=Álbuns');
    await expect(page).toHaveURL(/albums\.html/);
  });

});