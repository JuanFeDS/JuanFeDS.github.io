---
title: "🚀Proyectos"
layout: collection
permalink: /proyectos/
collection: proyectos
author_profile: false
---

Aquí comparto algunos de los proyectos en los que he trabajado: modelos predictivos, segmentaciones inteligentes, pipelines de datos y más.

Cada uno ha sido una oportunidad para aprender, fallar, mejorar y volver a intentar. ¡Échales un vistazo!

<h1>Mis proyectos</h1>

<ul>
  {% for project in site.projects %}
    <li>
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      <p>{{ project.description }}</p>
      <small>{{ project.date | date: "%d %B %Y" }}</small>
    </li>
  {% endfor %}
</ul>