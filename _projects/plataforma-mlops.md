---
title: "Plataforma MLOps Interna"
excerpt: "Infraestructura para versionado, entrenamiento, registro y monitoreo de modelos de ML en producción."
date: 2025-02-01
level: 5
level_name: "Platform"
flags:
  - infrastructure
  - mlops
  - high_complexity
score: 10
stack:
  - Python
  - MLflow
  - Vertex AI
  - Terraform
  - Docker
  - GitHub Actions
  - BigQuery
description: "Plataforma centralizada para el ciclo de vida de modelos de ML."
complexity_breakdown:
  architecture: 3
  data: 2
  infra: 3
  ml: 3
---

## Contexto

Con más de 10 modelos en producción y distintos equipos entrenando modelos de forma independiente, no había forma de comparar experimentos, reproducir entrenamientos ni monitorear drift.

## Objetivo

Construir una plataforma interna que estandarizara el ciclo de vida completo de los modelos: experimentación, registro, despliegue y monitoreo.

## Componentes

### Registro de experimentos
MLflow centralizado para tracking de métricas, parámetros y artefactos.

### Infraestructura como código
Terraform para provisionar entornos reproducibles en GCP (Vertex AI, Cloud Storage, BigQuery).

### CI/CD de modelos
GitHub Actions para ejecutar pipelines de entrenamiento, evaluación y despliegue automático cuando se mergeaba a `main`.

### Monitoreo de drift
Pipeline semanal que comparaba distribuciones de features en producción vs entrenamiento, con alertas automáticas.

## Resultados

- Tiempo de despliegue de nuevos modelos: de 2 días a **45 minutos**
- Cobertura de monitoreo: **100%** de modelos en producción
- 3 incidentes de drift detectados y mitigados antes de impactar el negocio
