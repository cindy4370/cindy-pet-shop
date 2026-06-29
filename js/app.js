const productos=[
{id:1,nombre:"Dog Chow Adulto 20 kg",categoria:"perros",marca:"Dog Chow",precio:54174,imagen:"https://via.placeholder.com/300x200?text=Dog+Chow"},
{id:2,nombre:"Raza Adulto Carne 20 kg",categoria:"perros",marca:"Raza",precio:31134,imagen:"https://via.placeholder.com/300x200?text=Raza"},
{id:3,nombre:"Sabrositos Gato Mix 10 kg",categoria:"gatos",marca:"Sabrositos",precio:21220,imagen:"https://via.placeholder.com/300x200?text=Sabrositos"},
{id:4,nombre:"Old Prince Premium Adulto 20 kg",categoria:"perros",marca:"Old Prince",precio:46845,imagen:"https://via.placeholder.com/300x200?text=Old+Prince"}
];
let carrito=[];
const $=id=>document.getElementById(id);
function precio(v){return v.toLocaleString("es-AR")}
function mostrarProductos(){
 const texto=$("buscador").value.toLowerCase(),cat=$("filtroCategoria").value;
 const data=productos.filter(p=>(p.nombre.toLowerCase().includes(texto)||p.marca.toLowerCase().includes(texto))&&(cat==="todos"||p.categoria===cat));
 $("listaProductos").innerHTML=data.map(p=>`<article class="card"><img src="${p.imagen}" alt="${p.nombre}"><h3>${p.nombre}</h3><p>${p.marca}</p><p class="precio">$${precio(p.precio)}</p><button onclick="agregar(${p.id})">Agregar al carrito</button></article>`).join("");
}
function agregar(id){const p=productos.find(x=>x.id===id),e=carrito.find(x=>x.id===id);e?e.cantidad++:carrito.push({...p,cantidad:1});actualizar()}
function actualizar(){
 $("contadorCarrito").textContent=carrito.reduce((a,i)=>a+i.cantidad,0);
 $("itemsCarrito").innerHTML=carrito.map(i=>`<div class="item-carrito"><span>${i.nombre} x${i.cantidad}</span><b>$${precio(i.precio*i.cantidad)}</b></div>`).join("");
 $("totalCarrito").textContent=precio(carrito.reduce((a,i)=>a+i.precio*i.cantidad,0));
}
$("btnCarrito").onclick=()=>$("carrito").classList.remove("oculto");
$("cerrarCarrito").onclick=()=>$("carrito").classList.add("oculto");
$("finalizarPedido").onclick=()=>{
 if(!carrito.length){alert("El carrito está vacío.");return}
 const detalle=carrito.map(i=>`- ${i.nombre} x${i.cantidad}: $${precio(i.precio*i.cantidad)}`).join("%0A");
 const total=carrito.reduce((a,i)=>a+i.precio*i.cantidad,0);
 window.open(`https://wa.me/5491168723777?text=Hola%20Cindy%20Pet%20Shop,%20quiero%20hacer%20este%20pedido:%0A%0A${detalle}%0A%0ATotal:%20$${precio(total)}`,"_blank");
};
$("buscador").oninput=mostrarProductos;$("filtroCategoria").onchange=mostrarProductos;mostrarProductos();
