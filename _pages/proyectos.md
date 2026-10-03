---
title: "Proyectos"
layout: single
permalink: /proyectos/
author_profile: false
---

<p class="projects-intro">Proyectos en los que he trabajado: desde scripts de ingesta hasta plataformas de MLOps. Cada uno representa un problema real resuelto con datos.</p>

<ul class="projects-grid">
  {% assign sorted_projects = site.projects | sort: "score" | reverse %}
  {% for project in sorted_projects %}
    {% assign slug = project.url | remove: '/proyectos/' | remove: '/' %}
    {% if project.score >= 8 %}
      {% assign featured_class = "project-card level-" | append: project.level | append: " card-featured" %}
    {% else %}
      {% assign featured_class = "project-card level-" | append: project.level %}
    {% endif %}
    <li class="{{ featured_class }}">
      <div class="project-card-body">
        <div class="project-card-header">
          <span class="project-level-badge level-{{ project.level }}">L{{ project.level }} — {{ project.level_name }}</span>
          <span class="project-card-score">{{ project.score }}<span>/10</span></span>
        </div>
        <a href="{{ project.url | relative_url }}" class="project-title">{{ project.title }}</a>
        <p class="project-excerpt">{{ project.excerpt }}</p>
        {% if project.stack %}
          <div class="project-card-stack">
            {% for tech in project.stack limit: 4 %}
              <span class="stack-tag">{{ tech }}</span>
            {% endfor %}
          </div>
        {% endif %}
        <small class="project-date">{{ project.date | date: "%b %Y" }}</small>
      </div>
    </li>
  {% endfor %}
</ul>
