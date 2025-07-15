/** -----------------------------------------------------------------
 * navbar.js
 * Controla la barra fija y dispara los contadores al hacer scroll
 * -----------------------------------------------------------------*/
import { $$ } from "./utilidades.js";
import { iniciarContador } from "./contador.js";

export const configurarNavbar = () => {
  const navbar       = document.querySelector(".navbar");
  const seccionMenu  = document.querySelector(".menu");
  const nums         = $$(".num");
  let   contadoresOK = false;

  window.addEventListener("scroll", () => {
    // Cambia clase 'sticky' según posición
    navbar.classList.toggle("sticky", window.scrollY > 0);

    // Lanza contadores cuando la sección menú entra en pantalla
    if (window.scrollY >= seccionMenu.offsetTop && !contadoresOK) {
      nums.forEach(el => iniciarContador(el));
      contadoresOK = true;
    }
  });
};
