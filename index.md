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

### 📝 Últimos posts

<div class="feature__wrapper">
  {% for post in site.posts limit:2 %}
    <div class="feature__item">
      <div class="archive__item-teaser">
        <img src="{{ post.header.overlay_image | default: '/assets/images/icono_blog.png' }}" alt="{{ post.title }}">
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <div class="archive__item-excerpt">
          {{ post.excerpt | markdownify | strip_html | truncate: 120 }}
        </div>
        <a href="{{ post.url | relative_url }}" class="btn btn--primary">Leer más</a>
      </div>
    </div>
  {% endfor %}
</div>

