/** -----------------------------------------------------------------
 * contador.js
 * Anima los contadores numéricos de la sección "data"
 * -----------------------------------------------------------------*/

/**
 * Inicia la animación de un número hasta su valor objetivo
 * @param {HTMLElement} el - Nodo con atributo data-val
 * @param {number} duracion - Tiempo total de animación (ms)
 */
export const iniciarContador = (el, duracion = 2000) => {
  const meta = +el.dataset.val;
  const incremento = Math.ceil(meta / (duracion / 16)); // ~60fps
  let actual = 0;

  const animar = () => {
    actual += incremento;
    if (actual >= meta) {
      el.textContent = meta;
      return;
    }
    el.textContent = actual;
    requestAnimationFrame(animar);
  };
  animar();
};
