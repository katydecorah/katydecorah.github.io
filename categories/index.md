---
layout: default
title: Categories
---

<div class="make-columns" markdown="1">
{% for category in site.categories %}
## {{ category | first }}
{% for post in category.last %}[{{ post.title }}]({{ post.url }}){% if forloop.last %}{% else %} // {% endif %} {% endfor %}
{% endfor %}
</div>

# Tags
<div class="make-columns" markdown="1">
{% for tag in site.tags %}
## {{ tag | first }}
{% for post in tag.last %}[{{ post.title }}]({{ post.url }}){% if forloop.last %}{% else %} // {% endif %}{% endfor %}
{% endfor %}
</div>
