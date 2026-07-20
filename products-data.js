// Catálogo de produtos. Edite aqui: preço, link de afiliado ("url") e categoria de cada item.
// Categorias válidas: batom, base, rimel, sombra, blush, pinceis, corretivo, primer
//
// Só ficam aqui produtos com link REAL do Mercado Livre (já conferidos).
// Assim que mais links forem confirmados, novos itens entram na lista.
const PRODUCTS_DATA = [
  { "id": 2, "name": "Batom Cremoso Hidra Lips Terracota Âmbar", "brand": "Vult", "category": "batom",
    "prices": { "mercadolivre": {"price": 30.30, "url": "https://www.mercadolivre.com.br/vult-hidra-lips-terracota-mbar-batom-cremoso-36g-cor-terracota-mbar/p/MLB26863777"} } },
  { "id": 3, "name": "Batom Líquido Glam Duo Clinical", "brand": "Eudora", "category": "batom",
    "prices": { "mercadolivre": {"price": 69.90, "url": "https://www.mercadolivre.com.br/batom-liquido-eudora-glam-duo-clinical-micropigmentacao-35g/up/MLBU1451180413"} } },
  { "id": 6, "name": "Base Matte Cor 330", "brand": "Vult", "category": "base",
    "prices": { "mercadolivre": {"price": 30.90, "url": "https://www.mercadolivre.com.br/base-matte-vult-cor-330-26-ml/p/MLB26443913"} } },
  { "id": 7, "name": "Base Líquida Soft Blend Matte Tom F20", "brand": "Ruby Rose", "category": "base",
    "prices": { "mercadolivre": {"price": 23.90, "url": "https://www.mercadolivre.com.br/base-liquida-soft-blend-ruby-rose-matte-media-cobertura-tom-f20/p/MLB44636828"} } },

  // Produto real, com link de afiliado e foto de verdade (puxados do Mercado Livre)
  { "id": 41, "name": "Batom Líquido Feels Mood Ruby Rose Cor 13", "brand": "Ruby Rose", "category": "batom",
    "image": "foto-batom-ruby-rose-mood-13.png",
    "prices": { "mercadolivre": {"price": 19.90, "url": "https://meli.la/1FETtp2"} } }
];
