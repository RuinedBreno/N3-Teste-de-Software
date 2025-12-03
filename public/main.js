
const API_BASE = "http://localhost:3000";


async function fetchJson(url) {
    const res = await fetch(url, { headers: { "Accept": "application/json" }});
    return await res.json();
}


async function loadPosts() {
    const container = document.getElementById("postsSection");
    if (!container) return;

    container.innerHTML = '<p class="loading">Carregando posts...</p>';

    try {
        const resp = await fetchJson(`${API_BASE}/posts`);

        container.innerHTML = "";

        resp.forEach(post => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <p><strong>User ID:</strong> ${post.userId}</p>
            `;

            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = `<p class="error">Erro ao carregar posts: ${err.message}</p>`;
    }
}


async function loadUsersPage() {
    const container = document.getElementById("users-container");
    if (!container) return;

    container.innerHTML = '<p class="loading">Carregando usuários...</p>';

    try {
        const users = await fetchJson(`${API_BASE}/users`);
        container.innerHTML = "";

        users.forEach(user => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Email:</strong> ${user.email}</p>
            `;

            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = `<p class="error">Erro ao carregar usuários: ${err.message}</p>`;
    }
}


async function loadComments() {
    const container = document.getElementById("comments-container");
    if (!container) return;

    container.innerHTML = '<p class="loading">Carregando comentários...</p>';

    try {
        const comments = await fetchJson(`${API_BASE}/comments`);
        container.innerHTML = "";

        comments.forEach(comment => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h4>${comment.name}</h4>
                <p>${comment.body}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p><strong>Post ID:</strong> ${comment.postId}</p>
            `;

            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = `<p class="error">Erro ao carregar comentários: ${err.message}</p>`;
    }
}


async function loadAlbums() {
    const container = document.getElementById("albums-container");
    if (!container) return;

    container.innerHTML = '<p class="loading">Carregando álbuns...</p>';

    try {
        const albums = await fetchJson(`${API_BASE}/albums`);
        container.innerHTML = "";

        albums.forEach(album => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h4>Álbum ${album.id}</h4>
                <p><strong>Título:</strong> ${album.title}</p>
                <p><strong>User ID:</strong> ${album.userId}</p>
            `;

            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = `<p class="error">Erro ao carregar álbuns: ${err.message}</p>`;
    }
}


async function loadTodos() {
    const container = document.getElementById("todos-container");
    if (!container) return;

    container.innerHTML = '<p class="loading">Carregando tarefas...</p>';

    try {
        const todos = await fetchJson(`${API_BASE}/todos`);
        container.innerHTML = "";

        todos.forEach(todo => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h4>${todo.title}</h4>
                <p><strong>ID:</strong> ${todo.id}</p>
                <p><strong>Status:</strong> ${todo.completed ? "Concluído" : "Pendente"}</p>
            `;

            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = `<p class="error">Erro ao carregar tarefas: ${err.message}</p>`;
    }
}