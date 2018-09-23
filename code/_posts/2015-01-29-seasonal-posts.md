---
title: Seasonal posts

tags:
  - Jekyll
image: https://farm9.staticflickr.com/8679/16397459852_eff661fed3_o.png
---

After flipping through past posts, I realized that my lush green static map didn't match wintery posts. For example, [Christmas day hike](/adventures/2014/12/25/christmas-hike/). It's winter, nothing is green. Everything is white and then gray and then cold and then sometimes sad. So I needed a map style to match winter (minus the sad).

<div class="photos">
<img src="http://api.tiles.mapbox.com/v4/{{site.mapid}}/-73.7440735,42.5726903,15/600x400.png?access_token={{site.mapbox-token}}" class="img-half" alt="untitled">

<img src="http://api.tiles.mapbox.com/v4/{{site.mapid-winter}}/-73.7440735,42.5726903,15/600x400.png?access_token={{site.mapbox-token}}" class="img-half" alt="untitled">
</div>

Default style on the left, winter style on the right. ([Read more about my Jekyll-generated Mapbox static maps.](/code/2014/07/26/static-mapbox-for-jekyll/))

At first I created an in-post variable that could swap out my default map ID `{%raw%}{% if page.mapid %}{%endraw%}`, but that would need upkeep. I decided to evaluate the post's month and assign a map ID based on the season -- the post's month.

First, I needed to capture the post's month. (It seems like I can only grab this value as a string.)

{% highlight erb %}{% raw %}
{% capture month %}{{page.date | date: "%m"}}{% endcapture %}
{% endraw %}{% endhighlight %}

Next, I evaluated the month -- December, January, February, and March will receive the winter map ID from my config, while other months will receive my default map ID.

{% highlight erb %}{% raw %}
{% if month == "12" or month == "01" or month == "02" or month == "03" %}{{site.mapid-winter}}{% else %}{{ site.mapid }}{% endif %}
{% endraw %}{% endhighlight %}

I dropped this statement in my static map call and that was it! All my past winter month posts switched to my winter map ID. A fall map style may come in handy, but I'll stick with just two for right now. [See the full code.](https://github.com/katydecorah/katydecorah.github.io/blob/master/_includes/post-map-header.html)

By the way, for my map styles I'm using [Mapbox Outdoors](https://github.com/mapbox/mapbox-studio-outdoors.tm2) and [Winter Wonderland](https://github.com/mapbox/mapbox-studio-winter-wonderland.tm2) both with small tweaks to remove the labels.
