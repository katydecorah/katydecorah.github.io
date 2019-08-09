---
title: Favorites
permalink: /favorites/index.html
---

{% assign favorites = site.favorites | where_exp: "item", "item.title != page.title" %}
{% for favorite in favorites %}- [{{favorite.title}}]({{favorite.url}})
{% endfor %}
