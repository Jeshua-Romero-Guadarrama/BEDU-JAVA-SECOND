/** -----------------------------------------------------------------
 * formulario.js
 * Validación simple de la reserva y feedback al usuario
 * -----------------------------------------------------------------*/
export const configurarFormulario = () => {
  const form = document.querySelector(".contact-right form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const data   = new FormData(form);
    const nombre = data.get("nombre") || data.get("First Name"); // según placeholder
    const email  = data.get("correo") || data.get("Email Address");

    const correoOK = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if (!nombre.trim() || !correoOK) {
      alert("Por favor rellena tu nombre y un correo válido.");
      return;
    }

    alert(`¡Gracias por tu reserva, ${nombre}!`);
    form.reset();
  });
};
