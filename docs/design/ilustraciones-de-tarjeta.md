# Ilustraciones de tarjeta

Reglas para las imágenes de las tarjetas del portafolio. Nacen en la sección Tools ([RFC-005](../rfc/RFC-005-seccion-tools-portafolio.md)) y están pensadas para reutilizarse en Proyectos.

## Idea

Cada tarjeta tiene una ilustración propia dibujada en SVG que **explica la herramienta sin texto**: un mapa mental para Trazo, pestañas en categorías para Klip, un paisaje procedural para Pixelería. Nada de capturas de pantalla que envejecen ni de iconos genéricos.

## Anatomía de la tarjeta

| Parte | Regla |
|---|---|
| Marco | Tarjeta con fondo teñido del color de la herramienta (`--tool-color`), sin borde. Claro: 22 % mezclado con `--color-surface`. Oscuro: 14 %. |
| Imagen | Proporción 16:9, esquinas redondeadas dentro de la tarjeta, degradado propio detrás de la ilustración. |
| Pastilla de URL | Arriba a la derecha, fondo negro al 40 % con desenfoque, texto monoespaciado. |
| Texto | Título, descripción **completa** (sin recortar líneas) y dos acciones: botón de color y enlace "Ver código". |
| Hover | La tarjeta sube 4 px y proyecta una sombra del color de la herramienta. |

No se ponen numeraciones decorativas (01, 02…) ni etiquetas de tecnologías en la tarjeta. El campo `stack` existe en el contenido, pero no se muestra.

## Paleta

Los degradados salen de los colores aurora del sitio y se asignan por posición:

| Posición | Degradado | Acento |
|---|---|---|
| 1 | morado `#8b5cf6` → rosa `#f472b6` | `#8b5cf6` |
| 2 | turquesa `#14b8a6` → azul `#3b82f6` | `#14b8a6` |
| 3 | rosa `#f472b6` → azul `#3b82f6` | `#f472b6` |

Cada degradado combina dos tonos separados, nunca variaciones de uno solo.

## Reglas del SVG

1. **Lienzo:** `viewBox="0 0 320 180"` con `preserveAspectRatio="xMidYMid slice"`, posicionado absoluto con `inset: 0`.
2. **Formas secundarias:** blanco translúcido, `rgba(255,255,255,0.22)` de relleno y borde `rgba(255,255,255,0.7)` de 1.5 px. Las conexiones van en blanco al 85 % y 2.5 px, con extremos redondeados.
3. **Elemento focal:** una sola pieza **blanca opaca** con detalles en los acentos (`#8b5cf6` y `#f472b6`). Es lo primero que se lee: el nodo central en Trazo, el encabezado de categoría en Klip, la pastilla de semilla en Pixelería.
4. **Sin texto real:** el texto se representa con barras redondeadas `rgba(255,255,255,0.9)`. Así no hay fuentes ni problemas de traducción.
5. **Zona libre de la URL:** nada importante arriba a la derecha (aprox. `x > 160`, `y < 42` en el `viewBox`). La pastilla lo tapa.
6. **Borde inferior anclado:** si la ilustración llega al borde de abajo, debe terminar en un elemento más oscuro u opaco (en Pixelería, la capa frontal `#5b21b6` al 50 %). Con blanco translúcido el borde se disuelve contra el fondo claro de la página.
7. **Determinista:** nada de `Math.random()`. Si algo se genera (las montañas de Pixelería), se calcula con funciones fijas para que cada build produzca la misma imagen.

## Movimiento

- Una sola animación por ilustración, corta y con sentido: ramas que se dibujan (Trazo), columnas que suben escalonadas (Klip), sol que oscila en pasos de píxel (Pixelería).
- Siempre dentro de `@media (prefers-reduced-motion: no-preference)`. Con movimiento reducido, la ilustración aparece ya dibujada y estática.

## Accesibilidad

- El SVG lleva `aria-hidden="true"`: es decorativo. El enlace de la imagen tiene `aria-label="Abrir <título>"`.
- En tema claro, la descripción se oscurece (`--color-text` al 78 %) para mantener un contraste de 7.5:1 o más sobre el tinte. El gris habitual (`--color-text-muted`) quedaba entre 3.9:1 y 4.2:1, por debajo de AA.

## Cómo añadir una ilustración

1. Crear `src/components/illustrations/<id>.astro`, donde `<id>` es el nombre del archivo de la entrada de contenido (`trazo.md` → `trazo.astro`).
2. Dibujar el SVG siguiendo las reglas de arriba.
3. No hay que registrar nada: `ToolCard.astro` busca el archivo por `id`.

Orden de preferencia en la tarjeta: `image` del contenido → ilustración → nombre de la herramienta en grande (respaldo sin código).

## Proyectos

Las tarjetas de proyecto siguen las mismas reglas, con estas diferencias.

### Color e icono por dominio

Cada dominio tiene un color, un degradado y un icono propios. Los define `src/lib/taxonomy.ts` y los dibuja `DomainIcon.astro` (iconos de línea de 24×24).

| Dominio | Color | Degradado | Icono |
|---|---|---|---|
| Data engineering | `#14b8a6` | turquesa → azul | tubería con nodos |
| Machine learning | `#8b5cf6` | morado → rosa | red neuronal |
| AI | `#f472b6` | rosa → morado | destello |
| Analytics | `#3b82f6` | azul → turquesa | barras ascendentes |
| Web | `#f59e0b` | ámbar → rosa | ventana de navegador |
| Mobile | `#22c55e` | verde → celeste | teléfono |

Ningún par de dominios comparte color.

### Imagen de la tarjeta

- La ilustración es **propia por proyecto**: `src/components/project-illustrations/<id>.astro`, donde `<id>` es el nombre del `.mdx`. `ProjectArt.astro` la busca solo.
- Orden de preferencia: `image` del contenido → ilustración propia → **respaldo por dominio** (icono grande blanco sobre el degradado, con dos círculos translúcidos). Un proyecto nuevo nunca queda con un hueco.
- Proporción 2:1 en la tarjeta. El lienzo del SVG sigue siendo 320×180 y con `slice` se recortan unos 10 puntos arriba y abajo, así que lo importante va entre `y = 10` y `y = 170`.
- La **insignia de dominio** (pastilla blanca con icono de color y nombre) va arriba a la derecha y ocupa el lugar de la pastilla de URL en Tools. Zona libre: aproximadamente `x > 225` e `y < 45`.
- Lo ilustrado cuenta algo real del proyecto: Spaceship Titanic muestra la curva de experimentos que mejora hasta el mejor score; YT Organizer, la barra de categorías y la cuadrícula de vídeos. Si un elemento no significa nada concreto en ese proyecto, no se dibuja: la pastilla blanca solo aparece donde representa algo (la categoría activa de YT Organizer).

### Marco y reverso

- Frente y reverso comparten el marco teñido con `--card-color` (22 % en claro, 14 % en oscuro para el frente; 14 % y 10 % para el reverso).
- Los textos de acento del reverso (etiqueta de nivel, insignia de dominio y banderas) mezclan el color del dominio con `--color-text` al 45 %. El color puro del dominio, sobre todo ámbar y verde, no llega a 4.5:1 sobre el tinte. Con la mezcla quedan entre 6.5:1 y 8.7:1.
- La descripción del frente no se recorta y se oscurece en tema claro, igual que en Tools.
- La tarjeta mantiene el volteo. El dorso conserva el gráfico de complejidad del Scientist Framework.

## Pendiente

- Añadir una ilustración propia a cada proyecto nuevo (NLP_WoT, Pega un Grito…); mientras tanto sale el respaldo por dominio.
- Usar el icono y el color de dominio en el detalle de proyecto y en la portada, que hoy solo heredan el degradado.
