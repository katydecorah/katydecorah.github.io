---
layout: default
title: Adventures
---
<ul class="posts">
{% for post in site.posts %}

<li style="{{% if post.img %}}background-image:url({{ post.image }});{{% else %}}background-color:#ddd;{{% endif %}}">
		<a href="{% if paginator.page > 1 %}../{% endif %}..{{ post.url }}">{{ post.title }} <span class="posts-date">{{ post.date | date: "%B %d, %Y" }}</span> <span class="label label-{{ post.category }}"><i class="icon-tag">&nbsp;</i>{{ post.category }}</span></a>
	</li>

{% endfor %}
</ul>