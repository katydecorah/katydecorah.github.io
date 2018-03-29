---
layout: hello
title: Hello!
---

<p class="lead">Hello! I'm Katy DeCorah. I live in Saratoga Springs, NY. I build internal tools at <a href="//www.mapbox.com">Mapbox</a>.</p>

<img src="{{site.image}}" class="hello-header" alt="Katy DeCorah">

I love [writing about code](/card-catalog/#code), [baking treats](/card-catalog/#epicurean), [going on adventures](/card-catalog/#adventures), and [making seasonal playlists](/card-catalog/#playlists). I'm a co-organizer for [Ela Conf](http://elaconf.com/).

## Side projects

#### Bots and scripts

{% for project in site.data.projects.bots %}
* [{{project.emoji}} {{project.name}}]({{project.link}}) &ndash; {{project.about}} {% endfor %}

#### Apps and sites

{% for project in site.data.projects.apps %}
* [{{project.emoji}} {{project.name}}]({{project.link}}) &ndash; {{project.about}} {% endfor %}

## Record keeping

* [:world_map: Adventure map](/map) &ndash; a map to complement my adventures.
* [:mountain: Adventure guide](/adventure-guide) &ndash; my favorite hiking trails in Upstate New York and beyond.
* [:mega: Humble brags](/humble-brags) &ndash; tooting my own horn.
* [:headphones: Playlists](/playlists) &ndash; for every season and some road trips.
* [:8ball: Everything](/everything) &ndash; every post. All of em.


<div class="post">
<div class="photos">
<img src="https://c1.staticflickr.com/1/448/18664258796_988f31b102_c.jpg" class="img-fourths" alt="at home">
<img src="https://c1.staticflickr.com/1/530/18664287626_4c32e59e7e_c.jpg" class="img-fourths" alt="treats">
<img src="https://farm1.staticflickr.com/588/21917162186_67041fbcf4_c.jpg" class="img-fourths" alt="an outdoors woman">
<img src="https://farm2.staticflickr.com/1638/24488621791_efba4eeaea_c.jpg" class="img-fourths" alt="crumb catcher">
</div>
</div>


## Colophon

This site is built with Jekyll and Sass, and hosted on [Github](https://github.com/katydecorah/katydecorah.github.com). I use [CodePen](http://codepen.io/) embeds, [Mapbox](https://www.mapbox.com/developers/api/static/) maps, [FontAwesome](http://fortawesome.github.io/Font-Awesome/icons/) icons via [IcoMoon](https://icomoon.io/), [Typekit](https://typekit.com/) fonts, and host my images on [Flickr](https://www.flickr.com/).
