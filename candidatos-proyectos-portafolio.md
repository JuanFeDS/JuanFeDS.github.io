# 🗂️ Candidatos a proyectos para el portafolio — 2026-08-02

Análisis cruzado entre el diagnóstico local (`C:\Users\jmart\Documents\Proyectos\Data_Science\diagnostico_proyectos.md`, `analisis_detallado_proyectos.md`, `plan_priorizacion_proyectos.md`) y los ~80 repos públicos de `github.com/juanFeDS`. Objetivo: identificar qué proyectos reales (no ejercicios de curso ni notebooks de aprendizaje) valen la pena documentar como entradas en `/projects`.

**Contexto importante:** el diagnóstico local de `Data_Science/` puntúa los 47 ítems con una rúbrica de **avance/documentación como material de estudio** (0-14 puntos), no de **valor como pieza de portafolio para audiencia externa**. Por eso proyectos como `Plantillas_DS` (14/14) o `Estadistica_Probabilidad` (12/14) puntúan altísimo ahí pero no sirven para mostrar — son plantillas y apuntes, no productos. Este documento aplica un filtro distinto: ¿es algo construido, con arquitectura propia y una historia que contar?

---

## 🟢 Candidatos fuertes

README real, arquitectura clara, y en varios casos cubren huecos que el propio `evaluacion-portafolio.md` señaló (dominio `data-engineering` con 0 proyectos, dominio `ai` con 0 proyectos, falta de proyectos de nivel 4-5).

| Repo | Qué es | Por qué destaca | Decisión 2026-08-22 |
|---|---|---|---|
| **datasage** | Asistente de análisis de datos con IA — Python + FastAPI + React + Node | Llena el hueco de dominio `ai` y de nivel alto (backend + frontend + LLM en un mismo sistema). Es el candidato más fuerte para elevar el Complexity Profile del home, hoy vacío en niveles 4-5. | **Pendiente de auditoría.** Estado real incierto — antes de sumarlo hay que revisar si el código sostiene la narrativa de "nivel alto". Si no aguanta, se reformula o se descarta. |
| **da_vinci** | App de visualización de datos (CSV/XLSX, 12+ tipos de gráfico configurables), disponible como app web **y** app de escritorio nativa (Tauri) | Combina dataviz + packaging multiplataforma. Narrativa de producto sólida: mismo motor sirviendo dos superficies distintas. | **Pendiente de auditoría.** No es duda de calidad de código sino de vigencia — ¿qué historia cuenta hoy frente al estado del arte en herramientas de viz? Necesita ángulo narrativo defendible o se descarta. |
| **NLP_WoT** | NLP sobre los libros de *The Wheel of Time* | Ya estaba bien puntuado en el diagnóstico propio (Alta utilidad / Alto avance). Código Python real, no solo notebooks — badges, README claro. | **Confirmado, primero en la cola.** Código ya sirve, siguiente paso es redactar el MDX. |
| **Data_Engineer_Habi** | Pipeline ETL (extracción, limpieza, carga a base de datos) con Python + Docker | Llena el hueco crítico: hoy el dominio `data-engineering` tiene **0 proyectos** en el catálogo. Nota: por el nombre y el README ("Prueba de Procesamiento de Datos") parece una prueba técnica para la empresa Habi — hay que decidir cómo enmarcarlo (¿mencionar el contexto de proceso de selección, o presentarlo como ejercicio propio de arquitectura ETL?). | **Descartado usar el repo tal cual** — es la prueba técnica real de una entrevista, framing incómodo para mostrar como propio. Se reemplaza por diseñar y construir un ejercicio propio de arquitectura ETL desde cero, inspirado en la idea. Ver M1 en `centro_control/MISIONES.md` — es el paso de mayor esfuerzo, va al final de la cola. |
| **lunaris_api** + **lunaris_web** | Sistema de catálogo de productos: API REST propia + frontend, usando **Google Sheets como base de datos** | Arquitectura distribuida (API y web separados, nivel 4) con una decisión técnica poco convencional pero defendible — buena historia de "por qué elegí esto" al estilo del post de Spaceship Titanic. | **Descartado.** No se consideró suficientemente top para el catálogo. |
| **gymtracker** | Dashboard de entrenamientos y métricas corporales, React 19 + TypeScript + Supabase, mobile-first | Bien documentado, backend real (Supabase, tablas propias), nivel de acabado similar a `yt-organizer` (ya en el portafolio). | **En espera.** No prioritario — mismo dominio/nivel que un proyecto que ya está en el catálogo, suma volumen pero no diversidad. |

## 🟡 Con potencial — falta ver profundidad real de código

README presente y razonable, pero no alcanza para confirmar si el proyecto está completo o merece una entrada propia sin abrir el código.

- **house_control** — gestión de flujos de ingresos del hogar, Supabase + GitHub Pages. Nicho (uso personal/familiar) pero funcional y honesto.
- **klip** — organizador visual de pestañas del navegador, React + Vite + Tailwind.
- **album_tracker** — React 19 + TypeScript, README pulido con banner y badges (buena presentación, falta confirmar profundidad funcional).
- **cuaderno-de-lecturas** — dashboard interactivo de lista de lectura (la descripción del repo suena interesante; el README vino vacío al hacer fetch, revisar directamente en el repo).

## 🔵 Curiosidad con personalidad

Complejidad baja, pero con un gancho relatable que puede funcionar como pieza "ligera" del catálogo (nivel 1, sin pretensión de ser el proyecto insignia).

- **IG_Followers** — script en Python que detecta qué usuarios de Instagram no te siguen de vuelta, a partir de los datos exportados por la propia app.

## ⛔ Descartados por ahora

- **agentes-ai**, **langgraph**, **MLOps** — son explícitamente repos de aprendizaje/documentación ("este repo explora...", "para aprender sobre...", "documentar mi aprendizaje"), no productos terminados. No aportan a un portafolio orientado a mostrar trabajo construido, aunque el conocimiento en sí (LangChain, LangGraph, MLOps) sí es relevante para el "Sobre mí"/stack.
- **knowledge_library**, **polyglow-front**, **polyglow-back** — el README es el boilerplate default de Next.js/Expo sin personalizar. Probablemente abandonados en etapa inicial.
- **MindFlow**, **CV_Monitoreo**, **Price_sensitivity_model**, **TalentPitch**, **Prueba_DS_associate** — sin README o con placeholder vacío. No se pueden evaluar sin abrir el código directamente; quedan pendientes de revisión si en algún momento interesa mirarlos.

---

## Próximo paso sugerido

Revisar en profundidad el código de los candidatos 🟢 (y los 🟡 que interesen) para:
1. Confirmar que el proyecto funciona / está en un estado presentable.
2. Decidir nivel (`level`), dominio (`domain`) y `complexity_breakdown` según el Scientist Complexity Framework.
3. Redactar el MDX con la narrativa técnica (siguiendo el estilo de `spaceship-titanic.mdx` y `yt-organizer.mdx`: problema → decisiones → resultado).

**Orden acordado 2026-08-22** (ver decisiones por candidato en la tabla de arriba, y plan completo en M1 de `centro_control/MISIONES.md`): NLP_WoT primero (ganancia rápida) → corregir `spaceship-titanic.mdx` (publicado pero desactualizado, menciona TabNet/TabPFN ya eliminados y no tiene la narrativa de leakage) → auditar `datasage` → auditar `da_vinci` → diseñar y construir un proyecto propio de data-engineering (reemplaza a `Data_Engineer_Habi`, va al final por ser el de mayor esfuerzo/incertidumbre).
