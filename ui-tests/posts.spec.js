const { test, expect } = require('@playwright/test');

test.describe('Posts Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/posts.html');
  });

  test('Carregar posts e verificar conteúdo', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Posts');
    await expect(page.locator('h3')).toHaveText('Lista de Posts');

    // Verifica se os posts são carregados
    const postCards = page.locator('.card');
    await expect(postCards).toHaveCount(5); // Espera 5 posts conforme dados mockados

    // Verifica o conteúdo do primeiro post
    const firstPostTitle = postCards.nth(0).locator('h3');
    const firstPostBody = postCards.nth(0).locator('p');
    await expect(firstPostTitle).toHaveText('Post 1');
    await expect(firstPostBody).toHaveText('Conteúdo do post 1');
  });

    test('Exibir mensagem de erro ao falhar o carregamento', async ({ page }) => {
    // Intercepta a requisição para simular um erro
    await page.route('http://localhost:3000/posts', route =>
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      })
    );

    // Recarrega a página para disparar a requisição interceptada
    await page.reload();

    // Verifica se a mensagem de erro é exibida
    const errorMessage = page.locator('.error');
    await expect(errorMessage).toHaveText(/Erro/i);
  }

)
test('Filtrar posts por User ID e verificar a contagem', async ({ page }) => {
    
    const initialPostCards = page.locator('.card'); 
    await expect(initialPostCards).toHaveCount(5); 

    const userIdSelect = page.locator('#userIdInput');
    await userIdSelect.selectOption('2');

    await page.locator('#filterButton').click();

    const filteredPostCards = page.locator('#postsSection .card');
    await expect(filteredPostCards).toHaveCount(2); 

    await expect(page.locator('#clearFilterButton')).toBeVisible();
});
});
