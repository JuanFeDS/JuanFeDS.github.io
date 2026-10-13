# Flujo de trabajo (gitflow)

## Ramas

| Rama | Sale de | Va a | Uso |
|---|---|---|---|
| `main` | — | — | Producción. Solo recibe `release/*` y `hotfix/*`. Cada merge lleva tag. |
| `develop` | `main` | — | Integración. Base de todas las features. |
| `feature/<nombre>` | `develop` | `develop` | Una funcionalidad o contenido nuevo. |
| `release/<x.y.z>` | `develop` | `main` y `develop` | Preparación de una versión: subir `package.json` y ajustes finales. |
| `hotfix/<nombre>` | `main` | `main` y `develop` | Corrección urgente en producción. |

`legacy-jekyll` es histórica: no se toca.

## Reglas

- Nada se commitea directo en `main` ni en `develop`; todo entra por PR en GitHub.
- Feature: PR hacia `develop`.
- Release: PR hacia `main`; al fusionar, tag `vX.Y.Z` sobre `main` y PR de vuelta hacia `develop`.
- Hotfix: PR hacia `main`, tag con patch (`vX.Y.Z+1`) y PR de vuelta hacia `develop`.

## Versionado

SemVer. Línea base: `v1.0.0`.

- Major: cambio que rompe URLs o estructura del sitio.
- Minor: sección o funcionalidad nueva (por ejemplo, Tools).
- Patch: correcciones, contenido y dependencias.

## Commits

Formato `tipo emoji: descripción en inglés`, por ejemplo `docs 📝: add RFC-005 for the portfolio tools section`. Se crean con la skill `/make-commits`.

## RFC

Los diseños de cambios grandes viven en `docs/rfc/RFC-NNN-<tema>.md`.
