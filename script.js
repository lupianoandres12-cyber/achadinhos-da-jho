const CATEGORY_LABELS = {
  todos: "Todos",
  batom: "Batom",
  base: "Base",
  rimel: "Rímel",
  sombra: "Sombra",
  blush: "Blush & Iluminador",
  pinceis: "Pincéis & Esponjas",
  corretivo: "Corretivo",
  primer: "Primer & Fixador"
};

const STORE_LABELS = {
  mercadolivre: "Mercado Livre",
  amazon: "Amazon",
  shopee: "Shopee"
};

let ALL_PRODUCTS = [];
let currentCategory = "todos";
let currentSearch = "";

function applyBranding() {
  document.title = SITE_CONFIG.siteName;
  document.getElementById("site-name").textContent = SITE_CONFIG.siteName;
  document.getElementById("site-tagline").textContent = SITE_CONFIG.tagline;
  document.getElementById("whatsapp-fab").href = SITE_CONFIG.whatsappGroupUrl;
  document.getElementById("instagram-fab").href = SITE_CONFIG.instagramUrl;
}

function cheapestStore(prices) {
  return Object.entries(prices).sort((a, b) => a[1].price - b[1].price)[0][0];
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderCategories() {
  const wrap = document.getElementById("categories");
  wrap.innerHTML = "";
  Object.entries(CATEGORY_LABELS).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (key === currentCategory ? " active" : "");
    btn.textContent = label;
    btn.onclick = () => {
      currentCategory = key;
      renderCategories();
      renderProducts();
    };
    wrap.appendChild(btn);
  });
}

function renderProducts() {
  const grid = document.getElementById("grid");
  const countEl = document.getElementById("results-count");
  grid.innerHTML = "";

  const filtered = ALL_PRODUCTS.filter(p => {
    const matchesCategory = currentCategory === "todos" || p.category === currentCategory;
    const matchesSearch = (p.name + " " + p.brand).toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  countEl.textContent = `${filtered.length} produto(s) encontrado(s)`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">Nenhum produto encontrado. Tente buscar outro termo.</div>`;
    return;
  }

  filtered.forEach(p => {
    const best = cheapestStore(p.prices);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <span class="cat-tag">${CATEGORY_LABELS[p.category] || ""}</span>
        <img class="product-art" src="${p.image ? p.image : 'art-' + p.category + '.svg'}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-name">${p.name}</div>
        <div class="price-list">
          ${Object.entries(p.prices).map(([store, data]) => `
            <a class="price-row store-${store} ${store === best ? 'best' : ''}" href="${data.url}" target="_blank" rel="noopener sponsored">
              <span class="store">${STORE_LABELS[store]}</span>
              <span class="price">${formatPrice(data.price)}${store === best ? '<span class="badge-best">MELHOR</span>' : ''}</span>
            </a>
          `).join("")}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function init() {
  applyBranding();
  renderCategories();
  ALL_PRODUCTS = (typeof PRODUCTS_DATA !== "undefined") ? PRODUCTS_DATA : [];
  renderProducts();

  document.getElementById("search").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProducts();
  });
}

init();
