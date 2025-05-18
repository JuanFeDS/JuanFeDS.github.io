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

{% assign post_features = "" | split: "" %}

{% for post in site.posts limit:3 %}
  {% assign feature = "" | split: "" %}
  {% assign image = post.header.overlay_image | default: "/assets/images/icono_blog.png" %}

  {% capture feature_item %}
    {
      "image_path": "{{ image }}",
      "title": "{{ post.title }}",
      "excerpt": "{{ post.excerpt | strip_html | truncate: 100 }}",
      "url": "{{ post.url }}",
      "btn_label": "Leer más",
      "btn_class": "btn--primary"
    }
  {% endcapture %}

  {% assign post_features = post_features | push: feature_item %}
{% endfor %}

{% include feature_row id="ultimos-posts" type="left" features=post_features %}

