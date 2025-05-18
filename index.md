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

{% for post in site.posts limit:3 %}
  {% assign img = post.header.overlay_image | default: "/assets/images/icono_blog.png" %}
  {% include feature_row 
    title=post.title 
    excerpt=post.excerpt 
    url=post.url 
    btn_label="Leer más" 
    btn_class="btn--primary"
  %}
{% endfor %}

