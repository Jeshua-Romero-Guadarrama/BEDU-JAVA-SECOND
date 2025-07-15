/** --------------------------------------------------------------
 * lazyload.js
 * Carga diferida de imágenes para mejorar rendimiento
 * --------------------------------------------------------------*/
export const configurarLazyLoad = () => {
  const imgs = document.querySelectorAll("img[data-src]");
  if (!("IntersectionObserver" in window) || imgs.length === 0) return;

  const io = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(ent => {
      if (ent.isIntersecting) {
        const img  = ent.target;
        img.src    = img.dataset.src;
        img.removeAttribute("data-src");
        obs.unobserve(img);
      }
    });
  }, { rootMargin: "0px 0px 200px 0px" });

  imgs.forEach(img => io.observe(img));
};
