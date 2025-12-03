const { test, expect } = require('@playwright/test');
const e = require('express');

test.describe('Albums Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/albums.html');
  });

  test( "Verifica título da página", async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Albums');
    await expect(page.locator('h3')).toHaveText('Lista de Albums');
    // Verifica se os álbuns são carregados
    const albumCards = page.locator('.card');
    await expect(albumCards).toHaveCount(2); // Espera 2 álbuns conforme dados mockados

    // Verifica o conteúdo do primeiro álbum
    const firstAlbumTitle = albumCards.nth(0).locator('h3');
    await expect(firstAlbumTitle).toHaveText('Álbum de Fotos 1');
  });

    test('Exibir mensagem de erro ao falhar o carregamento', async ({ page }) => {
    // Intercepta a requisição para simular um erro
    await page.route('http://localhost:3000/albums', route =>
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
)});