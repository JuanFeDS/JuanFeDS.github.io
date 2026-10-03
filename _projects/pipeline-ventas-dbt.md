---
title: "Pipeline de Ventas con dbt + BigQuery"
excerpt: "Modelado y transformación de datos de ventas usando dbt sobre BigQuery, con pruebas de calidad automatizadas."
date: 2025-03-01
level: 3
level_name: "Productionized Pipeline"
flags:
  - data_intensive
  - analytics_engineering
score: 7
stack:
  - dbt
  - BigQuery
  - Python
  - GitHub Actions
description: "Pipeline de analítica de ventas con modelado en capas y CI/CD."
complexity_breakdown:
  architecture: 3
  data: 3
  infra: 2
  ml: 0
---

## Contexto

El área de ventas operaba con múltiples fuentes de datos (CRM, ERP, hojas de cálculo) que producían inconsistencias en los reportes. Cada equipo calculaba los mismos KPIs de forma distinta.

## Objetivo

Construir una capa de transformación confiable y documentada que sirviera como fuente única de verdad para todos los equipos.

## Enfoque

1. Diseño de arquitectura en capas: staging → intermediate → marts
2. Modelos dbt para cada dominio: ventas, clientes, productos
3. Pruebas de calidad: unicidad, no nulos, relaciones referenciales
4. Orquestación del pipeline con GitHub Actions (schedule diario)
5. Documentación automática con dbt docs

## Resultados

- 0 discrepancias entre equipos tras migración
- Cobertura de pruebas al 100% en modelos de marts
- Tiempo de carga diaria: ~8 minutos
