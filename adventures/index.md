---
layout: default
title: Adventures
---

{% for post in site.posts %}
* [{{ post.title }} on {{ post.date | date: "%B %d, %Y" }}](..{{ post.url }}) <span class="label">{{ post.category }}</span>
{% endfor %}