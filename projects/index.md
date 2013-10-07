---
layout: default
title: Projects
---

{% for post in site.categories.code %}
{% if post.project == true %}
## [{{post.title}}]({{post.url}})
Details: {% for tag in post.tags%}{{tag}}{% if forloop.last %}{% else %}, {% endif %} {% endfor %}
Created: {{post.date | date: "%B %-d, %Y" }}
{% endif %}
{% endfor %}