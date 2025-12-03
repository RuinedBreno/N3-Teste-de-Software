const { test, expect } = require('@playwright/test');

test.describe('Todos Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/todos.html');
  });

  test( "Verifica se o título aparece", async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Todos');
    await expect(page.locator('h3')).toHaveText('Lista de Tarefas');
  });

  test("Tarefas - carregadas", async ({ page }) => {
    await expect(page.locator('#todos-container')).toBeVisible();
  });
  
  test('Exibir mensagem de erro ao falhar o carregamento', async ({ page }) => {
        //simular um erro
    await page.route('http://localhost:3000/todos', route =>
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      })
    );

    await page.reload();

    //Mensagem de erro
    const errorMessage = page.locator('.error');
    await expect(errorMessage).toHaveText(/Erro/i);
  }
)});