/** -----------------------------------------------------------------
 * slider.js
 * Inicializa el carrusel Swiper (solo se importa, no exporta)
 * -----------------------------------------------------------------*/
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
