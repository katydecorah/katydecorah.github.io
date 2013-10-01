---
layout: default
title: Archive
---
## Categories
{% assign categories_max = 0 %}
{% for category in site.categories %}
{% if category[1].size > categories_max %}
{% assign categories_max = category[1].size %}
{% endif %}
{% endfor %}
{% for i in (1..categories_max) reversed %}
{% for category in site.categories %}
{% if category[1].size == i %}
### {{ category[0] }}
{% for post in category.last %}[{{ post.title }}]({{ post.url }}){% if forloop.last %}{% else %} // {% endif %}{% endfor %}
{% endif %}
{% endfor %}
{% endfor %}
<hr>

## Tags
{% assign tags_max = 0 %}
{% for tag in site.tags %}
{% if tag[1].size > tags_max %}
{% assign tags_max = tag[1].size %}
{% endif %}
{% endfor %}
{% for i in (1..tags_max) reversed %}
{% for tag in site.tags %}
{% if tag[1].size == i %}
### {{ tag[0] }}
{% for post in tag.last %}[{{ post.title }}]({{ post.url }}){% if forloop.last %}{% else %} // {% endif %}{% endfor %}
{% endif %}
{% endfor %}
{% endfor %}