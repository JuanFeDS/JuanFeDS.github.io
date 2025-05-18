---
layout: single
title: "JuanFeDS"
excerpt: "Científico e Ingeniero de Datos"
permalink: /
header:
  overlay_color: "#000"
  overlay_filter: "0.3"
  overlay_image: /assets/images/background.jpg
  cta_label: "Explora el blog"
  cta_url: "/blog/"
  cta_class: "btn--primary"
author_profile: true
---

👋 Bienvenido a mi sitio, donde comparto aprendizajes, proyectos y reflexiones desde el mundo de la ciencia y la ingeniería de datos. 💻📊 

Aquí encontrarás historias técnicas, consejos prácticos y un poco de inspiración para todos los que, como yo, creen que los datos pueden transformar el mundo. 🌎✨ ¡Explora, aprende y acompáñame en este viaje! 🚀🔥

<style>
  .post-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .post-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    background:rgb(27, 31, 37);
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease;
  }
  .post-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .post-card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  .post-card p {
    margin-bottom: 0.5rem;
    color:rgb(214, 214, 214);
  }
  .post-card a {
    text-decoration: none;
    color: #fff;
  }
</style>

<h2>📝 Últimos artículos</h2>

<div class="post-cards">
  {% for post in site.posts limit:3 %}
    <div class="post-card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
      <small>{{ post.date | date: "%d %B %Y" }}</small>
    </div>
  {% endfor %}
</div>

