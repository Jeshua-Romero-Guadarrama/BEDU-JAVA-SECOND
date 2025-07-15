# Casa de Café ☕️

Proyecto web responsivo que simula el sitio oficial de una cadena de cafeterías.
Incluye **carrusel**, **menú dinámico**, **carrito persistente**, **contador animado**, **modo oscuro** y **lazy loading** de imágenes, todo escrito en **HTML semántico**, **CSS** y **JavaScript modular (ES6)**.

---

## Tabla de contenidos

1. [Características](#características)
2. [Demo](#demo)
3. [Tecnologías](#tecnologías)
4. [Estructura de carpetas](#estructura-de-carpetas)
5. [Instalación y uso](#instalación-y-uso)
6. [Detalle de módulos JS](#detalle-de-módulos-js)
7. [Buenas prácticas aplicadas](#buenas-prácticas-aplicadas)
8. [Autor y licenciamiento](#autor-y-licenciamiento)

---

## Características

| Módulo                  | Descripción breve                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------- |
| **Carrusel**            | Implementado con Swiper 8: autoplay, paginación clicable y transición *fade*.       |
| **Menú dinámico**       | Carga los artículos desde un arreglo de objetos (`articulosMenu`) y pinta tarjetas. |
| **Carrito**             | Agregar/Quitar productos, total en tiempo real y persistencia en `localStorage`.    |
| **Contadores animados** | Incremento suave de cifras cuando la sección entra en el *viewport*.                |
| **Modo oscuro**         | Toggle con ícono flotante; la preferencia se guarda en `localStorage`.              |
| **Lazy loading**        | Carga diferida de todas las imágenes mediante `IntersectionObserver`.               |
| **Formulario validado** | Verificación de campos `required`, patrón telefónico y correo con RegExp.           |

---

## Demo

> *Abre `index.html` en tu navegador o despliega el proyecto con un servidor estático.*
> Ejemplo:
>
> ```bash
> npx serve .
> # o
> python -m http.server
> ```

---

## Tecnologías

* HTML 5 + etiquetas semánticas (`header`, `section`, `article`, etc.)
* CSS 3 ( Flexbox, variables, modo oscuro )
* **JavaScript ES6** (módulos, `localStorage`, `IntersectionObserver`)
* [Swiper 8](https://swiperjs.com/) – Carrusel responsivo
* [FontAwesome 6](https://fontawesome.com/) – Íconos
* Google Fonts (Great Vibes, Josefin Sans, Poppins)

---

## Estructura de carpetas

```
raíz/
│
├─ index.html
├─ style.css
│
├─ js/
│   ├─ datos.js          # Datos de menú y estado inicial de carrito
│   ├─ utilidades.js     # Helpers ($, $$, formatearMoneda, localStorage)
│   ├─ slider.js         # Configuración de Swiper
│   ├─ contador.js       # Animación de números
│   ├─ navbar.js         # Sticky navbar + disparo de contadores
│   ├─ menu.js           # Render dinámico de tarjetas
│   ├─ carrito.js        # Lógica CRUD del carrito
│   ├─ formulario.js     # Validación de reserva
│   ├─ modoOscuro.js     # Tema claro/oscuro
│   ├─ lazyload.js       # Carga diferida de imágenes
│   └─ main.js           # Punto de entrada: orquesta todos los módulos
│
└─ images/               # Imágenes del carrusel, menú y testimonios
```

---

## Instalación y uso

1. **Clonar repositorio**

   ```bash
   git clone https://github.com/Jeshua-Romero-Guadarrama/BEDU-JAVA-SECOND.git
   cd BEDU-JAVA-SECOND
   ```

2. **Instalar dependencias (opcional)**
   El proyecto usa solo CDN; no requiere *build*.
   Si deseas usar un servidor local:

   ```bash
   npm install -g serve
   serve .
   ```

3. **Abrir el sitio**
   Visita `http://localhost:3000` (o el puerto indicado).

---

## Detalle de módulos JS

| Archivo         | Conceptos (sesiones 1‑8 Bedu) aplicados                  |
| --------------- | -------------------------------------------------------- |
| `datos.js`      | Arreglos, objetos literales                              |
| `utilidades.js` | Funciones puras, *helpers*, `localStorage`               |
| `slider.js`     | Interacción con librería externa                         |
| `contador.js`   | Funciones con parámetros, `requestAnimationFrame`        |
| `navbar.js`     | Eventos de scroll, manipulación del DOM                  |
| `menu.js`       | Plantillas HTML, `forEach`, delegación de eventos        |
| `carrito.js`    | CRUD de arrays, persistencia, reutilización de funciones |
| `modoOscuro.js` | Manipulación de clases, ternario, ES modules             |
| `lazyload.js`   | API del navegador (`IntersectionObserver`)               |

---

## Buenas prácticas aplicadas

* **Modularidad**: un archivo ≈ una responsabilidad.
* **Nombres descriptivos** para variables y funciones.
* **Documentación**: encabezados comentados en todos los scripts.
* **Accesibilidad**: etiquetas `<figure>`, `<address>`, atributos `alt`.
* **Responsive**: Flexbox y unidad `rem` para escalabilidad.
* **Rendimiento**: Lazy loading de imágenes, un solo acceso al DOM por tarea.

---

## Autor y licenciamiento

Proyecto desarrollado por **Jeshua Romero Guadarrama** con fines educativos.
Licencia MIT — Eres libre de usarlo y modificarlo citando la autoría original.

---
