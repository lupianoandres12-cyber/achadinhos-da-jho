// Catálogo de produtos. Edite aqui: preço, link de afiliado ("url") e categoria de cada item.
// Categorias válidas: batom, base, rimel, sombra, blush, pinceis, corretivo, primer
//
// Só ficam aqui produtos com link REAL do Mercado Livre (já conferidos).
// Assim que mais links forem confirmados, novos itens entram na lista.
const PRODUCTS_DATA = [
  { "id": 2, "name": "Batom Cremoso Hidra Lips Terracota Âmbar", "brand": "Vult", "category": "batom",
    "prices": { "mercadolivre": {"price": 30.30, "url": "https://meli.la/1QZrCga"} } },
  { "id": 3, "name": "Batom Líquido Glam Duo Clinical", "brand": "Eudora", "category": "batom",
    "prices": { "mercadolivre": {"price": 62.90, "url": "https://meli.la/1u4S8pz"} } },
  { "id": 6, "name": "Base Matte Cor 330", "brand": "Vult", "category": "base",
    "prices": { "mercadolivre": {"price": 30.90, "url": "https://meli.la/2J5BsJu"} } },
  { "id": 7, "name": "Base Líquida Soft Blend Matte Tom F20", "brand": "Ruby Rose", "category": "base",
    "prices": { "mercadolivre": {"price": 23.90, "url": "https://meli.la/2vaWdqa"} } },

  // Produto real, com link de afiliado e foto de verdade (puxados do Mercado Livre)
  { "id": 41, "name": "Batom Líquido Feels Mood Ruby Rose Cor 13", "brand": "Ruby Rose", "category": "batom",
    "image": "foto-batom-ruby-rose-mood-13.png",
    "prices": { "mercadolivre": {"price": 19.90, "url": "https://meli.la/1FETtp2"} } }
];
