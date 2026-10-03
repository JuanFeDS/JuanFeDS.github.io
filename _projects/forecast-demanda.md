---
title: "Forecasting de Demanda con Prophet"
excerpt: "Modelo de series de tiempo para predecir demanda de productos con estacionalidad múltiple."
date: 2024-11-10
level: 3
level_name: "Productionized Pipeline"
flags:
  - ml_project
  - time_series
  - productionized
score: 8
stack:
  - Python
  - Prophet
  - BigQuery
  - Cloud Run
  - Looker Studio
description: "Forecasting semanal de demanda por SKU para planificación de inventario."
complexity_breakdown:
  architecture: 2
  data: 3
  infra: 2
  ml: 3
---

## Contexto

El equipo de supply chain tomaba decisiones de compra basándose en promedios históricos simples, lo que resultaba en quiebres de stock en temporadas altas y sobrestock en períodos bajos.

## Objetivo

Predecir la demanda semanal por SKU con un horizonte de 4 semanas, incorporando estacionalidades y eventos especiales.

## Enfoque

1. Análisis de series de tiempo por SKU (más de 300 productos)
2. Entrenamiento de modelos Prophet con estacionalidad anual y semanal
3. Incorporación de regressors externos: días festivos, promociones
4. Evaluación con MAPE por familia de productos
5. Despliegue en Cloud Run con invocación semanal automatizada
6. Dashboard de forecast vs real en Looker Studio

## Resultados

- MAPE promedio: **11.3%** vs **24.1%** del baseline
- Reducción de quiebres de stock en temporada alta: **-28%**
- Modelo en producción con reentrenamiento mensual automático
