/* ============================================
   ADMIN PANEL — TERRITORIA Mutuelle
   CRUD articles via GitHub API + Quill WYSIWYG
   ============================================ */

(function() {
  'use strict';

  // Config
  const REPO_OWNER = 'Solayia';
  const REPO_NAME = 'territoria-mutuelle';
  const BRANCH = 'dev';
  const API_BASE = 'https://api.github.com';

  // DOM
  const loginScreen = document.getElementById('login-screen');
  const adminPanel = document.getElementById('admin-panel');
  const loginBtn = document.getElementById('login-btn');
  const loginError = document.getElementById('login-error');
  const tokenInput = document.getElementById('github-token');
  const logoutBtn = document.getElementById('logout-btn');
  const articlesList = document.getElementById('articles-list');
  const viewDashboard = document.getElementById('view-dashboard');
  const viewEditor = document.getElementById('view-editor');
  const editorTitle = document.getElementById('editor-title');
  const publishBtn = document.getElementById('publish-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const newArticleBtn = document.getElementById('new-article-btn');
  const editorStatus = document.getElementById('editor-status');
  const sidebarBtns = document.querySelectorAll('.sidebar-btn');

  // State
  let token = '';
  let quill = null;
  let articlesIndex = [];
  let editingSlug = null; // null = new article, string = editing

  /* ---- AUTH ---- */

  function init() {
    const saved = localStorage.getItem('tm-admin-token');
    if (saved) {
      token = saved;
      verifyToken(token);
    }
  }

  loginBtn.addEventListener('click', () => {
    const val = tokenInput.value.trim();
    if (!val) {
      showLoginError('Veuillez entrer votre token GitHub.');
      return;
    }
    verifyToken(val);
  });

  tokenInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loginBtn.click();
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('tm-admin-token');
    token = '';
    loginScreen.style.display = 'flex';
    adminPanel.style.display = 'none';
  });

  async function verifyToken(t) {
    try {
      const res = await ghFetch('/repos/' + REPO_OWNER + '/' + REPO_NAME, t);
      if (res.ok) {
        token = t;
        localStorage.setItem('tm-admin-token', t);
        loginScreen.style.display = 'none';
        adminPanel.style.display = 'flex';
        loadArticles();
      } else {
        showLoginError('Token invalide ou accès refusé au repo.');
      }
    } catch {
      showLoginError('Erreur de connexion. Vérifiez votre connexion internet.');
    }
  }

  function showLoginError(msg) {
    loginError.style.display = 'block';
    loginError.textContent = msg;
  }

  /* ---- GITHUB API ---- */

  function ghFetch(path, t, options = {}) {
    return fetch(API_BASE + path, {
      ...options,
      headers: {
        'Authorization': 'token ' + (t || token),
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });
  }

  async function getFileContent(filePath) {
    const res = await ghFetch('/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contents/' + filePath + '?ref=' + BRANCH);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      content: JSON.parse(atob(data.content)),
      sha: data.sha
    };
  }

  async function putFile(filePath, content, message, sha) {
    const body = {
      message: message,
      content: btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 2)))),
      branch: BRANCH
    };
    if (sha) body.sha = sha;

    const res = await ghFetch(
      '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contents/' + filePath,
      null,
      { method: 'PUT', body: JSON.stringify(body) }
    );
    return res;
  }

  async function deleteFile(filePath, sha, message) {
    const res = await ghFetch(
      '/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contents/' + filePath,
      null,
      {
        method: 'DELETE',
        body: JSON.stringify({ message: message, sha: sha, branch: BRANCH })
      }
    );
    return res;
  }

  /* ---- ARTICLES CRUD ---- */

  async function loadArticles() {
    articlesList.innerHTML = '<div class="admin-loading">Chargement des articles...</div>';
    try {
      const data = await getFileContent('content/articles-index.json');
      if (data) {
        articlesIndex = data.content;
        articlesIndex.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else {
        articlesIndex = [];
      }
      renderArticlesList();
    } catch (err) {
      articlesList.innerHTML = '<div class="admin-loading">Erreur de chargement. Vérifiez votre connexion.</div>';
    }
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function renderArticlesList() {
    if (articlesIndex.length === 0) {
      articlesList.innerHTML = '<div class="admin-loading">Aucun article publié. Créez votre premier article !</div>';
      return;
    }

    articlesList.innerHTML = articlesIndex.map(article => `
      <div class="article-row">
        <div class="article-row-img">
          ${article.image ? '<img src="' + article.image + '" alt="">' : ''}
        </div>
        <div class="article-row-info">
          <div class="article-row-title">${article.title}</div>
          <div class="article-row-meta">
            <span class="article-row-cat">${article.category}</span>
            <span>${formatDate(article.date)}</span>
          </div>
        </div>
        <div class="article-row-actions">
          <button class="btn-admin btn-admin-edit" onclick="adminEditArticle('${article.slug}')">Modifier</button>
          <button class="btn-admin btn-admin-danger" onclick="adminDeleteArticle('${article.slug}')">Supprimer</button>
        </div>
      </div>
    `).join('');
  }

  // Expose to global for onclick handlers
  window.adminEditArticle = async function(slug) {
    showView('editor');
    editorTitle.textContent = 'Modifier l\'article';
    editingSlug = slug;
    editorStatus.style.display = 'none';

    try {
      const data = await getFileContent('content/articles/' + slug + '.json');
      if (data) {
        const article = data.content;
        document.getElementById('field-title').value = article.title || '';
        document.getElementById('field-category').value = article.category || 'Prévention';
        document.getElementById('field-date').value = article.date || '';
        document.getElementById('field-author').value = article.author || 'TERRITORIA Mutuelle';
        document.getElementById('field-image').value = article.image || '';
        document.getElementById('field-excerpt').value = article.excerpt || '';
        initQuill();
        quill.root.innerHTML = article.content || '';
      }
    } catch (err) {
      showStatus('Erreur lors du chargement de l\'article.', 'error');
    }
  };

  window.adminDeleteArticle = async function(slug) {
    if (!confirm('Supprimer cet article ? Cette action est irréversible.')) return;

    try {
      // Get file SHA
      const articleData = await getFileContent('content/articles/' + slug + '.json');
      if (articleData) {
        await deleteFile('content/articles/' + slug + '.json', articleData.sha, 'Suppression article: ' + slug);
      }

      // Update index
      const indexData = await getFileContent('content/articles-index.json');
      if (indexData) {
        const newIndex = indexData.content.filter(a => a.slug !== slug);
        await putFile('content/articles-index.json', newIndex, 'Mise à jour index: suppression ' + slug, indexData.sha);
      }

      await loadArticles();
    } catch (err) {
      alert('Erreur lors de la suppression : ' + err.message);
    }
  };

  /* ---- EDITOR ---- */

  function initQuill() {
    if (quill) return;
    quill = new Quill('#quill-editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [2, 3, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['blockquote', 'link', 'image'],
          ['clean']
        ]
      },
      placeholder: 'Rédigez votre article ici...'
    });
  }

  function generateSlug(title) {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 60);
  }

  function resetEditor() {
    editingSlug = null;
    editorTitle.textContent = 'Nouvel article';
    document.getElementById('field-title').value = '';
    document.getElementById('field-category').value = 'Prévention';
    document.getElementById('field-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('field-author').value = 'TERRITORIA Mutuelle';
    document.getElementById('field-image').value = '';
    document.getElementById('field-excerpt').value = '';
    if (quill) quill.root.innerHTML = '';
    editorStatus.style.display = 'none';
  }

  function validateForm() {
    const title = document.getElementById('field-title').value.trim();
    const excerpt = document.getElementById('field-excerpt').value.trim();
    const content = quill ? quill.root.innerHTML.trim() : '';

    if (!title) { showStatus('Le titre est obligatoire.', 'error'); return false; }
    if (!excerpt) { showStatus('L\'extrait est obligatoire.', 'error'); return false; }
    if (!content || content === '<p><br></p>') { showStatus('Le contenu est obligatoire.', 'error'); return false; }
    return true;
  }

  publishBtn.addEventListener('click', async () => {
    initQuill();
    if (!validateForm()) return;

    publishBtn.disabled = true;
    showStatus('Publication en cours...', 'loading');

    try {
      const title = document.getElementById('field-title').value.trim();
      const slug = editingSlug || generateSlug(title);
      const category = document.getElementById('field-category').value;
      const date = document.getElementById('field-date').value || new Date().toISOString().split('T')[0];
      const author = document.getElementById('field-author').value.trim() || 'TERRITORIA Mutuelle';
      const image = document.getElementById('field-image').value.trim();
      const excerpt = document.getElementById('field-excerpt').value.trim();
      const content = quill.root.innerHTML;

      // Build article
      const article = { title, slug, category, date, author, image, excerpt, content };

      // Build index entry
      const indexEntry = { title, slug, category, date, image, excerpt };

      // Save article file
      let articleSha = null;
      if (editingSlug) {
        const existing = await getFileContent('content/articles/' + slug + '.json');
        if (existing) articleSha = existing.sha;
      }

      const articleRes = await putFile(
        'content/articles/' + slug + '.json',
        article,
        (editingSlug ? 'Modification' : 'Ajout') + ' article: ' + title,
        articleSha
      );

      if (!articleRes.ok) {
        const err = await articleRes.json();
        throw new Error(err.message || 'Erreur GitHub API');
      }

      // Update index
      const indexData = await getFileContent('content/articles-index.json');
      let currentIndex = indexData ? indexData.content : [];
      let indexSha = indexData ? indexData.sha : null;

      // Remove existing entry if editing
      currentIndex = currentIndex.filter(a => a.slug !== slug);
      // Add new entry
      currentIndex.push(indexEntry);
      // Sort by date desc
      currentIndex.sort((a, b) => new Date(b.date) - new Date(a.date));

      const indexRes = await putFile(
        'content/articles-index.json',
        currentIndex,
        'Mise à jour index articles',
        indexSha
      );

      if (!indexRes.ok) {
        throw new Error('Erreur mise à jour index');
      }

      showStatus('Article publié avec succès ! Le site se met à jour automatiquement.', 'success');
      articlesIndex = currentIndex;

      // Return to dashboard after 2s
      setTimeout(() => {
        showView('dashboard');
        renderArticlesList();
        resetEditor();
      }, 2000);

    } catch (err) {
      showStatus('Erreur : ' + err.message, 'error');
    } finally {
      publishBtn.disabled = false;
    }
  });

  cancelBtn.addEventListener('click', () => {
    if (quill && quill.root.innerHTML.trim() && quill.root.innerHTML !== '<p><br></p>') {
      if (!confirm('Abandonner les modifications ?')) return;
    }
    showView('dashboard');
    resetEditor();
  });

  newArticleBtn.addEventListener('click', () => {
    resetEditor();
    showView('editor');
    initQuill();
  });

  /* ---- VIEWS ---- */

  function showView(view) {
    viewDashboard.style.display = view === 'dashboard' ? 'block' : 'none';
    viewEditor.style.display = view === 'editor' ? 'block' : 'none';

    sidebarBtns.forEach(btn => {
      btn.classList.toggle('sidebar-active', btn.dataset.view === view);
    });
  }

  sidebarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view === 'editor') {
        resetEditor();
        initQuill();
      }
      showView(view);
    });
  });

  function showStatus(msg, type) {
    editorStatus.style.display = 'flex';
    editorStatus.className = 'editor-status status-' + type;
    editorStatus.textContent = msg;
  }

  /* ---- INIT ---- */
  init();

})();