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

// CTA personalizado por categoria, igual usamos na home
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
const CTA_FALLBACK = "Ver detalhes";

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function applyBrandingProduct() {
  var siteName = document.getElementById("site-name");
  if (siteName) siteName.textContent = SITE_CONFIG.siteName;

  var announceWhats = document.getElementById("announce-whatsapp");
  if (announceWhats) announceWhats.href = SITE_CONFIG.whatsappGroupUrl;

  var igHeader = document.getElementById("instagram-header");
  if (igHeader) igHeader.href = SITE_CONFIG.instagramUrl;

  var whatsFab = document.getElementById("whatsapp-fab");
  if (whatsFab) whatsFab.href = SITE_CONFIG.whatsappGroupUrl;

  var igFab = document.getElementById("instagram-fab");
  if (igFab) igFab.href = SITE_CONFIG.instagramUrl;

  var searchBox = document.getElementById("search");
  if (searchBox) {
    searchBox.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
}

function buildRelatedCard(p) {
  const data = p.prices.mercadolivre;
  let discountPct = 0;
  if (data.originalPrice && data.originalPrice > data.price) {
    discountPct = Math.round((1 - data.price / data.originalPrice) * 100);
  }
  const badgeDiscount = discountPct > 0
    ? `<span class="badge-tag badge-discount">-${discountPct}% OFF</span>` : "";
  const ctaText = CTA_LABELS[p.category] || CTA_FALLBACK;

  const card = document.createElement("a");
  card.className = "card";
  card.href = `produto.html?id=${p.id}`;
  card.innerHTML = `
    <div class="card-top">
      <div class="badges-left">${badgeDiscount}</div>
      <span class="store-badge store-badge-mercadolivre">ML</span>
      <span class="cat-tag">${CATEGORY_LABELS[p.category] || ""}</span>
      <img class="product-art" src="${p.image ? p.image : 'art-' + p.category + '.svg'}" alt="${p.name}" loading="lazy">
    </div>
    <div class="card-body">
      <div class="card-brand">${p.brand}</div>
      <div class="card-name">${p.name}</div>
      <div class="price-list">
        <div class="price-row store-mercadolivre best">
          <span class="store">Mercado Livre</span>
          <span class="price">${formatPrice(data.price)}<span class="badge-best">MELHOR</span></span>
        </div>
      </div>
      <div class="card-cta">${ctaText} →</div>
    </div>
  `;
  return card;
}

function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const product = PRODUCTS_DATA.find(p => p.id === id);
  const wrap = document.getElementById("product-wrap");

  if (!product) {
    wrap.innerHTML = `<div class="empty-state">Produto não encontrado. <a href="index.html">Voltar para o site</a></div>`;
    return;
  }

  const data = product.prices.mercadolivre;
  let discountPct = 0;
  if (data.originalPrice && data.originalPrice > data.price) {
    discountPct = Math.round((1 - data.price / data.originalPrice) * 100);
  }

  document.title = product.name + " | " + SITE_CONFIG.siteName;

  const breadcrumbCat = document.getElementById("breadcrumb-cat");
  breadcrumbCat.textContent = CATEGORY_LABELS[product.category] || "";
  breadcrumbCat.href = "index.html?cat=" + product.category;

  const img = document.getElementById("product-image");
  img.src = product.image ? product.image : "art-" + product.category + ".svg";
  img.alt = product.name;

  document.getElementById("product-brand").textContent = product.brand;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("current-price").textContent = formatPrice(data.price);

  const originalEl = document.getElementById("original-price");
  const discountEl = document.getElementById("discount-pct");
  if (discountPct > 0) {
    originalEl.textContent = formatPrice(data.originalPrice);
    originalEl.style.display = "block";
    discountEl.textContent = `(${discountPct}% de desconto)`;
    discountEl.style.display = "inline-block";
  } else {
    originalEl.style.display = "none";
    discountEl.style.display = "none";
  }

  const buyBtn = document.getElementById("buy-btn");
  buyBtn.href = data.url;
  buyBtn.textContent = "";
  buyBtn.insertAdjacentHTML("beforeend", `Comprar no Mercado Livre
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`);

  // produtos relacionados: mesma categoria, excluindo o atual
  const related = PRODUCTS_DATA.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const relatedSection = document.getElementById("related-section");
  const relatedGrid = document.getElementById("related-grid");
  if (related.length === 0) {
    relatedSection.style.display = "none";
  } else {
    related.forEach(p => relatedGrid.appendChild(buildRelatedCard(p)));
  }
}

applyBrandingProduct();
renderProduct();
