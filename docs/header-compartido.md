# Header compartido para las tools

Las tools viven en repos propios bajo `juanfeds.com/<tool>`. Para que todas muestren el mismo header que el sitio, el portafolio publica un script que lo inyecta: `public/shared/site-header.js`, servido en `https://juanfeds.com/shared/site-header.js`.

## Uso en una tool

En el `<head>` de la página, como script normal (sin `defer` ni `type="module"`, para aplicar el tema antes de pintar):

```html
<script src="https://juanfeds.com/shared/site-header.js" data-activo="tools"></script>
```

- `data-activo`: ruta que se marca como activa (`projects`, `tools`, `blog`, `makeover-monday`, `about`). Por defecto `tools`.
- El script aplica el tema guardado en `localStorage` (`theme`, el mismo del portafolio), carga Outfit e Inter, inyecta el estilo y el `<nav>` fijo arriba, y conecta el botón de tema y el menú móvil.
- Define `--alto-cabecera` (68px) en `:root`. La tool debe dejar ese espacio arriba (`padding-top: var(--alto-cabecera)`) y puede ocultar el header añadiéndole su propia regla sobre `.sitio`.

## Mantenimiento

La lista de enlaces está duplicada: `src/components/Nav.astro` y `ENLACES` en `site-header.js`. Si cambia la navegación del sitio, hay que actualizar ambos. Un cambio en el script llega a todas las tools al desplegar el portafolio (la caché de GitHub Pages es de unos 10 minutos).
