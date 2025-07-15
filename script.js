// Inicializa el carrusel Swiper con configuración personalizada
const swiper = new Swiper(".swiper", {
  // Configuración de reproducción automática
  autoplay: {
    delay: 4000,               // Retraso de 4000 ms entre cada cambio de slide
    disableOnInteraction: false // No detener autoplay cuando el usuario interactúa
  },
  effect: "fade",               // Efecto de transición de desvanecimiento
  loop: true,                   // Habilita el bucle infinito

  // Configuración de la paginación
  pagination: {
    el: ".swiper-pagination",  // Elemento contenedor de la paginación
    clickable: true            // Permite navegar haciendo clic en los indicadores
  }
});

// Selecciona el menú y los elementos que muestran números animados
let menu = document.querySelector(".menu");
let nums = document.querySelectorAll(".num");
let start = false; // Indicador para que la animación de conteo ocurra solo una vez

// Escucha el evento de scroll en la ventana
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  // Agrega o quita la clase "sticky" según la posición del scroll
  navbar.classList.toggle("sticky", window.scrollY > 0);

  // Cuando la posición de scroll alcanza la parte superior del menú
  if (window.scrollY >= menu.offsetTop) {
    if (!start) {
      // Inicia la animación de conteo en cada elemento .num
      nums.forEach((num) => {
        startCount(num);
      });
    }
    start = true; // Evita reiniciar la animación al volver a hacer scroll
  }
});

// Función para animar el conteo de un número hasta su valor máximo
const startCount = (el) => {
  let max = el.dataset.val; // Obtiene el valor máximo desde el atributo data-val
  let count = setInterval(() => {
    el.textContent++;       // Incrementa el texto del elemento en 1
    if (el.textContent === max) {
      clearInterval(count); // Detiene el intervalo cuando se alcanza el valor máximo
    }
  }, 2000 / nums);         // Calcula la velocidad de incremento según la cantidad de elementos
};
