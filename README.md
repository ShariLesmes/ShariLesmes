# Mi web

Web estática (HTML + CSS + JavaScript) lista para publicar gratis en GitHub Pages.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Todo el contenido: textos, productos, enlaces e imágenes |
| `styles.css` | El diseño: colores, fuentes, tamaños |
| `script.js` | Menú móvil, buscador, carrito y animaciones |
| `images/` | Carpeta para tus fotos |

## Publicar en GitHub Pages

1. Entra en [github.com](https://github.com) y crea una cuenta si no tienes.
2. Pulsa **New repository**. Ponle un nombre (por ejemplo `mi-web`), márcalo como **Public** y pulsa **Create repository**.
3. Pulsa **uploading an existing file** y arrastra todos los archivos de esta carpeta (incluida la carpeta `images`). Pulsa **Commit changes**.
4. Ve a **Settings → Pages**. En *Branch* elige `main` y carpeta `/ (root)`. Pulsa **Save**.
5. En 1–2 minutos tu web estará en `https://TU-USUARIO.github.io/mi-web/`.

## Editar la web

Puedes editar directamente en GitHub: abre el archivo, pulsa el lápiz ✏️, cambia lo que quieras y pulsa **Commit changes**. La web se actualiza sola en un minuto.

En el código, los sitios que normalmente querrás cambiar están marcados con ✏️.

### Cambiar el nombre de la marca
En `index.html` busca `TU MARCA` y cámbialo (aparece en el título, el logo y el pie).
Para usar un logo en imagen, sube `logo.png` a `images/` y cambia la línea del logo por:
```html
<a href="#" class="logo"><img src="images/logo.png" alt="Mi marca"></a>
```

### Cambiar las fotos
1. Sube tus fotos a la carpeta `images/` (mejor en vertical, proporción 3:4, y de menos de 500 KB).
2. En `index.html`, cambia `src="https://picsum.photos/..."` por `src="images/nombre-de-tu-foto.jpg"`.

Cada producto tiene dos fotos: la segunda (`product__hover`) aparece al pasar el ratón.

### Añadir o quitar productos
Copia un bloque completo `<article class="product reveal"> ... </article>` y pégalo debajo. Cambia nombre, precio, fotos y el `data-name` del botón.

### Cambiar colores y fuentes
Al principio de `styles.css` están todas las variables (`--fondo`, `--texto`, etc.). Cambia los códigos de color y se aplica a toda la web.

### Recibir los emails del newsletter
1. Crea una cuenta gratis en [formspree.io](https://formspree.io) y crea un formulario.
2. Copia el enlace que te dan (tipo `https://formspree.io/f/abcdxyz`).
3. En `index.html`, en el formulario del newsletter, cambia `action="#"` por `action="https://formspree.io/f/abcdxyz"`.

### Dominio propio (opcional)
En **Settings → Pages → Custom domain** puedes poner tu dominio (ej. `www.mimarca.com`) y seguir las instrucciones de GitHub para configurar el DNS.

## Sobre el carrito
El carrito guarda los productos en el navegador del visitante, pero **no cobra**: GitHub Pages solo sirve páginas estáticas. Para vender de verdad tienes varias opciones:
- Enlaces de pago de **Stripe Payment Links** en cada botón "Añadir".
- El **botón de compra de Shopify** (Shopify Buy Button) incrustado.
- Un pedido por WhatsApp o Instagram.
