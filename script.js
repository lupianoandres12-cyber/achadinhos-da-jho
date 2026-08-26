const CATEGORY_LABELS = {
  todos: "Todos",
  batom: "Batom",
  base: "Base",
  rimel: "Rímel",
  sombra: "Sombra",
  blush: "Blush & Iluminador",
  pinceis: "Pincéis & Esponjas",
  corretivo: "Corretivo",
  primer: "Primer & Fixador",
  skincare: "Skincare",
  cabelo: "Cabelo",
  perfume: "Perfumes",
  suplementos: "Suplementos de Beleza"
};

const STORE_LABELS = {
  mercadolivre: "Mercado Livre",
  amazon: "Amazon",
  shopee: "Shopee"
};

const STORE_BADGE = {
  mercadolivre: "ML",
  amazon: "AMZ",
  shopee: "SHP"
};

// CTA personalizado por categoria — deixa o botão de compra mais persuasivo e específico
const CTA_LABELS = {
  batom: "Garantir meu batom",
  base: "Garantir minha base",
  rimel: "Garantir meu rímel",
  sombra: "Garantir minha sombra",
  blush: "Garantir meu blush",
  pinceis: "Garantir meu kit",
  corretivo: "Garantir meu corretivo",
  primer: "Garantir meu fixador",
  skincare: "Garantir meu skincare",
  cabelo: "Garantir meu produto",
  perfume: "Garantir meu perfume",
  suplementos: "Garantir meu suplemento"
};
const CTA_FALLBACK = "Garantir esse achado";

// a partir de qual % de desconto o selo de urgência aparece
const URGENCY_THRESHOLD = 40;

let ALL_PRODUCTS = [];
let currentCategory = "todos";
let currentSearch = "";
let showAll = false;
const INITIAL_LIMIT = 8;

function applyBranding() {
  document.title = SITE_CONFIG.siteName;
  document.getElementById("site-name").textContent = SITE_CONFIG.siteName;
  document.getElementById("site-tagline").textContent = SITE_CONFIG.tagline;
  document.getElementById("whatsapp-fab").href = SITE_CONFIG.whatsappGroupUrl;
  document.getElementById("instagram-fab").href = SITE_CONFIG.instagramUrl;

  var announceWhats = document.getElementById("announce-whatsapp");
  if (announceWhats) announceWhats.href = SITE_CONFIG.whatsappGroupUrl;
  var igHeader = document.getElementById("instagram-header");
  if (igHeader) igHeader.href = SITE_CONFIG.instagramUrl;
  var ctaWhats = document.getElementById("cta-whatsapp");
  if (ctaWhats) ctaWhats.href = SITE_CONFIG.whatsappGroupUrl;
}

function cheapestStore(prices) {
  return Object.entries(prices).sort((a, b) => a[1].price - b[1].price)[0][0];
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// lê ?cat=skincare na URL pra permitir CTAs personalizados vindos do linktree
function getCategoryFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  return cat && CATEGORY_LABELS[cat] ? cat : "todos";
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
      showAll = false;
      renderCategories();
      renderProducts();
    };
    wrap.appendChild(btn);
  });
}

function renderProducts() {
  const grid = document.getElementById("grid");
  const countEl = document.getElementById("results-count");
  const showMoreWrap = document.getElementById("show-more-wrap");
  const showMoreBtn = document.getElementById("show-more-btn");
  const sectionTitle = document.getElementById("section-title");
  grid.innerHTML = "";

  const filtered = ALL_PRODUCTS.filter(p => {
    const matchesCategory = currentCategory === "todos" || p.category === currentCategory;
    const matchesSearch = (p.name + " " + p.brand).toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // na visão geral (sem busca/filtro) mostramos só uma seleção curada, pra não parecer uma vitrine lotada
  const isCurated = currentCategory === "todos" && currentSearch === "" && !showAll;
  const visible = isCurated ? filtered.slice(0, INITIAL_LIMIT) : filtered;

  if (sectionTitle) {
    sectionTitle.textContent = isCurated ? "🔥 Achadinhos em destaque" : "Todos os produtos";
  }

  countEl.textContent = `${filtered.length} produto(s) encontrado(s)`;

  if (showMoreWrap) {
    showMoreWrap.style.display = (isCurated && filtered.length > INITIAL_LIMIT) ? "flex" : "none";
  }
  if (showMoreBtn) {
    showMoreBtn.textContent = `Ver todos os produtos (${filtered.length})`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">Nenhum produto encontrado. Tente buscar outro termo.</div>`;
    return;
  }

  visible.forEach((p, idx) => {
    const best = cheapestStore(p.prices);
    const bestData = p.prices[best];

    let discountPct = 0;
    if (bestData.originalPrice && bestData.originalPrice > bestData.price) {
      discountPct = Math.round((1 - bestData.price / bestData.originalPrice) * 100);
    }

    const badgeDiscount = discountPct > 0
      ? `<span class="badge-tag badge-discount">-${discountPct}% OFF</span>` : "";
    const badgeUrgent = (discountPct >= URGENCY_THRESHOLD || p.urgent)
      ? `<span class="badge-tag badge-urgent">Últimas unidades</span>` : "";
    const badgeBestseller = p.bestseller
      ? `<span class="badge-tag badge-bestseller">★ Mais vendido</span>` : "";

    const ctaText = CTA_LABELS[p.category] || CTA_FALLBACK;

    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = (Math.min(idx, 16) * 35) + "ms";
    card.innerHTML = `
      <div class="card-top">
        <div class="badges-left">${badgeDiscount}${badgeUrgent}</div>
        <span class="store-badge store-badge-${best}">${STORE_BADGE[best] || ""}</span>
        ${badgeBestseller ? `<div class="badges-right">${badgeBestseller}</div>` : ""}
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
        <a class="card-cta" href="${bestData.url}" target="_blank" rel="noopener sponsored">${ctaText} →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function init() {
  applyBranding();
  currentCategory = getCategoryFromQuery();
  renderCategories();
  ALL_PRODUCTS = (typeof PRODUCTS_DATA !== "undefined") ? PRODUCTS_DATA : [];
  renderProducts();

  document.getElementById("search").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    showAll = false;
    renderProducts();
  });

  var showMoreBtn = document.getElementById("show-more-btn");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      showAll = true;
      renderProducts();
    });
  }
}

init();
