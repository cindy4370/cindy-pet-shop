
const productos = [
  {
    "id": 1,
    "nombre": "Sequito Absorbente Mineral",
    "marca": "Higiene",
    "especie": "Gatos",
    "peso": "20 kg / 25 kg",
    "precio": "Desde $17.000",
    "categoria": "Piedras sanitarias",
    "imagen": "img/productos/producto-01.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 2,
    "nombre": "Professional Vet Cordero & Arroz Adultos",
    "marca": "Professional Vet",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$54.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-02.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 3,
    "nombre": "Professional Vet Cachorros All Breeds",
    "marca": "Professional Vet",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$51.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-03.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 4,
    "nombre": "Professional Vet Cachorros Razas Pequeñas",
    "marca": "Professional Vet",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$51.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-04.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 5,
    "nombre": "Professional Vet Perros Adultos Todas las Razas",
    "marca": "Professional Vet",
    "especie": "Perros",
    "peso": "20 kg",
    "precio": "$56.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-05.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 6,
    "nombre": "Professional Vet Adulto Razas Pequeñas",
    "marca": "Professional Vet",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$45.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-06.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 7,
    "nombre": "Professional Vet Nutrición Completa Adultos",
    "marca": "Professional Vet",
    "especie": "Perros",
    "peso": "20 kg",
    "precio": "$41.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-07.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 8,
    "nombre": "Professional Vet Adulto Rojo",
    "marca": "Professional Vet",
    "especie": "Perros",
    "peso": "20 kg",
    "precio": "$41.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-08.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 9,
    "nombre": "Professional Vet Gatos Adultos",
    "marca": "Professional Vet",
    "especie": "Gatos",
    "peso": "10 kg",
    "precio": "$31.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-09.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 10,
    "nombre": "Excellent Dog Reduced Calorie",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "3 kg / 15 kg",
    "precio": "Desde $23.500",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-10.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 11,
    "nombre": "Excellent Dog Puppy SB",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $23.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-11.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 12,
    "nombre": "Excellent Dog Puppy M/G",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "3 kg / 15 kg / 20 kg",
    "precio": "Desde $23.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-12.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 13,
    "nombre": "Excellent Puppy Razas Pequeñas y Medianas",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$51.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-13.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 14,
    "nombre": "Excellent Dog Adult Formula Senior",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "3 kg / 15 kg",
    "precio": "Desde $22.500",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-14.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 15,
    "nombre": "Excellent Adult Razas Pequeñas",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "1 kg / 3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $12.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-15.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 16,
    "nombre": "Excellent Dog Puppy Formula",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "20 kg",
    "precio": "$64.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-16.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 17,
    "nombre": "Excellent Adult M/G",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "3 kg / 15 kg / 20 kg",
    "precio": "Desde $21.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-17.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 18,
    "nombre": "Excellent Maintenance Formula Adult",
    "marca": "Excellent",
    "especie": "Perros",
    "peso": "20 kg",
    "precio": "$60.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-18.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 19,
    "nombre": "Sabrositos Cachorros",
    "marca": "Sabrositos",
    "especie": "Perros",
    "peso": "18 kg",
    "precio": "$36.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-19.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 20,
    "nombre": "ZooTec Bentonita Aglutinante Lavanda",
    "marca": "ZooTec",
    "especie": "Gatos",
    "peso": "4 x 4 kg",
    "precio": "$20.000",
    "categoria": "Arena sanitaria",
    "imagen": "img/productos/producto-20.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 21,
    "nombre": "Voraz Súper Sabroso Carne",
    "marca": "Voraz",
    "especie": "Perros",
    "peso": "22 kg",
    "precio": "$30.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-21.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 22,
    "nombre": "Sabrositos Mix Gatos Adultos",
    "marca": "Sabrositos",
    "especie": "Gatos",
    "peso": "10 kg / 20 kg",
    "precio": "Desde $27.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-22.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 23,
    "nombre": "Mix Perros Adultos",
    "marca": "Mix",
    "especie": "Perros",
    "peso": "20 kg",
    "precio": "$30.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-23.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 24,
    "nombre": "Balancín Línea Económica",
    "marca": "Balancín",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$22.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-24.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 25,
    "nombre": "KonKatt Colchón Sanitario",
    "marca": "KonKatt",
    "especie": "Gatos",
    "peso": "4 kg / 15 kg",
    "precio": "Desde $9.000",
    "categoria": "Colchón sanitario",
    "imagen": "img/productos/producto-25.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 26,
    "nombre": "Cat Chow Defense Plus Adultos",
    "marca": "Cat Chow",
    "especie": "Gatos",
    "peso": "Consultar",
    "precio": "$22.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-26.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 27,
    "nombre": "Cat Chow Defense Plus 8 kg",
    "marca": "Cat Chow",
    "especie": "Gatos",
    "peso": "8 kg",
    "precio": "$83.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-27.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 28,
    "nombre": "Cat Chow Defense Plus 3 kg",
    "marca": "Cat Chow",
    "especie": "Gatos",
    "peso": "3 kg",
    "precio": "$22.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-28.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 29,
    "nombre": "Cat Chow Defense Plus 8 kg / 15 kg",
    "marca": "Cat Chow",
    "especie": "Gatos",
    "peso": "8 kg / 15 kg",
    "precio": "Desde $47.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-29.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 30,
    "nombre": "Bedywood Colchón Sanitario 15 kg",
    "marca": "Bedywood",
    "especie": "Gatos",
    "peso": "15 kg",
    "precio": "$14.000",
    "categoria": "Colchón sanitario",
    "imagen": "img/productos/producto-30.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 31,
    "nombre": "Bedywood Colchón Sanitario 4 kg",
    "marca": "Bedywood",
    "especie": "Gatos",
    "peso": "4 kg",
    "precio": "$16.000",
    "categoria": "Colchón sanitario",
    "imagen": "img/productos/producto-31.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 32,
    "nombre": "Bedywood Pellets Pino Natural",
    "marca": "Bedywood",
    "especie": "Gatos",
    "peso": "Consultar",
    "precio": "$13.000",
    "categoria": "Colchón sanitario",
    "imagen": "img/productos/producto-32.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 33,
    "nombre": "Alta Gama by Absorsol",
    "marca": "Absorsol",
    "especie": "Gatos",
    "peso": "12 kg / 21,6 kg",
    "precio": "Desde $18.000",
    "categoria": "Granulado higiénico",
    "imagen": "img/productos/producto-33.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 34,
    "nombre": "Guardian Gatos Adultos",
    "marca": "Guardian",
    "especie": "Gatos",
    "peso": "Consultar",
    "precio": "$28.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-34.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 35,
    "nombre": "Absorsol Premium",
    "marca": "Absorsol",
    "especie": "Gatos",
    "peso": "12 kg / 21,6 kg",
    "precio": "Desde $16.000",
    "categoria": "Granulado higiénico",
    "imagen": "img/productos/producto-35.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 36,
    "nombre": "Hectopar Protección Completa",
    "marca": "Hectopar",
    "especie": "Perros y Gatos",
    "peso": "Varias presentaciones",
    "precio": "$7.000",
    "categoria": "Antiparasitario",
    "imagen": "img/productos/producto-36.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 37,
    "nombre": "Feline Full Spot",
    "marca": "Feline",
    "especie": "Gatos",
    "peso": "-5 kg / +5 kg",
    "precio": "Desde $18.000",
    "categoria": "Antiparasitario",
    "imagen": "img/productos/producto-37.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 38,
    "nombre": "Pulmax Antiparasitario Externo",
    "marca": "Pulmax",
    "especie": "Perros y Gatos",
    "peso": "Varias presentaciones",
    "precio": "$6.000",
    "categoria": "Antiparasitario",
    "imagen": "img/productos/producto-38.png",
    "destacado": false,
    "oferta": true
  },
  {
    "id": 39,
    "nombre": "Old Prince Cordero Kitten",
    "marca": "Old Prince",
    "especie": "Gatos",
    "peso": "1 kg / 3 kg",
    "precio": "Desde $16.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-39.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 40,
    "nombre": "Old Prince Cordero Adult Cat",
    "marca": "Old Prince",
    "especie": "Gatos",
    "peso": "1 kg / 3 kg / 7,5 kg",
    "precio": "Desde $15.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-40.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 41,
    "nombre": "Old Prince Cordero Adult Cat 3 kg / 7,5 kg",
    "marca": "Old Prince",
    "especie": "Gatos",
    "peso": "3 kg / 7,5 kg",
    "precio": "Desde $32.000",
    "categoria": "Alimento gato",
    "imagen": "img/productos/producto-41.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 42,
    "nombre": "Old Prince Cordero Puppy All Breeds",
    "marca": "Old Prince",
    "especie": "Perros",
    "peso": "3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $22.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-42.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 43,
    "nombre": "Old Prince Cordero Adult Small Breeds",
    "marca": "Old Prince",
    "especie": "Perros",
    "peso": "3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $22.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-43.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 44,
    "nombre": "Old Prince Company Cachorros",
    "marca": "Old Prince",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$47.000",
    "categoria": "Alimento cachorro",
    "imagen": "img/productos/producto-44.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 45,
    "nombre": "Old Prince Company Adultos",
    "marca": "Old Prince",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$42.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-45.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 46,
    "nombre": "Old Prince Cerdo Adult",
    "marca": "Old Prince",
    "especie": "Perros",
    "peso": "3 kg / 15 kg",
    "precio": "Desde $19.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-46.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 47,
    "nombre": "Old Prince Cordero Senior",
    "marca": "Old Prince",
    "especie": "Perros",
    "peso": "3 kg / 15 kg",
    "precio": "Desde $20.700",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-47.png",
    "destacado": true,
    "oferta": true
  },
  {
    "id": 48,
    "nombre": "Old Prince Cordero Adult",
    "marca": "Old Prince",
    "especie": "Perros",
    "peso": "3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $20.000",
    "categoria": "Alimento perro",
    "imagen": "img/productos/producto-48.png",
    "destacado": true,
    "oferta": true
  }
];
let carrito = [];
let favoritos = JSON.parse(localStorage.getItem("favoritosCindy") || "[]");

const $ = (id) => document.getElementById(id);
const lista = $("listaProductos");
const buscador = $("buscador");
const filtroCategoria = $("filtroCategoria");
const filtroMarca = $("filtroMarca");

function initMarcas(){
  const marcas = [...new Set(productos.map(p => p.marca))].sort();
  filtroMarca.innerHTML += marcas.map(m => `<option value="${m}">${m}</option>`).join("");
}

function setCategoria(cat){
  filtroCategoria.value = cat;
  renderProductos();
}

function productoWhatsApp(p){
  return `https://wa.me/5491168723777?text=${encodeURIComponent("Hola Cindy Pet Shop. Me interesa consultar por: " + p.nombre + " (" + p.peso + "). ¿Hay stock?")}`;
}

function renderProductos(){
  const q = buscador.value.toLowerCase().trim();
  const cat = filtroCategoria.value;
  const marca = filtroMarca.value;
  const filtrados = productos.filter(p => {
    const texto = `${p.nombre} ${p.marca} ${p.especie} ${p.peso} ${p.categoria}`.toLowerCase();
    return (q === "" || texto.includes(q)) &&
           (cat === "todos" || p.categoria === cat || (cat==="Colchón sanitario" && (p.categoria.includes("sanitario") || p.categoria.includes("higiénico")))) &&
           (marca === "todos" || p.marca === marca);
  });
  $("totalProductos").textContent = `${filtrados.length} productos`;
  lista.innerHTML = filtrados.map(p => `
    <article class="product-card">
      <div class="product-img-wrap" onclick="abrirModal('${p.imagen}')">
        ${p.oferta ? '<span class="tag">Oferta</span>' : ''}
        <img src="${p.imagen}" alt="${p.nombre}">
      </div>
      <div class="product-body">
        <h3>${p.nombre}</h3>
        <div class="meta">${p.marca} · ${p.especie}</div>
        <div class="meta">Peso: ${p.peso}</div>
        <div class="price">${p.precio}</div>
        <div class="card-actions">
          <button class="favorite" onclick="toggleFavorito(${p.id})">${favoritos.includes(p.id) ? '❤️' : '🤍'}</button>
          <button onclick="agregarCarrito(${p.id})">Agregar</button>
        </div>
        <a class="whats-product" target="_blank" href="${productoWhatsApp(p)}">Consultar por WhatsApp</a>
      </div>
    </article>
  `).join("");
}

function toggleFavorito(id){
  favoritos = favoritos.includes(id) ? favoritos.filter(x => x !== id) : [...favoritos, id];
  localStorage.setItem("favoritosCindy", JSON.stringify(favoritos));
  renderProductos();
}

function agregarCarrito(id){
  const p = productos.find(x => x.id === id);
  const item = carrito.find(x => x.id === id);
  item ? item.cantidad++ : carrito.push({...p, cantidad:1});
  renderCarrito();
  $("carrito").classList.remove("hidden");
}

function quitarCarrito(id){
  carrito = carrito.filter(x => x.id !== id);
  renderCarrito();
}

function renderCarrito(){
  $("contadorCarrito").textContent = carrito.reduce((a,i) => a+i.cantidad, 0);
  $("itemsCarrito").innerHTML = carrito.length ? carrito.map(i => `
    <div class="cart-item">
      <span>${i.nombre}<br><small>${i.precio} · x${i.cantidad}</small></span>
      <button onclick="i.cantidad++; renderCarrito()">+</button>
      <button onclick="quitarCarrito(${i.id})">Quitar</button>
    </div>
  `).join("") : "<p>El carrito está vacío.</p>";
}

function finalizarPedido(){
  if(!carrito.length){ alert("El carrito está vacío."); return; }
  const detalle = carrito.map(i => `- ${i.nombre} (${i.peso}) x${i.cantidad} · ${i.precio}`).join("\n");
  const msg = "Hola Cindy Pet Shop. Quiero consultar disponibilidad de estos productos:\n\n" + detalle + "\n\nPago al recibir.";
  window.open("https://wa.me/5491168723777?text=" + encodeURIComponent(msg), "_blank");
}

function abrirModal(src){
  $("modalImg").src = src;
  $("modal").classList.remove("hidden");
}

$("btnCarrito").onclick = () => $("carrito").classList.remove("hidden");
$("cerrarCarrito").onclick = () => $("carrito").classList.add("hidden");
$("vaciarCarrito").onclick = () => { carrito = []; renderCarrito(); };
$("finalizarPedido").onclick = finalizarPedido;
$("cerrarModal").onclick = () => $("modal").classList.add("hidden");
$("modal").onclick = (e) => { if(e.target.id === "modal") $("modal").classList.add("hidden"); };
buscador.oninput = renderProductos;
filtroCategoria.onchange = renderProductos;
filtroMarca.onchange = renderProductos;

initMarcas();
renderProductos();
renderCarrito();


// Corrección v6.1: cerrar visor al iniciar y permitir Escape
window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  if (modal) modal.classList.add("hidden");
  if (modalImg) modalImg.removeAttribute("src");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("modal");
    const cart = document.getElementById("carrito");
    if (modal) modal.classList.add("hidden");
    if (cart) cart.classList.add("hidden");
  }
});
