const btnCarrito = document.getElementById("btnCarrito");
const carrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");

btnCarrito.addEventListener("click", () => {
  carrito.classList.remove("oculto");
});

cerrarCarrito.addEventListener("click", () => {
  carrito.classList.add("oculto");
});
