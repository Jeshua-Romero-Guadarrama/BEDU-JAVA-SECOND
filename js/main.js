/** --------------------------------------------------------------
 * main.js
 * Punto de entrada del proyecto
 * --------------------------------------------------------------*/
import "./slider.js";                 // Carrusel
import { configurarNavbar }   from "./navbar.js";
import { renderizarMenu }     from "./menu.js";
import { renderizarCarrito }  from "./carrito.js";
import { configurarFormulario } from "./formulario.js";
import { configurarModoOscuro }  from "./modoOscuro.js";
import { configurarLazyLoad }    from "./lazyload.js";

document.addEventListener("DOMContentLoaded", () => {
  configurarNavbar();
  renderizarMenu();
  renderizarCarrito();
  configurarFormulario();
  configurarModoOscuro();
  configurarLazyLoad();
});
