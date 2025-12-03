const { test, expect } = require('@playwright/test');

test.describe('Comments Page', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/comments.html');
      });
  test( "Verifica se o título aparece", async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Comentários');
    await expect(page.locator('h3')).toHaveText('Lista de Comentários');
  });

  test("Comentários - carregados", async ({ page }) => {
    await expect(page.locator('#comments-container')).toBeVisible();
  });
  
  test('Exibir mensagem de erro ao falhar o carregamento', async ({ page }) => {
        //simular um erro
    await page.route('http://localhost:3000/comments', route =>
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