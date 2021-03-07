---
title: Recipe box
layout: default
---

{% for recipe in site.data.recipes %}- [{{recipe.title}}]({{recipe.url}}) from {{recipe.site}}{% if recipe.notes %} {{recipe.notes}}{% endif %}
{% endfor %}
