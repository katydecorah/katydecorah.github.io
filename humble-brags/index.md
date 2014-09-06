---
title: Humble Brags
layout: default
---

{% for brag in site.data.brags %}
{% for section in brag.section %}

<h2>{{ section }}</h2>
{% for site in brag.contents %}

<div class="brag" id="{{ site.site  | rereplace:' ','-' | downcase }}">
<h3>{{ site.site }}</h3>
<ul>
{% for item in site.contents %}<li><a href="{{item.link}}">{{ item.title }}</a>, {{item.date | date: "%B %d, %Y"}}</li>{% endfor %}
{% endfor %}
</ul>
</div>
{% endfor %}
{% endfor %}