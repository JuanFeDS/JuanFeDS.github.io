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

## CI y protección de ramas

- **CI:** `.github/workflows/ci.yml` corre `npm run check` y `npm run build` en cada PR hacia `develop` y `main`, y en los push a `develop`. El job se llama **Validate**.
- **Protección de `main`** (configurada en GitHub, no vive en el repo):
  - PR obligatorio, con 0 aprobaciones (hay un solo mantenedor).
  - Check requerido: **Validate**.
  - Aplica también a administradores: no hay push directo a `main`.
  - Force push y borrado de la rama bloqueados.
- **`develop`:** pendiente de protegerse con las mismas reglas.

Para aplicarla de nuevo en otro repositorio:

```bash
echo '{"required_status_checks":{"strict":false,"contexts":["Validate"]},"enforce_admins":true,"required_pull_request_reviews":{"required_approving_review_count":0},"restrictions":null,"allow_force_pushes":false,"allow_deletions":false}' | gh api -X PUT repos/<usuario>/<repo>/branches/main/protection --input -
```

Para comprobar el estado actual (solo lectura):

```bash
gh api repos/<usuario>/<repo>/branches/main/protection
```
