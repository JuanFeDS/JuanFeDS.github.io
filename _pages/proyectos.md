---
title: "🚀Proyectos"
layout: collection
permalink: /proyectos/
collection: proyectos
entries_layout: grid
author_profile: false
---

Aquí comparto algunos de los proyectos en los que he trabajado: modelos predictivos, segmentaciones inteligentes, pipelines de datos y más.

Cada uno ha sido una oportunidad para aprender, fallar, mejorar y volver a intentar. ¡Échales un vistazo!

<h1>Mis proyectos</h1>

<ul class="projects-grid">
  {% for project in site.projects %}
    <li class="project-card">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image" />
      {% endif %}
      <a href="{{ project.url | relative_url }}" class="project-title">{{ project.title }}</a>
      <p class="project-excerpt">{{ project.excerpt }}</p>
      <small class="project-date">{{ project.date | date: "%d %B %Y" }}</small>
    </li>
  {% endfor %}
</ul>

