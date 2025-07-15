/** -----------------------------------------------------------------
 * utilidades.js
 * Funciones genéricas reutilizables en todo el proyecto
 * -----------------------------------------------------------------*/

// Helpers de selección rápida
export const $  = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => scope.querySelectorAll(selector);

// Formateo de moneda local (MXN por defecto)
export const formatearMoneda = (valor, divisa = "MXN") =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: divisa,
    minimumFractionDigits: 0
  }).format(valor);

// Persistencia sencilla en localStorage
export const guardarLS = (clave, valor) =>
  localStorage.setItem(clave, JSON.stringify(valor));

export const leerLS = (clave, defecto) => {
  const dato = localStorage.getItem(clave);
  return dato ? JSON.parse(dato) : defecto;
};
