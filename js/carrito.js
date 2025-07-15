/** -----------------------------------------------------------------
 * carrito.js
 * Lógica de agregar, eliminar y listar productos con localStorage
 * -----------------------------------------------------------------*/
import { articulosMenu } from "./datos.js";
import { $, guardarLS, leerLS, formatearMoneda } from "./utilidades.js";

const CLAVE_LS = "carrito-cafe";
let carrito = leerLS(CLAVE_LS, []); // [{id, cantidad}]

/* ---------- Funciones de dominio ---------- */
export const agregarAlCarrito = (id, cantidad = 1) => {
  const item = carrito.find(i => i.id === id);
  item ? (item.cantidad += cantidad) : carrito.push({ id, cantidad });
  sincronizar();
};

export const eliminarDelCarrito = id => {
  carrito = carrito.filter(i => i.id !== id);
  sincronizar();
};

export const obtenerTotal = () =>
  carrito.reduce(
    (acum, i) =>
      acum +
      articulosMenu.find(a => a.id === i.id).precio * i.cantidad,
    0
  );

/* ---------- Render en DOM ---------- */
const contenedorCarrito = $("#carrito");       // <ul id="carrito"></ul>
const totalCarrito      = $("#total-carrito"); // <span id="total-carrito"></span>

export const renderizarCarrito = () => {
  if (!contenedorCarrito || !totalCarrito) return;

  contenedorCarrito.innerHTML = "";
  carrito.forEach(({ id, cantidad }) => {
    const art = articulosMenu.find(a => a.id === id);
    const li = document.createElement("li");
    li.innerHTML = `
      ${art.nombre} x${cantidad}
      <span>${formatearMoneda(art.precio * cantidad)}</span>
      <button class="quitar" data-id="${id}">✖</button>
    `;
    contenedorCarrito.appendChild(li);
  });
  totalCarrito.textContent = formatearMoneda(obtenerTotal());
};

/* ---------- Sincronización ---------- */
const sincronizar = () => {
  guardarLS(CLAVE_LS, carrito);
  renderizarCarrito();
};

/* ---------- Eventos globales ---------- */
document.addEventListener("click", e => {
  // Delegación: agregar
  if (e.target.closest(".agregar-carrito")) {
    const id = +e.target.closest(".agregar-carrito").dataset.id;
    agregarAlCarrito(id);
  }

  // Delegación: quitar
  if (e.target.matches(".quitar")) {
    const id = +e.target.dataset.id;
    eliminarDelCarrito(id);
  }
});
