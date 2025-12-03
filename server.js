const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// --- DADOS MOCKADOS (ESTÁTICOS) ---

const posts = [
    { id: 1, title: "Post 1", body: "Conteúdo do post 1", userId: 1 },
    { id: 2, title: "Post 2", body: "Conteúdo do post 2", userId: 1 },
    { id: 3, title: "Post 3", body: "Conteúdo do post 3", userId: 2 },
    { id: 4, title: "Post 4", body: "Conteúdo do post 4", userId: 2 },
    { id: 5, title: "Post 5", body: "Conteúdo do post 5", userId: 3 }
];

const users = [
    { id: 1, name: "João Silva", email: "joao@exemplo.com" },
    { id: 2, name: "Maria Souza", email: "maria@exemplo.com" },
    { id: 3, name: "Carlos Pereira", email: "carlos@exemplo.com" }
];

const comments = [
    { id: 1, postId: 1, name: "Comentário 1", email: "test@test.com", body: "Texto do comentário 1" },
    { id: 2, postId: 1, name: "Comentário 2", email: "user@test.com", body: "Texto do comentário 2" }
];

const albums = [
    { id: 1, title: "Álbum de Fotos 1", userId: 1 },
    { id: 2, title: "Viagem 2024", userId: 2 }
];

// --- ROTAS (ENDPOINTS) ---

// Rota raiz para teste simples
app.get('/', (req, res) => {
    res.send('Servidor Local N3 rodando! Acesse /posts, /users, /comments ou /albums');
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/albums', (req, res) => {
    res.json(albums);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Endpoints disponíveis:`);
    console.log(`- http://localhost:${PORT}/posts`);
    console.log(`- http://localhost:${PORT}/users`);
    console.log(`- http://localhost:${PORT}/comments`);
    console.log(`- http://localhost:${PORT}/albums`);
});