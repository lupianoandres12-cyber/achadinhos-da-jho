// Catálogo de produtos. Edite aqui: preço, link de afiliado ("url") e categoria de cada item.
// Categorias válidas: batom, base, rimel, sombra, blush, pinceis, corretivo, primer
//
// Só ficam aqui produtos com link REAL do Mercado Livre (já conferidos).
// Assim que mais links forem confirmados, novos itens entram na lista.
const PRODUCTS_DATA = [
  { "id": 2, "name": "Batom Cremoso Hidra Lips Terracota Âmbar", "brand": "Vult", "category": "batom",
    "image": "foto-batom-cremoso-vult-terracota-ambar.png",
    "prices": { "mercadolivre": {"price": 30.30, "url": "https://meli.la/1QZrCga"} } },
  { "id": 3, "name": "Batom Líquido Glam Duo Clinical", "brand": "Eudora", "category": "batom",
    "image": "foto-batom-liquido-eudora-glam-duo.png",
    "prices": { "mercadolivre": {"price": 62.90, "url": "https://meli.la/1u4S8pz"} } },
  { "id": 6, "name": "Base Matte Cor 330", "brand": "Vult", "category": "base",
    "image": "foto-base-matte-vult-330.png",
    "prices": { "mercadolivre": {"price": 30.90, "url": "https://meli.la/2J5BsJu"} } },
  { "id": 7, "name": "Base Líquida Soft Blend Matte Tom F20", "brand": "Ruby Rose", "category": "base",
    "image": "foto-base-soft-blend-ruby-rose-f20.png",
    "prices": { "mercadolivre": {"price": 23.90, "url": "https://meli.la/2vaWdqa"} } },

  // Produto real, com link de afiliado e foto de verdade (puxados do Mercado Livre)
  { "id": 41, "name": "Batom Líquido Feels Mood Ruby Rose Cor 13", "brand": "Ruby Rose", "category": "batom",
    "image": "foto-batom-ruby-rose-mood-13.png",
    "prices": { "mercadolivre": {"price": 19.90, "url": "https://meli.la/1FETtp2"} } },

  { "id": 42, "name": "Batom Líquido Duo Clinical Glam - Magenta Enigmático", "brand": "Eudora", "category": "batom",
    "image": "foto-batom-eudora-magenta-enigmatico.png",
    "prices": { "mercadolivre": {"price": 38.80, "url": "https://meli.la/22cX2rz"} } },

  { "id": 43, "name": "Base Líquida Matte Hidraluronic 26ml Tom V270", "brand": "Vult", "category": "base",
    "image": "foto-base-vult-matte-hidraluronic-v270.png",
    "prices": { "mercadolivre": {"price": 35.10, "url": "https://meli.la/2rZRPNX"} } },

  { "id": 44, "name": "Base Líquida Matte Real Filter Tom C02", "brand": "Fran by Franciny Ehlke", "category": "base",
    "image": "foto-base-fran-real-filter-c02.png",
    "prices": { "mercadolivre": {"price": 78.99, "url": "https://meli.la/1WSZNZz"} } },

  { "id": 45, "name": "Base Líquida Bt Skin - 21 Tons", "brand": "Bruna Tavares", "category": "base",
    "image": "foto-base-bruna-tavares-bt-skin-21-tons.png",
    "prices": { "mercadolivre": {"price": 74.09, "url": "https://meli.la/1BuVtDc"} } }
];
