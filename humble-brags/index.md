---
title: Humble Brags
layout: default
---

{% for brag in site.data.brags %}
{% for section in brag.section %}
## {{ section }}
{% for site in brag.contents %}
### {{ site.site }}
{% for item in site.contents %}
* [{{ item.title }}]({{item.link}}), {{item.date | date: "%B %d, %Y"}}{% endfor %}
{% endfor %}
{% endfor %}
{% endfor %}