---
title: Jekyll and GeoJSON
category: code
image:
tags:
 - Jekyll
 - Mapbox
 - GeoJSON
image: https://farm6.staticflickr.com/5157/14278201486_25b78eef45_o.png
redirect_from: 
---


Add this post to my love-affair-with-[Jekyll](http://katydecorah.com/code/2014/01/26/mapbox-for-jekyll-posts/)-and-[Mapbox](http://katydecorah.com/code/2014/07/26/static-mapbox-for-jekyll/) series.

## A cool thing happens

To summon Jekyll to a page, you use those six hyphens:

{% highlight erb %}
---
---
{% endhighlight %}

Put variables inside or don't. Either way Jekyll will gobble it up and make something awesome. Jekyll doesn't discriminate.

`.html`? Sure.

`.md`? Yup.

`.geojson`? Let's try it.

## Making GeoJSON

A [GeoJSON](http://geojson.org/) file has a lot of repetition -- swap out different coordinates *here* and maybe a style change *there*. The pattern lends itself to building a template and adding variables.

All my [adventure](/card-catalog/#adventures) posts have coordinates that I use to build a [static map header](http://katydecorah.com/code/2014/07/26/static-mapbox-for-jekyll/). I decided that I wanted to grab all those coordinates, weave them into a GeoJSON file, and then load it on a single adventure map.

To start, I worked on my loop and found that this was the best route:

{% highlight liquid %}{% raw %}
{% assign places = (site.posts | where: "category", "adventures") %}
{% for place in places %}
  <!-- gooey, caramel center -->
{% endfor %}
{% endraw %}{% endhighlight %}

I created the file: `adventures.geojson` and added those six magical hyphens. Next, I wove and massaged until GeoJSON happened:

{% highlight json %}{% raw %}
{
  "type": "FeatureCollection",
  "features": [{% assign places = (site.posts | where: "category", "adventures") %}{% for place in places %}
    {
      "type": "Feature",
      "properties": {
        "title": "{{ place.title }}",
        "image": "{{ place.image }}",
        "url": "{{site.url}}{{place.url}}",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [{{ place.coordinates }}]
      }
    }{% if forloop.rindex > 1 %},{% endif%}{% endfor %}
  ]
}
{% endraw %}{% endhighlight %}

Then, I added a few conditional statements to make sure my data looked tight:

* **Capture post year**. I assigned a marker color based on the year the post was published.
* **Evaluate size of coordinates array**. I have at least one post with more than one set of coordinates. The logic is that if a post has one set of coordinates then its a `Point` or else it's a `MultiPoint`.
* **Smart symbol**. Based on a post's tags, I added a symbol to its marker.

Check out the [raw Jekyll GeoJSON](https://github.com/katydecorah/katydecorah.github.io/blob/master/map/adventures.geojson?short_path=f85bc8f) with all my tweaks and the [fresh out-the-oven GeoJSON](/map/adventures.geojson).

## Adventure map

The [map lives here](/map), but hey, I'll save you a trip:

<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.2/mapbox.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.2/mapbox.css' rel='stylesheet' />

<div id="map" style="max-width: 900px; margin: 0 auto 1em; height: 300px"></div>
<script>
L.mapbox.accessToken = '{{site.mapbox-token}}';
var map = L.mapbox.map('map', '{{site.mapid}}');

var featureLayer = L.mapbox.featureLayer()
.loadURL('/map/adventures.geojson')
.addTo(map);

featureLayer.on('ready', function() {
  map.fitBounds(featureLayer.getBounds());
});

featureLayer.on('layeradd', function(e) {
  var marker = e.layer,
  feature = marker.feature;

  // Create custom popup content
  var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
  '<img alt="'+ feature.properties.title +'+" style="max-width: 150px" src="' + feature.properties.image + '" /><h2 class="text-center">'+feature.properties.title+'</h2></a>';

  // http://leafletjs.com/reference.html#popup
  marker.bindPopup(popupContent,{
    minWidth: 200,
    closeButton: false
  });
});
</script>

I [built the map](https://github.com/katydecorah/katydecorah.github.io/blob/master/map/index.html) with [Mapbox.js](https://www.mapbox.com/mapbox.js/api/). I sourced the functionality of my map from Mapbox.js examples. I used:

* [Load GeoJSON from a URL](https://www.mapbox.com/mapbox.js/example/v1.0.0/geojson-marker-from-url/)
* [Custom toolips](https://www.mapbox.com/mapbox.js/example/v1.0.0/custom-popup/)
* [Fit map to markers](https://www.mapbox.com/mapbox.js/example/v1.0.0/fit-map-to-markers/)
* [Leaflet popup](http://leafletjs.com/reference.html#popup)

My map looks tight and now any adventure post will automatically be added to my map.

## On tap

A few things I would like to work on:

* **Polish colored markers**. Right now the markers are colored by year, but that's not super intuitive. I would like to find a better way to differentiate.
* **Polish MultiPoint**. This could be styled slightly different to bear a relationship with all the points in the feature.
* **Style a map for my site.** Right now I've been using a map that I styled with [Editor](https://www.mapbox.com/editor), but I should really get my hands dirty with [Studio](https://www.mapbox.com/mapbox-studio).

Can you tell that I work for Mapbox now? <3
