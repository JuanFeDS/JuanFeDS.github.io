---
title: "Segmentación de Clientes con K-Means"
excerpt: "Segmentación no supervisada de la base de clientes para personalizar estrategias comerciales por grupo."
date: 2024-08-20
level: 2
level_name: "Modular Pipeline"
flags:
  - ml_project
  - unsupervised_learning
score: 5
stack:
  - Python
  - Scikit-learn
  - pandas
  - Tableau
description: "Clustering de clientes para estrategia comercial."
complexity_breakdown:
  architecture: 2
  data: 2
  infra: 0
  ml: 2
---

## Contexto

La empresa contaba con más de 200k clientes activos pero trataba a todos de forma homogénea en sus comunicaciones. Se buscaba entender patrones de comportamiento para personalizar la oferta.

## Objetivo

Identificar grupos de clientes con comportamientos similares usando variables de transaccionalidad, frecuencia y valor (RFM).

## Enfoque

1. Construcción de features RFM desde historial transaccional
2. Normalización y reducción de dimensionalidad con PCA
3. Clustering con K-Means (k=5 seleccionado por método del codo)
4. Perfilado e interpretación de cada segmento
5. Dashboard en Tableau para el equipo comercial

## Resultados

- 5 segmentos identificados con perfiles claros
- Campaña piloto sobre segmento de alto valor: +12% en tasa de reactivación
