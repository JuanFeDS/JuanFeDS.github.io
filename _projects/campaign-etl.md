---
title: "Campaign ETL"
excerpt: "Pipeline de ingesta y procesamiento de campañas de marketing desde múltiples fuentes hacia BigQuery."
date: 2025-01-15
level: 1
level_name: "Standalone Script"
flags:
  - data_intensive
score: 3
stack:
  - Python
  - BigQuery
  - pandas
description: "Pipeline de procesamiento de campañas de marketing."
complexity_breakdown:
  architecture: 1
  data: 2
  infra: 0
  ml: 0
---

## Contexto

El equipo de marketing necesitaba consolidar datos de campañas provenientes de distintas plataformas (Meta Ads, Google Ads, email) en un único lugar para poder reportar KPIs semanales.

## Objetivo

Construir un script que extrajera los datos de cada fuente, los normalizara a un esquema común y los cargara en BigQuery para su consumo en dashboards.

## Enfoque

1. Conexión a APIs de Meta Ads y Google Ads
2. Descarga incremental por fecha
3. Normalización y validación del esquema
4. Carga a tabla particionada en BigQuery

## Resultado

Reducción del tiempo de reporte semanal de 4 horas manuales a ~15 minutos automatizados.
