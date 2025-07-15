/** --------------------------------------------------------------
 * modoOscuro.js
 * Permite alternar entre tema claro y oscuro; guarda preferencia
 * --------------------------------------------------------------*/
import { guardarLS, leerLS } from "./utilidades.js";

const CLAVE_LS = "tema-oscuro";

export const configurarModoOscuro = () => {
  const btnToggle = document.querySelector("#toggle-tema"); // <button id="toggle-tema">
  if (!btnToggle) return;

  const root = document.documentElement;
  const aplicarTema = oscuro => root.classList.toggle("dark", oscuro);

  // Al cargar la página
  aplicarTema(leerLS(CLAVE_LS, false));

  // Al pulsar el botón
  btnToggle.addEventListener("click", () => {
    const oscuro = root.classList.toggle("dark");
    guardarLS(CLAVE_LS, oscuro);
  });
};
