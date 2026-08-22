# 🧪 Evaluación crítica del portafolio — 2026-08-02

Evaluación exhaustiva del repo `JuanFeDS/Portafolio` (Astro + MDX + Tailwind). Cubre arquitectura de contenido, código, SEO, accesibilidad y consistencia de datos. Basada en lectura completa de `content.config.ts`, las 3 páginas principales, los 4 layouts, los 3 proyectos, los 2 posts del blog, `astro.config.mjs`, el workflow de CI y el histórico de commits.

---

## 🔴 Crítico

### 1. Hay un proyecto placeholder publicado como real

`src/content/projects/mi-primer-proyecto.mdx` tiene `draft: false` y su contenido es, literalmente, la plantilla sin rellenar:

```
title: "Nombre del proyecto"
description: "Una línea describiendo qué hace el proyecto y el impacto principal."
...
## Contexto
¿Qué problema existía antes de este proyecto? ¿Para quién?
```

Esto no es un borrador escondido — aparece en `/projects`, en la grilla junto a Spaceship Titanic y YT Organizer, con su propia card, su propio flip, su propio badge de nivel. Cualquier visitante que abra la sección de trabajo tiene 1 de cada 3 tarjetas rota.

**Por qué importa más de lo que parece:** en un portafolio, la sección de proyectos es la prueba de trabajo — es lo que un reclutador o un par técnico usa para validar todo lo demás que dice la página (el "Sobre mí", el framework de complejidad, el stack). Un placeholder visible ahí no es un detalle estético: es una señal de que el contenido no se revisó antes de publicar, y eso mancha la credibilidad de las partes que sí están bien hechas. Este mismo punto ya había quedado anotado como pendiente en la sesión del 2026-05-10 y sigue sin resolverse — vale la pena tratarlo como bloqueante antes de compartir el link en cualquier lado.

**Opciones concretas:**
- Poner `draft: true` si aún no hay contenido real que meter ahí (arreglo de 30 segundos).
- Borrar el archivo si no hay plan de usarlo — el `_template.json` ya cumple el rol de plantilla para nuevos proyectos, no hace falta un segundo ejemplo a medio llenar.
- Completarlo con un proyecto real si existe uno pendiente de documentar.

---

### 2. La arquitectura de información es más grande que el contenido que la llena

El `content.config.ts` define un sistema ambicioso: 6 dominios (`data-engineering`, `machine-learning`, `ai`, `analytics`, `web`, `mobile`), 5 niveles de sistema, 4 dimensiones de complejidad por proyecto, 7 flags posibles. Es un taxonomía diseñada para catalogar decenas de proyectos.

Hoy hay 2 proyectos reales (el tercero es el placeholder del punto anterior), y entre los dos solo usan 2 de los 6 dominios (`machine-learning` y `web`).

**Consecuencias visibles concretas:**
- La card "Complexity Profile" del home — la pieza más elaborada visualmente del sitio, con su matriz de niveles × dimensiones y su distribución por nivel — va a mostrar 3 de 5 niveles completamente vacíos (nivel 2, 4 y 5 sin ningún proyecto). Una matriz mayormente vacía comunica lo contrario de lo que probablemente se buscaba: en vez de "tengo un sistema riguroso para medir complejidad", comunica "construí una herramienta de análisis para un catálogo que todavía no existe".
- Los filtros de dominio en `/projects` (`activeDomains` en `projects/index.astro`) van a mostrar como máximo 2 botones activos de los 6 posibles — el resto del sistema de filtrado está construido pero nunca se ejerce.
- Los `domainGradient`/`domainColor` para `data-engineering`, `ai`, `analytics` y `mobile` son código muerto en este momento: existen, están bien escritos, pero ningún dato los activa.

**El trade-off real que hay que decidir:** o el catálogo de proyectos crece pronto (idealmente sumando trabajo que toque más dominios — hay experiencia de `data-engineering` mencionada en `/about`, en Mercado Libre y WOM, que podría documentarse como proyecto aunque sea a alto nivel sin código propietario), o convendría reducir temporalmente la ambición visual del Complexity Profile mientras el catálogo es chico, para que no se note el hueco. Construir para 20 proyectos cuando hay 2 hace que la propia sofisticación del sistema juegue en contra.

---

## 🟠 Importante

### 3. Inconsistencia de datos por duplicación sin fuente única de verdad

Los diccionarios de taxonomía (`domainLabel`, `domainGradient`, `domainColor`, `flagLabel`, `levelDot`, `levelName`) están copiados y pegados, casi idénticos, en al menos tres archivos: `src/pages/index.astro`, `src/pages/projects/index.astro` y `src/layouts/ProjectLayout.astro`. No hay un módulo compartido (`src/lib/taxonomy.ts` o similar) del que todos importen.

Esto ya produjo divergencia real, no hipotética:

| Flag | En `projects/index.astro` | En `ProjectLayout.astro` |
|---|---|---|
| `high-concurrency` | `🌍 Concurrencia` | `🌍 Alta concurrencia` |

Mismo dato (`high-concurrency`), dos textos distintos según si el visitante lo ve en la grilla o en el detalle del proyecto. Es un detalle chico hoy, pero con 3 copias del mismo diccionario, cada nuevo flag o dominio que se agregue tiene que actualizarse en 3 lugares a mano — y cada vez que eso no pase perfecto, aparece una inconsistencia nueva.

También hay un desfase entre **documentación** y **schema real**: el blog post que explica el framework (`the-scientist-complexity-framework.mdx`) describe el nivel 3 como *"Backend System"* y el nivel 5 como *"Scalable Platform"*, pero el enum real en `content.config.ts` usa `"Basic Backend"` y `"Complex Platform"`. El post que se supone que explica cómo funciona el sistema de clasificación no coincide con los nombres que el sistema realmente usa — alguien que lea el post y después vea un proyecto no va a poder mapear uno a uno los términos.

**Recomendación concreta:** centralizar todo en un único `src/lib/taxonomy.ts` que exporte los diccionarios de dominio, nivel y flag, y que cada página/layout importe de ahí. Es un refactor mecánico y de bajo riesgo que elimina esta clase entera de bugs de una vez.

---

### 4. El stack de "Sobre mí" está desconectado del stack real de los proyectos

La card "Stack" del home (`index.astro`) se genera **dinámicamente**: recorre `allProjects.flatMap(p => p.data.stack)` y arma la lista a partir de lo que de verdad se usó en los proyectos publicados.

La sección "Stack" de `/about.astro`, en cambio, es un array hardcodeado a mano (`Python, SQL, pandas, numpy, scikit-learn, PyTorch, Keras, FastAPI, Streamlit, matplotlib, seaborn, plotly, Power BI, AWS, Firebase, Git`) que no tiene ninguna relación con los datos de `content/projects/`.

El resultado es que son dos fuentes de verdad distintas sobre la misma pregunta ("¿qué tecnologías usa esta persona?"), y no coinciden: `Streamlit`, `Keras`, `Firebase` aparecen en `/about` pero en ningún proyecto real; cosas como `LightGBM`, `XGBoost`, `Optuna`, `MLflow`, `Apache ECharts` o `Server-Sent Events` aparecen en los proyectos pero no en `/about`. Un visitante que compare ambas páginas — algo bastante natural al navegar un portafolio — va a notar el desfase.

No hace falta que ambas listas sean idénticas (el stack "general" de la carrera es lógicamente más amplio que el stack usado en proyectos personales documentados), pero sí vale la pena decidir conscientemente si `/about` debería alimentarse también de los proyectos, o dejarlo como lista manual pero curada para que no contradiga lo que se ve dos clics más allá.

---

### 5. SEO básico ausente

Para un portafolio cuyo objetivo explícito es visibilidad profesional, faltan varias piezas de bajo costo y alto retorno:

- **Sin Open Graph / Twitter Card**: no hay `<meta property="og:*">` ni `<meta name="twitter:*">` en `BaseLayout.astro`. Esto significa que compartir cualquier link del sitio en LinkedIn, Twitter/X o Slack no va a mostrar preview, ni imagen, ni descripción — va a aparecer como un link pelado. Para alguien que activamente quiere que la gente entre a ver sus proyectos, esto reduce directamente el click-through de cualquier link compartido.
- **Sin `sitemap.xml`**: Astro tiene integración oficial (`@astrojs/sitemap`) que lo genera automáticamente con una línea de config. No está instalada.
- **Sin `robots.txt`**: no existe en `public/`.
- **Sin datos estructurados**: no hay JSON-LD tipo `Person` o `ProfilePage`, que ayudaría a que buscadores entiendan que la página es el portafolio profesional de una persona específica.
- **`site` mal configurado respecto al dominio real**: `astro.config.mjs` declara `site: 'https://juanfeds.github.io'`, pero el archivo `CNAME` en la raíz apunta a `juanfeds.com` — es decir, el sitio se sirve desde el dominio custom pero Astro cree que vive en el subdominio de GitHub Pages. Hoy esto no rompe nada visible porque no hay sitemap ni canonical URLs que dependan de `Astro.site`, pero en el momento en que se agregue cualquiera de esas dos cosas (sitemap, RSS, canonical `<link>`), todas las URLs generadas van a apuntar al dominio equivocado. Vale la pena corregirlo ahora, antes de que dependa de él más código.

---

### 6. Cards de proyecto no accesibles por teclado

En `/projects`, cada card (`.card-wrapper` en `projects/index.astro`) es un `<div>` con un `click` listener que hace el flip para mostrar el complexity breakdown en el dorso:

```js
document.querySelectorAll<HTMLElement>(".card-wrapper").forEach((card) => {
  card.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest("a")) return;
    card.classList.toggle("flipped");
  });
});
```

No tiene `tabindex`, no tiene `role="button"`, no escucha `Enter` ni `Space`. Un usuario que navega con teclado no puede llegar a esa card con `Tab` ni activarla — y como el complexity breakdown, los flags y el resumen técnico solo viven en el dorso, esa información queda completamente inaccesible sin mouse.

Vale la pena notar que el patrón correcto **ya existe en el mismo repo**: el lightbox de Makeover Monday (`makeover-monday/index.astro`) usa un `<button>` real para cada `.viz-card`, con `aria-label` y comportamiento de teclado nativo gratis por ser un elemento semántico. Es cuestión de aplicar el mismo patrón en `projects/index.astro` — cambiar el `<div class="card-wrapper">` por un `<button>` (o agregar `role="button"` + `tabindex="0"` + handler de teclado si el `<button>` complica el layout con el link interno `front-cta`).

---

## 🟡 Menor / a vigilar

### 7. Imágenes sin optimizar

Todo el sitio usa `<img>` plano — en `index.astro`, `projects/index.astro`, `ProjectLayout.astro`, `makeover-monday/index.astro` — en vez del componente `<Image />` de `astro:assets`. Esto significa:
- Sin `srcset`/`sizes` responsivo: el mismo archivo pesado se sirve a mobile y a desktop.
- Sin compresión ni conversión automática a formatos modernos (WebP/AVIF).
- `loading="lazy"` está puesto a mano en algunos lugares (Makeover Monday) pero no en otros (el avatar del hero, los banners de proyecto).

Con banners de proyecto (`spaceship-titanic/banner.png`) e imágenes de Makeover Monday sirviéndose sin optimizar, esto pega directo al LCP (Largest Contentful Paint) — la métrica de Core Web Vitals que más influye en percepción de velocidad. Migrar a `<Image />` es mecánico or archivo y no cambia el diseño visual, solo cómo se sirve el asset.

### 8. Inline styles masivos en vez de utilidades de Tailwind

Prácticamente todo el styling de color/tema se hace vía `style="color: var(--color-x); background: var(--color-y);"` repetido cientos de veces en vez de clases Tailwind con un tema custom configurado (`tailwind.config` con los mismos design tokens como colores nombrados). Funciona bien hoy, pero tiene un costo de mantenimiento acumulado: cualquier ajuste de paleta global — por ejemplo cambiar el tono de `--color-aurora-purple` — ya está centralizado en la variable CSS, así que ese caso puntual está bien resuelto. El problema es más bien de legibilidad y consistencia: hay muchísimo ruido visual en el markup, y no hay forma de que un linter de CSS/Tailwind detecte un typo en un `style` inline de la misma forma que detectaría una clase Tailwind mal escrita.

### 9. Sin validación de tipos ni de schema en CI

El workflow de deploy (`.github/workflows/deploy.yml`) corre `npm ci && npm run build` y sube el resultado directo a GitHub Pages. No hay paso de `astro check` (que valida tipos de TypeScript y, más importante en este proyecto, valida los frontmatters de contenido contra el schema de Zod en `content.config.ts`).

Esto es relevante porque ya pasó exactamente el tipo de bug que este chequeo hubiera atrapado: en la sesión anterior se documentó que `yt-organizer.mdx` tenía `ai: 0` (fuera del rango `min(1).max(5)` del schema), lo que invalidaba el schema completo y hacía que **ningún proyecto apareciera en el sitio**, sin ningún error visible en el deploy — el build probablemente pasó igual y el problema solo se notó al mirar el sitio en vivo. Agregar `astro check` (o al menos `astro build --strict` si existe la opción) como paso previo al deploy convertiría ese tipo de error silencioso en un fallo de CI explícito, atajado antes de llegar a producción.

### 10. `yt-organizer` sin repositorio público

De los 2 proyectos reales, `spaceship-titanic.mdx` tiene `github: "https://github.com/JuanFeDS/ML_Projects"`, pero `yt-organizer.mdx` no tiene campo `github` — solo `demo`. Si es una decisión deliberada (código privado, credenciales de OAuth involucradas, etc.) es razonable y no hay nada que corregir. Pero vale la pena ser consciente de que, tal como está hoy, solo 1 de los 2 proyectos reales tiene código verificable — para un portafolio técnico, poder revisar el código es parte de lo que da peso a la narrativa de arquitectura que cuenta el `summary` y el contenido del MDX.

---

## 🟢 Lo que funciona bien

Vale la pena decirlo con la misma claridad que los puntos débiles:

- **El framework de complejidad como concepto es genuinamente diferenciador.** Pocos portafolios de ciencia/ingeniería de datos intentan cuantificar la complejidad real de lo que construyeron en vez de solo listar tecnologías o poner un logo de cada herramienta. Es una idea que vale la pena que tenga suficiente contenido real detrás (ver punto 2).
- **El storytelling técnico del post de Spaceship Titanic es sólido.** Explica decisiones y el *por qué* (por qué 6 modelos, por qué SQLite, por qué SSE en vez de polling), no solo resultados — es exactamente el tipo de narrativa que demuestra criterio técnico, más que el resultado numérico en sí.
- **La ejecución visual tiene identidad propia.** El bento grid del home, las flip cards, el fondo aurora, el dark mode con toggle persistente en `localStorage` — no se siente como una plantilla genérica de portafolio, hay decisiones de diseño deliberadas y coherentes entre sí.
- **El sistema de theming vía CSS custom properties está bien pensado en su base** (colores, radios, tipografías centralizados en `global.css`), aunque la ejecución esté repartida de forma poco DRY por el código (ver punto 8).

---

## Orden de prioridad sugerido

1. **Resolver `mi-primer-proyecto.mdx`** (draft, borrar o completar) — 30 segundos a unas horas según la opción.
2. **Decidir el destino del Complexity Profile a corto plazo**: ¿crece el catálogo pronto, o se simplifica la visualización mientras tanto?
3. **Centralizar los diccionarios de taxonomía** en `src/lib/taxonomy.ts` — mata la inconsistencia de flags/niveles de raíz.
4. **Agregar OG tags + `@astrojs/sitemap`** y corregir el `site` de `astro.config.mjs` para que coincida con `juanfeds.com`.
5. **Arreglar el flip de las project cards para que sea accesible por teclado** — el patrón ya existe en el propio repo (Makeover Monday), es cuestión de replicarlo.
6. Migrar imágenes a `<Image />`, agregar `astro check` al CI, y alinear el stack de `/about` con los proyectos — mejoras de menor urgencia pero de bajo esfuerzo.
