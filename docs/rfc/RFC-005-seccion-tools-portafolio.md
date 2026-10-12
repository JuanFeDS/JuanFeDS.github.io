# RFC-005 — Sección Tools del portafolio

| Campo | Valor |
|---|---|
| Estado | ✅ Aprobado el 2026-10-12 (decisiones en la sección 9) |
| Autor | Faro |
| Constructor | Juan + Claude, en el repo `Portafolio` (Astro) |
| Misión | M1, paso nuevo (`MISIONES.md`) |
| Fecha | 2026-10-12 |
| Fecha límite externa | Ninguna |

---

## 1. Por qué existe

El portafolio muestra proyectos con narrativa (problema, decisiones, resultado) y entradas de Makeover Monday. No tiene dónde mostrar **herramientas que ya funcionan y que cualquiera puede usar**: Trazo, klip y pixeleria están publicadas o a un paso de estarlo, y hoy no aparecen en ninguna parte. Juan (2026-10-12) pidió una sección Tools como prioridad de M1, con esas tres como pilotos.

## 2. El problema

Una herramienta no encaja en la colección `projects`. Su esquema exige `domain`, `level`, `complexity_breakdown` y una narrativa, y pensar una app pequeña con esos ejes la fuerza a parecer lo que no es. Una herramienta se explica con una tarjeta: qué hace, un enlace para usarla ya, el repo y el stack. La pregunta de diseño es cómo agregar eso sin duplicar el sistema de proyectos ni inflar el sitio.

## 3. Requisitos

### 3.1 Funcionales
- **F1.** Una página `/tools/` con una tarjeta por herramienta.
- **F2.** Cada tarjeta muestra título, descripción corta, stack, captura (opcional), enlace para usarla y enlace al repo.
- **F3.** Nueva entrada en la navegación del sitio.
- **F4.** Agregar una herramienta es crear un archivo en `src/content/tools/`; no hay que tocar código.
- **F5.** Los tres pilotos publicados: Trazo, klip y pixeleria.

### 3.2 No funcionales
- **N1.** Costo cero y sitio estático, como el resto del portafolio.
- **N2.** El diseño sigue el sistema visual actual (tokens, tema claro y oscuro, colores aurora) y se trabaja con la skill `frontend-studio`.
- **N3.** Las herramientas viven en sus propios repos; el portafolio solo las enlaza. No se copia código ni se incrusta ninguna app dentro del sitio.
- **N4.** Funciona en móvil, porque el portafolio ya lo hace.

## 4. Fuera de alcance (v1)

- La sección de demos o laboratorios (se define en otro RFC, ver sección 9).
- Páginas de detalle por herramienta (cada una enlaza a su propia app).
- Buscador, filtros y etiquetas: con tres herramientas no hacen falta.
- Analítica de uso.
- Herramientas privadas o con datos personales (`tools/`, `content_generator`).

## 5. Diseño propuesto

### 5.1 Arquitectura

Es el mismo patrón que el resto del sitio: una colección de contenido de Astro, una página que la lista y un componente de tarjeta. Nada nuevo, y por eso sin riesgo.

```
Portafolio/
├── src/
│   ├── content/
│   │   └── tools/              # un .md por herramienta: contenido, sin código
│   │       ├── trazo.md
│   │       ├── klip.md
│   │       └── pixeleria.md
│   ├── content.config.ts       # colección `tools` con su esquema
│   ├── components/
│   │   ├── Nav.astro           # entrada nueva "Tools"
│   │   └── ToolCard.astro      # la tarjeta
│   └── pages/
│       └── tools/
│           └── index.astro     # lista las herramientas
```

**Flujo de datos:** `content/tools/*.md` → colección `tools` (validada con zod al compilar) → `pages/tools/index.astro` → `ToolCard.astro`. Un archivo mal formado rompe el build con un error claro, no la página en producción.

**Esquema de la colección** (borrador, más liviano que el de `projects`):

```ts
const tools = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    live: z.string().url(),
    github: z.string().url(),
    image: image().optional(),
    order: z.number().int().default(100),
    draft: z.boolean().optional().default(false),
  }),
});
```

**Por qué una colección propia y no un campo en `projects`:** `projects` valida un marco de complejidad que no aplica a una herramienta, y mezclarlos obligaría a hacer opcionales campos que hoy son obligatorios. Dos colecciones simples se entienden mejor que una con excepciones.

**Pruebas:** el esquema valida en compilación; no hay lógica propia que probar. La revisión es visual, con capturas en claro y oscuro y en móvil.

### 5.2 Estado de los tres pilotos (verificado el 2026-10-12)

| Herramienta | Repo | En vivo | Qué falta |
|---|---|---|---|
| Trazo | `JuanFeDS/trazo` | `juanfeds.com/trazo` ✅ | Una captura para la tarjeta |
| klip | `JuanFeDS/klip` | `juanfeds.com/klip` responde 200 ✅ | Revisar que siga funcionando; último push, agosto de 2025. Es una app web |
| pixeleria | `JuanFeDS/pixeleria` | `juanfeds.com/pixeleria/` responde 200 ✅ (verificado el 2026-10-12, tras activar Pages) | Nada |

**Discrepancia resuelta:** klip es una aplicación web (confirmado por Juan el 2026-10-12). `PROYECTOS.md` la describe como extensión de navegador y debe corregirse en Faro.

### 5.3 Alternativas descartadas
- **Meter las herramientas en `projects`:** fuerza el marco de complejidad donde no corresponde (sección 2).
- **Incrustar cada herramienta dentro del portafolio:** acopla repos y rompe N3.
- **Una página de detalle por herramienta:** con tres, es trabajo sin valor; cada herramienta ya es su propia página.

## 6. Evaluación

- La página lista las tres herramientas, y cada enlace de uso y de repo abre lo correcto.
- Agregar una cuarta herramienta es crear un `.md`, sin tocar código (se prueba con una entrada de borrador).
- Se ve bien en claro, oscuro y móvil.

## 7. Hitos

- **H1.** ~~Publicar pixeleria en GitHub Pages~~ (hecho) y revisar klip.
- **H2.** Colección `tools`, esquema y las tres entradas.
- **H3.** Página `/tools/`, tarjeta y entrada en la navegación, con revisión visual.
- **H4.** Capturas, ajuste de diseño y despliegue.

## 8. Criterios de aceptación (con esto revisa Faro)

1. `juanfeds.com/pixeleria` responde 200 y funciona.
2. `juanfeds.com/tools/` lista Trazo, klip y pixeleria, cada una con descripción, stack, enlace de uso y enlace al repo.
3. Los seis enlaces (tres de uso, tres de repo) abren lo correcto.
4. Agregar una herramienta nueva es crear un archivo en `src/content/tools/` y no requiere editar código.
5. Una entrada con un campo inválido rompe el build con un mensaje claro.
6. La navegación tiene la entrada "Tools" y marca la sección activa.
7. La página se ve bien en tema claro, tema oscuro y móvil, y Juan la aprueba con capturas.
8. La descripción de klip coincide con lo que es el repo.
9. El sitio compila y se publica sin errores ni enlaces rotos nuevos.

## 9. Decisiones

1. **klip es una aplicación web**, no una extensión. La tarjeta lo dice así.
2. **pixeleria queda en `juanfeds.com/pixeleria/`**, ya publicada.
3. **Labs va en un RFC aparte**, después de Tools. Corresponde al tipo `lab` de la convención de nombres.
4. **Tools pasa adelante del MVP de NLP_WoT** como "Próximo" de M1. Faro ya lo sabe.
5. **El lector de PDF queda para después**; no entra en este RFC.
