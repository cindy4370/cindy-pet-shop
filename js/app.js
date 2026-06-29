
const productos = [
  {
    "id": 1,
    "nombre": "Bebederos y comederos",
    "marca": "Accesorios",
    "categoria": "Accesorios",
    "especie": "Perros y gatos",
    "peso": "Varios",
    "precio": "Desde $10.000",
    "imagen": "img/productos/producto-001.png",
    "oferta": true
  },
  {
    "id": 2,
    "nombre": "Old Prince Cordero Adult",
    "marca": "Old Prince",
    "categoria": "Perros",
    "especie": "Perros",
    "peso": "3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $20.000",
    "imagen": "img/productos/producto-002.png",
    "oferta": true
  },
  {
    "id": 3,
    "nombre": "Old Prince Cordero Senior",
    "marca": "Old Prince",
    "categoria": "Perros",
    "especie": "Perros",
    "peso": "3 kg / 15 kg",
    "precio": "Desde $20.700",
    "imagen": "img/productos/producto-003.png",
    "oferta": true
  },
  {
    "id": 4,
    "nombre": "Old Prince Cerdo Adult",
    "marca": "Old Prince",
    "categoria": "Perros",
    "especie": "Perros",
    "peso": "3 kg / 15 kg",
    "precio": "Desde $19.000",
    "imagen": "img/productos/producto-004.png",
    "oferta": true
  },
  {
    "id": 5,
    "nombre": "Old Prince Company Adultos",
    "marca": "Old Prince",
    "categoria": "Perros",
    "especie": "Perros",
    "peso": "15 kg",
    "precio": "$42.000",
    "imagen": "img/productos/producto-005.png",
    "oferta": true
  },
  {
    "id": 6,
    "nombre": "Old Prince Company Cachorros",
    "marca": "Old Prince",
    "categoria": "Perros",
    "especie": "Perros cachorros",
    "peso": "15 kg",
    "precio": "$47.000",
    "imagen": "img/productos/producto-006.png",
    "oferta": true
  },
  {
    "id": 7,
    "nombre": "Old Prince Cordero Adult Small Breeds",
    "marca": "Old Prince",
    "categoria": "Perros",
    "especie": "Perros",
    "peso": "3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $22.000",
    "imagen": "img/productos/producto-007.png",
    "oferta": true
  },
  {
    "id": 8,
    "nombre": "Old Prince Cordero Puppy All Breeds",
    "marca": "Old Prince",
    "categoria": "Perros",
    "especie": "Perros cachorros",
    "peso": "3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $22.000",
    "imagen": "img/productos/producto-008.png",
    "oferta": true
  },
  {
    "id": 9,
    "nombre": "Old Prince Cordero Adult Cat",
    "marca": "Old Prince",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "3 kg / 7,5 kg",
    "precio": "Desde $32.000",
    "imagen": "img/productos/producto-009.png",
    "oferta": true
  },
  {
    "id": 10,
    "nombre": "Old Prince Cordero Adult Cat",
    "marca": "Old Prince",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "1 kg / 3 kg / 7,5 kg",
    "precio": "Desde $15.000",
    "imagen": "img/productos/producto-010.png",
    "oferta": true
  },
  {
    "id": 11,
    "nombre": "Old Prince Cordero Kitten",
    "marca": "Old Prince",
    "categoria": "Gatos",
    "especie": "Gatitos",
    "peso": "1 kg / 3 kg",
    "precio": "Desde $16.000",
    "imagen": "img/productos/producto-011.png",
    "oferta": true
  },
  {
    "id": 12,
    "nombre": "Pulmax Antiparasitario Externo",
    "marca": "Pulmax",
    "categoria": "Veterinaria",
    "especie": "Perros y gatos",
    "peso": "Varias presentaciones",
    "precio": "$6.000",
    "imagen": "img/productos/producto-012.png",
    "oferta": true
  },
  {
    "id": 13,
    "nombre": "Feline Full Spot",
    "marca": "Feline",
    "categoria": "Veterinaria",
    "especie": "Gatos",
    "peso": "-5 kg / +5 kg",
    "precio": "Desde $18.000",
    "imagen": "img/productos/producto-013.png",
    "oferta": true
  },
  {
    "id": 14,
    "nombre": "Hectopar Protección Completa",
    "marca": "Hectopar",
    "categoria": "Veterinaria",
    "especie": "Perros y gatos",
    "peso": "Varias presentaciones",
    "precio": "$7.000",
    "imagen": "img/productos/producto-014.png",
    "oferta": true
  },
  {
    "id": 15,
    "nombre": "Absorsol Premium",
    "marca": "Absorsol",
    "categoria": "Higiene",
    "especie": "Gatos",
    "peso": "12 kg / 21,6 kg",
    "precio": "Desde $16.000",
    "imagen": "img/productos/producto-015.png",
    "oferta": true
  },
  {
    "id": 16,
    "nombre": "Guardian Gatos Adultos",
    "marca": "Guardian",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "10 kg",
    "precio": "$28.000",
    "imagen": "img/productos/producto-016.png",
    "oferta": true
  },
  {
    "id": 17,
    "nombre": "Alta Gama by Absorsol",
    "marca": "Absorsol",
    "categoria": "Higiene",
    "especie": "Gatos",
    "peso": "12 kg / 21,6 kg",
    "precio": "Desde $18.000",
    "imagen": "img/productos/producto-017.png",
    "oferta": true
  },
  {
    "id": 18,
    "nombre": "Bedywood Pellets Pino Natural",
    "marca": "Bedywood",
    "categoria": "Higiene",
    "especie": "Gatos",
    "peso": "Consultar",
    "precio": "$13.000",
    "imagen": "img/productos/producto-018.png",
    "oferta": true
  },
  {
    "id": 19,
    "nombre": "Bedywood Colchón Sanitario",
    "marca": "Bedywood",
    "categoria": "Higiene",
    "especie": "Gatos",
    "peso": "4 kg",
    "precio": "$16.000",
    "imagen": "img/productos/producto-019.png",
    "oferta": true
  },
  {
    "id": 20,
    "nombre": "Bedywood Colchón Sanitario",
    "marca": "Bedywood",
    "categoria": "Higiene",
    "especie": "Gatos",
    "peso": "15 kg",
    "precio": "$14.000",
    "imagen": "img/productos/producto-020.png",
    "oferta": true
  },
  {
    "id": 21,
    "nombre": "Cat Chow Defense Plus",
    "marca": "Cat Chow",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "Consultar",
    "precio": "$22.000",
    "imagen": "img/productos/producto-021.png",
    "oferta": true
  },
  {
    "id": 22,
    "nombre": "Cat Chow Defense Plus Multiproteína",
    "marca": "Cat Chow",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "8 kg / 15 kg",
    "precio": "Desde $47.000",
    "imagen": "img/productos/producto-022.png",
    "oferta": true
  },
  {
    "id": 23,
    "nombre": "Cat Chow Defense Plus 8 kg",
    "marca": "Cat Chow",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "8 kg",
    "precio": "$83.000",
    "imagen": "img/productos/producto-023.png",
    "oferta": true
  },
  {
    "id": 24,
    "nombre": "Cat Chow Defense Plus 3 kg",
    "marca": "Cat Chow",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "3 kg",
    "precio": "$22.000",
    "imagen": "img/productos/producto-024.png",
    "oferta": true
  },
  {
    "id": 25,
    "nombre": "KonKatt Colchón Sanitario",
    "marca": "KonKatt",
    "categoria": "Higiene",
    "especie": "Gatos",
    "peso": "4 kg / 15 kg",
    "precio": "Desde $9.000",
    "imagen": "img/productos/producto-025.png",
    "oferta": true
  },
  {
    "id": 26,
    "nombre": "Balancín Línea Económica",
    "marca": "Balancín",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "15 kg",
    "precio": "$22.000",
    "imagen": "img/productos/producto-026.png",
    "oferta": true
  },
  {
    "id": 27,
    "nombre": "Mix Perros Adultos",
    "marca": "Mix",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "20 kg",
    "precio": "$30.000",
    "imagen": "img/productos/producto-027.png",
    "oferta": true
  },
  {
    "id": 28,
    "nombre": "Sabrositos Mix Gatos Adultos",
    "marca": "Sabrositos",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "10 kg / 20 kg",
    "precio": "Desde $27.000",
    "imagen": "img/productos/producto-028.png",
    "oferta": true
  },
  {
    "id": 29,
    "nombre": "Voraz Súper Sabroso Carne",
    "marca": "Voraz",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "22 kg",
    "precio": "$30.000",
    "imagen": "img/productos/producto-029.png",
    "oferta": true
  },
  {
    "id": 30,
    "nombre": "ZooTec Bentonita Aglutinante Lavanda",
    "marca": "ZooTec",
    "categoria": "Higiene",
    "especie": "Gatos",
    "peso": "4 x 4 kg",
    "precio": "$20.000",
    "imagen": "img/productos/producto-030.png",
    "oferta": true
  },
  {
    "id": 31,
    "nombre": "Sabrositos Cachorros",
    "marca": "Sabrositos",
    "categoria": "Perros",
    "especie": "Perros cachorros",
    "peso": "18 kg",
    "precio": "$36.000",
    "imagen": "img/productos/producto-031.png",
    "oferta": true
  },
  {
    "id": 32,
    "nombre": "Excellent Maintenance Formula Adult",
    "marca": "Excellent",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "20 kg",
    "precio": "$60.000",
    "imagen": "img/productos/producto-032.png",
    "oferta": true
  },
  {
    "id": 33,
    "nombre": "Excellent Adult M/G",
    "marca": "Excellent",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "3 kg / 15 kg / 20 kg",
    "precio": "Desde $21.000",
    "imagen": "img/productos/producto-033.png",
    "oferta": true
  },
  {
    "id": 34,
    "nombre": "Excellent Dog Puppy Formula",
    "marca": "Excellent",
    "categoria": "Perros",
    "especie": "Perros cachorros",
    "peso": "20 kg",
    "precio": "$64.000",
    "imagen": "img/productos/producto-034.png",
    "oferta": true
  },
  {
    "id": 35,
    "nombre": "Excellent Adult Razas Pequeñas",
    "marca": "Excellent",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "1 kg / 3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $12.000",
    "imagen": "img/productos/producto-035.png",
    "oferta": true
  },
  {
    "id": 36,
    "nombre": "Excellent Dog Adult Senior",
    "marca": "Excellent",
    "categoria": "Perros",
    "especie": "Perros senior",
    "peso": "3 kg / 15 kg",
    "precio": "Desde $22.500",
    "imagen": "img/productos/producto-036.png",
    "oferta": true
  },
  {
    "id": 37,
    "nombre": "Excellent Dog Puppy M/G",
    "marca": "Excellent",
    "categoria": "Perros",
    "especie": "Perros cachorros",
    "peso": "3 kg / 15 kg / 20 kg",
    "precio": "Desde $23.000",
    "imagen": "img/productos/producto-037.png",
    "oferta": true
  },
  {
    "id": 38,
    "nombre": "Excellent Dog Puppy SB",
    "marca": "Excellent",
    "categoria": "Perros",
    "especie": "Perros cachorros",
    "peso": "3 kg / 7,5 kg / 15 kg",
    "precio": "Desde $23.000",
    "imagen": "img/productos/producto-038.png",
    "oferta": true
  },
  {
    "id": 39,
    "nombre": "Excellent Dog Reduced Calorie",
    "marca": "Excellent",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "3 kg / 15 kg",
    "precio": "Desde $23.500",
    "imagen": "img/productos/producto-039.png",
    "oferta": true
  },
  {
    "id": 40,
    "nombre": "Professional Vet Gatos Adultos",
    "marca": "Professional Vet",
    "categoria": "Gatos",
    "especie": "Gatos adultos",
    "peso": "10 kg",
    "precio": "$31.000",
    "imagen": "img/productos/producto-040.png",
    "oferta": true
  },
  {
    "id": 41,
    "nombre": "Professional Vet Adulto Rojo",
    "marca": "Professional Vet",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "20 kg",
    "precio": "$41.000",
    "imagen": "img/productos/producto-041.png",
    "oferta": true
  },
  {
    "id": 42,
    "nombre": "Professional Vet Nutrición Completa Adultos",
    "marca": "Professional Vet",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "20 kg",
    "precio": "$41.000",
    "imagen": "img/productos/producto-042.png",
    "oferta": true
  },
  {
    "id": 43,
    "nombre": "Professional Vet Adulto Razas Pequeñas",
    "marca": "Professional Vet",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "15 kg",
    "precio": "$45.000",
    "imagen": "img/productos/producto-043.png",
    "oferta": true
  },
  {
    "id": 44,
    "nombre": "Professional Vet Cachorros All Breeds",
    "marca": "Professional Vet",
    "categoria": "Perros",
    "especie": "Perros cachorros",
    "peso": "15 kg",
    "precio": "$51.000",
    "imagen": "img/productos/producto-044.png",
    "oferta": true
  },
  {
    "id": 45,
    "nombre": "Professional Vet Perros Adultos Todas las Razas",
    "marca": "Professional Vet",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "20 kg",
    "precio": "$56.000",
    "imagen": "img/productos/producto-045.png",
    "oferta": true
  },
  {
    "id": 46,
    "nombre": "Professional Vet Cachorros Razas Pequeñas",
    "marca": "Professional Vet",
    "categoria": "Perros",
    "especie": "Perros cachorros",
    "peso": "15 kg",
    "precio": "$51.000",
    "imagen": "img/productos/producto-046.png",
    "oferta": true
  },
  {
    "id": 47,
    "nombre": "Professional Vet Cordero & Arroz Adultos",
    "marca": "Professional Vet",
    "categoria": "Perros",
    "especie": "Perros adultos",
    "peso": "15 kg",
    "precio": "$54.000",
    "imagen": "img/productos/producto-047.png",
    "oferta": true
  },
  {
    "id": 48,
    "nombre": "Sequito Absorbente Mineral",
    "marca": "Sequito",
    "categoria": "Higiene",
    "especie": "Gatos",
    "peso": "20 kg / 25 kg",
    "precio": "Desde $17.000",
    "imagen": "img/productos/producto-048.png",
    "oferta": true
  }
];
let carrito = [];
let favoritos = JSON.parse(localStorage.getItem("favoritosCindyV7") || "[]");

const $ = id => document.getElementById(id);

function init() {
  const marcas = [...new Set(productos.map(p => p.marca))].sort();
  $("filtroMarca").innerHTML += marcas.map(m => `<option value="${m}">${m}</option>`).join("");

  document.querySelectorAll(".chips button").forEach(btn => {
    btn.addEventListener("click", () => {
      $("filtroCategoria").value = btn.dataset.cat;
      render();
    });
  });

  $("buscador").addEventListener("input", render);
  $("filtroCategoria").addEventListener("change", render);
  $("filtroMarca").addEventListener("change", render);

  $("btnCarrito").onclick = () => $("carrito").classList.remove("hidden");
  $("cerrarCarrito").onclick = () => $("carrito").classList.add("hidden");
  $("vaciarCarrito").onclick = () => { carrito = []; renderCarrito(); };
  $("finalizarPedido").onclick = finalizarPedido;
  $("cerrarModal").onclick = cerrarModal;
  $("modal").onclick = e => { if(e.target.id === "modal") cerrarModal(); };
  document.addEventListener("keydown", e => { if(e.key === "Escape") cerrarModal(); });

  render();
  renderCarrito();
}

function render() {
  const q = $("buscador").value.toLowerCase().trim();
  const cat = $("filtroCategoria").value;
  const marca = $("filtroMarca").value;

  const filtrados = productos.filter(p => {
    const texto = `${p.nombre} ${p.marca} ${p.categoria} ${p.especie} ${p.peso}`.toLowerCase();
    return (q === "" || texto.includes(q)) &&
           (cat === "Todos" || p.categoria === cat) &&
           (marca === "Todos" || p.marca === marca);
  });

  $("totalProductos").textContent = `${filtrados.length} productos`;

  $("listaProductos").innerHTML = filtrados.map(p => `
    <article class="product-card">
      <div class="product-image" onclick="abrirModal('${p.imagen}')">
        <span class="tag">${p.categoria}</span>
        <img src="${p.imagen}" alt="${p.nombre}">
      </div>
      <div class="product-info">
        <h3>${p.nombre}</h3>
        <div class="meta">${p.marca} · ${p.especie}</div>
        <div class="meta">Peso: ${p.peso}</div>
        <div class="price">${p.precio}</div>
        <div class="actions">
          <button onclick="toggleFav(${p.id})">${favoritos.includes(p.id) ? "❤️" : "🤍"}</button>
          <button onclick="agregar(${p.id})">Agregar</button>
        </div>
        <a class="whats" target="_blank" href="${waProducto(p)}">Consultar por WhatsApp</a>
      </div>
    </article>
  `).join("");
}

function waProducto(p) {
  const msg = `Hola Cindy Pet Shop. Me interesa: ${p.nombre} (${p.peso}). ¿Hay stock?`;
  return "https://wa.me/5491168723777?text=" + encodeURIComponent(msg);
}

function toggleFav(id) {
  favoritos = favoritos.includes(id) ? favoritos.filter(x => x !== id) : [...favoritos, id];
  localStorage.setItem("favoritosCindyV7", JSON.stringify(favoritos));
  render();
}

function agregar(id) {
  const p = productos.find(x => x.id === id);
  const item = carrito.find(x => x.id === id);
  if(item) item.cantidad += 1; else carrito.push({...p, cantidad:1});
  renderCarrito();
  $("carrito").classList.remove("hidden");
}

function quitar(id) {
  carrito = carrito.filter(x => x.id !== id);
  renderCarrito();
}

function renderCarrito() {
  $("contadorCarrito").textContent = carrito.reduce((a,i)=>a+i.cantidad,0);
  $("itemsCarrito").innerHTML = carrito.length ? carrito.map(i => `
    <div class="cart-item">
      <span>${i.nombre}<br><small>${i.precio} · x${i.cantidad}</small></span>
      <button onclick="quitar(${i.id})">Quitar</button>
    </div>
  `).join("") : "<p>El carrito está vacío.</p>";
}

function finalizarPedido() {
  if(!carrito.length) { alert("El carrito está vacío."); return; }
  const detalle = carrito.map(i => `- ${i.nombre} (${i.peso}) x${i.cantidad} · ${i.precio}`).join("\n");
  const msg = "Hola Cindy Pet Shop. Quiero consultar disponibilidad de estos productos:\n\n" + detalle + "\n\nPago al recibir.";
  window.open("https://wa.me/5491168723777?text=" + encodeURIComponent(msg), "_blank");
}

function abrirModal(src) {
  $("modalImg").src = src;
  $("modal").classList.remove("hidden");
}

function cerrarModal() {
  $("modal").classList.add("hidden");
  $("modalImg").removeAttribute("src");
}

init();
