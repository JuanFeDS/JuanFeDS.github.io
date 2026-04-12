# Publicar una nueva entrada en Makeover Monday

## Estructura de archivos

Cada entrada requiere exactamente dos cosas:

1. Un archivo `.mdx` en `src/content/makeover-monday/`
2. Las imágenes en `public/images/makeover-monday/<YYYY_WNN>/`

---

## Paso 1 — Preparar las imágenes

Crea la carpeta de la semana y coloca las dos imágenes ahí:

```
public/images/makeover-monday/
└── 2026_W14/
    ├── MoM_2026_W14.png        ← tu rediseño
    └── MoM_2026_W14_org.png    ← visualización original
```

Convención de nombres: `MoM_<YYYY>_W<NN>.png` y `MoM_<YYYY>_W<NN>_org.png`.

---

## Paso 2 — Crear el archivo MDX

Nombre del archivo: `<año>-w<semana>.mdx`  
Ejemplo: `src/content/makeover-monday/2026-w14.mdx`

### Frontmatter completo

```yaml
---
title: "Título descriptivo del rediseño"
description: "Una línea que resume el insight principal o el ángulo del análisis."
week: 14
year: 2026
image: "/images/makeover-monday/2026_W14/MoM_2026_W14.png"
tool: "Tableau"                            # herramienta usada (opcional)
size: "md"                                 # sm | md | lg | wide | tall (opcional, default: sm)
source_url: "https://..."                  # enlace al artículo fuente (opcional)
dataset_url: "https://data.world/..."      # enlace al dataset en data.world (opcional)
draft: false
---
```

### Valores de `size`

| Valor  | Uso sugerido                        |
|--------|-------------------------------------|
| `sm`   | imagen cuadrada o pequeña           |
| `md`   | imagen estándar                     |
| `lg`   | imagen más alta / más detallada     |
| `wide` | imagen panorámica / horizontal      |
| `tall` | imagen muy vertical                 |

---

## Paso 3 — Escribir el cuerpo del artículo

Estructura recomendada basada en las entradas existentes:

```mdx
## Título de contexto / pregunta central

<div class="ficha-tecnica">
  <div class="ficha-item">
    <span class="ficha-label">Fuente</span>
    <a href="https://..." target="_blank" rel="noopener" class="ficha-value ficha-link">Nombre de la fuente</a>
  </div>
  <div class="ficha-item">
    <span class="ficha-label">Herramienta</span>
    <span class="ficha-value">Tableau</span>
  </div>
  <div class="ficha-item">
    <span class="ficha-label">Semana</span>
    <span class="ficha-value">W14 · 2026</span>
  </div>
  <div class="ficha-item">
    <span class="ficha-label">Tema</span>
    <span class="ficha-value">Etiqueta del tema</span>
  </div>
</div>

Párrafos de contexto...

## Problemas del diseño original

<figure>
  <img src="/images/makeover-monday/2026_W14/MoM_2026_W14_org.png" alt="Visualización original" />
  <figcaption>Visualización original — Fuente (año)</figcaption>
</figure>

Análisis crítico del original...

## El rediseño

<figure>
  <img src="/images/makeover-monday/2026_W14/MoM_2026_W14.png" alt="Rediseño" />
  <figcaption>Rediseño — Herramienta · JuanFeDS (año)</figcaption>
</figure>

Explicación de decisiones de diseño...

## Aprendizajes / reflexión final

Conclusiones...
```

---

## Paso 4 — Verificar que aparece en la galería

1. Asegúrate de que `draft: false` en el frontmatter.
2. Corre `npm run dev` y navega a `/makeover-monday`.
3. La entrada debe aparecer bajo el año correspondiente, ordenada por semana (más reciente primero).
4. Haz clic en la tarjeta para confirmar que el popup (lightbox) muestra la imagen y descripción correctamente.
5. Haz clic en "Ver detalles" para verificar la página de detalle en `/makeover-monday/2026-w14`.

---

## Checklist rápido

- [ ] Carpeta `public/images/makeover-monday/<YYYY_WNN>/` creada
- [ ] Imagen del rediseño: `MoM_<YYYY>_W<NN>.png`
- [ ] Imagen original: `MoM_<YYYY>_W<NN>_org.png`
- [ ] Archivo `src/content/makeover-monday/<año>-w<nn>.mdx` creado
- [ ] `week` y `year` con valores numéricos correctos
- [ ] `image` apunta a la ruta pública correcta
- [ ] `draft: false`
- [ ] La ficha técnica tiene los 4 campos (Fuente, Herramienta, Semana, Tema)
- [ ] Ambas figuras tienen `alt` y `figcaption`
