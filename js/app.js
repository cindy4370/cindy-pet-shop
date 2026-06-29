const productos = [
  {
    id: 1,
    nombre: "Dog Chow Adulto 20 kg",
    categoria: "perros",
    marca: "Dog Chow",
    precio: 54174,
    imagen: "https://via.placeholder.com/300x200?text=Dog+Chow"
  },
  {
    id: 2,
    nombre: "Raza Adulto Carne 20 kg",
    categoria: "perros",
    marca: "Raza",
    precio: 31134,
    imagen: "https://via.placeholder.com/300x200?text=Raza"
  },
  {
    id: 3,
    nombre: "Sabrositos Gato Mix 10 kg",
    categoria: "gatos",
    marca: "Sabrositos",
    precio: 21220,
    imagen: "https://via.placeholder.com/300x200?text=Sabrositos"
  },
  {
    id: 4,
    nombre: "Old Prince Premium Adulto 20 kg",
    categoria: "perros",
    marca: "Old Prince",
    precio: 46845,
    imagen: "https://via.placeholder.com/300x200?text=Old+Prince"
  }
];

let carrito = [];

const listaProductos = document.getElementById("listaProductos");
const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtroCategoria");
const contadorCarrito = document.getElementById("contadorCarrito");
const carritoPanel = document.getElementById("carrito");
const itemsCarrito = document.getElementById("itemsCarrito");
const totalCarrito = document.getElementById("totalCarrito");

function formatoPrecio(valor) {
  return valor.toLocaleString("es-AR");
}

function mostrarProductos() {
  const texto = buscador.value.toLowerCase();
  const categoria = filtroCategoria.value;

  const filtrados = productos.filter(p => {
    const coincideTexto =
      p.nombre.toLowerCase().includes(texto) ||
      p.marca.toLowerCase().includes(texto);

    const coincideCategoria = categoria === "todos" || p.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  listaProductos.innerHTML = filtrados.map(p => `
    <article class="card">
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.marca}</p>
      <p class="precio">$${formatoPrecio(p.precio)}</p>
      <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
    </article>
  `).join("");
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const existente = carrito.find(item => item.id === id);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  contadorCarrito.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  itemsCarrito.innerHTML = carrito.map(item => `
    <div class="item-carrito">
      <span>${item.nombre} x${item.cantidad}</span>
      <strong>$${formatoPrecio(item.precio * item.cantidad)}</strong>
    </div>
  `).join("");

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  totalCarrito.textContent = formatoPrecio(total);
}

document.getElementById("btnCarrito").addEventListener("click", () => {
  carritoPanel.classList.remove("oculto");
});

document.getElementById("cerrarCarrito").addEventListener("click", () => {
  carritoPanel.classList.add("oculto");
});

document.getElementById("finalizarPedido").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  const detalle = carrito.map(item =>
    `- ${item.nombre} x${item.cantidad}: $${formatoPrecio(item.precio * item.cantidad)}`
  ).join("%0A");

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const mensaje = `Hola Cindy Pet Shop, quiero hacer este pedido:%0A%0A${detalle}%0A%0ATotal: $${formatoPrecio(total)}`;
  window.open(`https://wa.me/5491150582263?text=${mensaje}`, "_blank");
});

buscador.addEventListener("input", mostrarProductos);
filtroCategoria.addEventListener("change", mostrarProductos);

mostrarProductos();
