---
title: Writing
layout: default
---

<ul>
{% for item in site.data.articles %}
{% for article in item.article %}
<li><a href="{{article.link}}">{{ article.title }}</a> on {{article.site}}, {{article.date | date: "%B %d, %Y"}}</li>
{% endfor %}
{% endfor %}
</ul>