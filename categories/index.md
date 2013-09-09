---
layout: default
title: Categories
---

{% for category in site.categories %}
## {{ category | first }} ##
{% for post in category.last %}[{{ post.title }}]({{ post.url }}){% if forloop.last %}{% else %} // {% endif %} {% endfor %}
{% endfor %}

# Tags
{% for tag in site.tags %}
## {{ tag | first }}
{% for post in tag.last %}[{{ post.title }}]({{ post.url }}){% if forloop.last %}{% else %} // {% endif %}{% endfor %}
{% endfor %}