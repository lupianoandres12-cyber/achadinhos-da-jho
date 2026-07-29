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
    "prices": { "mercadolivre": {"price": 74.09, "url": "https://meli.la/1BuVtDc"} } },

  { "id": 46, "name": "Kit C/7 Pincéis Profissionais Diamond Ed003", "brand": "Macrilan", "category": "pinceis",
    "image": "foto-kit-pinceis-macrilan-diamond-branco.png",
    "prices": { "mercadolivre": {"price": 77.96, "url": "https://meli.la/1WB9Dz2"} } },

  { "id": 47, "name": "Máscara de Cílios Efeito Natural Definido", "brand": "Boca Rosa", "category": "rimel",
    "image": "foto-rimel-boca-rosa-marrom.png",
    "prices": { "mercadolivre": {"price": 47.00, "url": "https://meli.la/1VKXMTw"} } },

  { "id": 48, "name": "Paleta de Sombras Neutra Purple 12 Shades", "brand": "Océane", "category": "sombra",
    "image": "foto-paleta-sombras-oceane-purple-12-shades.png",
    "prices": { "mercadolivre": {"price": 50.42, "url": "https://meli.la/2Q7vvvr"} } },

  { "id": 49, "name": "Bride Kit", "brand": "Fran by Franciny Ehlke", "category": "primer",
    "image": "foto-bride-kit-fran-franciny-ehlke.png",
    "prices": { "mercadolivre": {"price": 74.96, "url": "https://meli.la/1NSptHS"} } },

  { "id": 50, "name": "Chocochilli Gloss Acabamento Brilhante", "brand": "Fran by Franciny Ehlke", "category": "batom",
    "image": "foto-gloss-chocochilli-fran-franciny-ehlke.png",
    "prices": { "mercadolivre": {"price": 26.39, "url": "https://meli.la/216x3hv"} } },

  { "id": 51, "name": "Batom Hydra Fps 8 Faces 3,5g Vino 540", "brand": "Natura", "category": "batom",
    "image": "foto-batom-natura-faces-vino-540.png",
    "prices": { "mercadolivre": {"price": 19.13, "url": "https://meli.la/1dA7113"} } },

  { "id": 52, "name": "Base Líquida Bt Skin L30 40ml Tom Bege", "brand": "Bruna Tavares", "category": "base",
    "image": "foto-base-bruna-tavares-bt-skin-l30.png",
    "prices": { "mercadolivre": {"price": 75.97, "url": "https://meli.la/2Bt9Zua"} } },

  { "id": 53, "name": "Bt Transition - Paleta De Sombras 10 Cores", "brand": "Bruna Tavares", "category": "sombra",
    "image": "foto-paleta-sombras-bruna-tavares-bt-transition.png",
    "prices": { "mercadolivre": {"price": 71.60, "url": "https://meli.la/2HFu2gi"} } },

  { "id": 54, "name": "Blush Stick Multifuncional - Bt Coca-Cola", "brand": "Bruna Tavares", "category": "blush",
    "image": "foto-blush-stick-bruna-tavares-coca-cola.png",
    "prices": { "mercadolivre": {"price": 59.73, "url": "https://meli.la/1uWLwqs"} } },

  { "id": 55, "name": "Esponja De Maquiagem Soft Blender Feels", "brand": "Ruby Rose", "category": "pinceis",
    "image": "foto-esponja-ruby-rose-feels-soft-blender.png",
    "prices": { "mercadolivre": {"price": 20.98, "url": "https://meli.la/1oE1XBz"} } },

  { "id": 56, "name": "Bruma Fix Tudo Alta Fixação 150ml", "brand": "Dailus", "category": "primer",
    "image": "foto-bruma-fixadora-dailus-fix-tudo.png",
    "prices": { "mercadolivre": {"price": 57.99, "url": "https://meli.la/2kdSg8C"} } },

  { "id": 57, "name": "Corretivo Líquido Blow So Real Tom 1-CBW10", "brand": "Ruby Rose", "category": "corretivo",
    "image": "foto-corretivo-ruby-rose-blow-so-real-cbw10.png",
    "prices": { "mercadolivre": {"price": 20.32, "url": "https://meli.la/1bdj7se"} } },

  { "id": 58, "name": "Gloss Lip Honey", "brand": "Fran by Franciny Ehlke", "category": "batom",
    "image": "foto-gloss-fran-franciny-ehlke-lip-honey.png",
    "prices": { "mercadolivre": {"price": 18.28, "url": "https://meli.la/1EaMWcH"} } },

  { "id": 59, "name": "Máscara de Cílios The Colossal Waterproof 8ml", "brand": "Maybelline", "category": "rimel",
    "image": "foto-rimel-maybelline-colossal-waterproof.png",
    "prices": { "mercadolivre": {"price": 48.01, "url": "https://meli.la/14GpcFz"} } },

  { "id": 60, "name": "Corretivo Líquido Cover Up Tom MMC02", "brand": "Mari Maria Makeup", "category": "corretivo",
    "image": "foto-corretivo-mari-maria-cover-up-mmc02.png",
    "prices": { "mercadolivre": {"price": 39.00, "url": "https://meli.la/1qep8hM"} } },

  { "id": 61, "name": "Paleta De Sombras Special Day 25g", "brand": "Océane", "category": "sombra",
    "image": "foto-paleta-sombras-oceane-special-day.png",
    "prices": { "mercadolivre": {"price": 65.60, "url": "https://meli.la/1Avw4fc"} } },

  { "id": 62, "name": "Kit 3 Pincel Chanfrado Design de Sobrancelha", "brand": "Genérica", "category": "pinceis",
    "image": "foto-kit-pincel-chanfrado-design-sobrancelha.png",
    "prices": { "mercadolivre": {"price": 19.00, "url": "https://meli.la/19NgPqj"} } },

  { "id": 63, "name": "Gloss Franboesa", "brand": "Fran by Franciny Ehlke", "category": "batom",
    "image": "foto-gloss-fran-franciny-ehlke-franboesa.png",
    "prices": { "mercadolivre": {"price": 36.04, "url": "https://meli.la/1sjUpCe"} } },

  { "id": 64, "name": "Base BB Cream Dermo Expertise 5 em 1 Fps20 30ml", "brand": "L'Oréal Paris", "category": "base",
    "image": "foto-base-bb-cream-loreal-dermo-expertise.png",
    "prices": { "mercadolivre": {"price": 44.99, "url": "https://meli.la/2Et23pq"} } },

  { "id": 65, "name": "Kit 3 Esponjas Para Maquiagem EP20", "brand": "Macrilan", "category": "pinceis",
    "image": "foto-kit-esponjas-macrilan-ep20.png",
    "prices": { "mercadolivre": {"price": 19.77, "url": "https://meli.la/2uHe1oa"} } }
];
