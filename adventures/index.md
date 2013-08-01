---
layout: default
title: Adventures
---

{% for post in site.posts %}
* [{{ post.title }} &mdash; {{ post.date | date: "%B %d, %Y" }} <small>Filed under: {{ post.category }}</small>](..{{ post.url }})
{% endfor %}