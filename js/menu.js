/** -----------------------------------------------------------------
 * menu.js
 * Pinta dinámicamente las tarjetas del menú con datos del arreglo
 * -----------------------------------------------------------------*/
import { articulosMenu } from "./datos.js";
import { $, formatearMoneda } from "./utilidades.js";

export const renderizarMenu = () => {
  const contenedor = $("#menu-dinamico");      // <div id="menu-dinamico"></div>
  if (!contenedor) return;

  const fragmento = document.createDocumentFragment();

  articulosMenu.forEach(item => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" />
      <h3>${item.nombre}</h3>
      <p>${item.descripcion}</p>
      <div class="precio-agregar">
        <span>${formatearMoneda(item.precio)}</span>
        <button class="agregar-carrito" data-id="${item.id}">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    `;
    fragmento.appendChild(card);
  });

  contenedor.appendChild(fragmento);
};
