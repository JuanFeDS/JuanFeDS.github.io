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

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 0;
  list-style: none;
}

.project-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: 1.2rem;
  margin: 0 0 0.5rem;
  color: #007acc;
  text-decoration: none;
}

.project-excerpt {
  flex-grow: 1;
  color: #555;
  margin-bottom: 0.75rem;
}

.project-date {
  font-size: 0.85rem;
  color: #999;
}
</style>

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

