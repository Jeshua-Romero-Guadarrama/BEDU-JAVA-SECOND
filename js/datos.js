/** -----------------------------------------------------------------
 * datos.js
 * Contiene la información repetitiva del sitio en arreglos y objetos
 * -----------------------------------------------------------------*/

// Artículos del menú (puedes ampliar o editar libremente)
export const articulosMenu = [
  {
    id: 1,
    nombre: "Espresso",
    precio: 45,
    descripcion: "Shot intenso de café 100 % arábica",
    imagen: "images/espresso.jpg",
    categoria: "Café"
  },
  {
    id: 2,
    nombre: "Latte",
    precio: 60,
    descripcion: "Café con leche vaporizada y espuma sedosa",
    imagen: "images/latte.jpg",
    categoria: "Café"
  },
  {
    id: 3,
    nombre: "Capuchino",
    precio: 58,
    descripcion: "Equilibrio perfecto entre espresso, leche y espuma",
    imagen: "images/cappuccino.jpg",
    categoria: "Café"
  },
  {
    id: 4,
    nombre: "Croissant de mantequilla",
    precio: 42,
    descripcion: "Hojaldre tradicional horneado diariamente",
    imagen: "images/croissant.jpg",
    categoria: "Repostería"
  }
];

// Estado inicial del carrito (se almacenará también en localStorage)
export const estadoCarritoDefault = {
  items: [],          // [{id, cantidad}]
  totalArticulos: 0,
  totalAPagar: 0
};

