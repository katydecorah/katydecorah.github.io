---
layout: post
title: Mapbox.js for Jekyll Posts
category: code
mapType: Mapbox
locations: 
- "-73.7629483,42.6539068"
- "-73.7254484,43.2440284"
- "-82.5525523,35.565"
tags: 
- maps
- API
- Jekyll
image: 
---

A few months ago, I began playing around with the Google Static Maps API. I integrated it with my [Static Google Maps Image for Jekyll Posts](http://katydecorah.com/code/2013/09/06/google-maps-images-api-for-jekyll/) and created a [Static Map Maker](http://katydecorah.com/staticmapmaker/).

Since then, the Google maps have worked great with my adventures posts. All I need to do in my front-matter is add `locations` that I want marked and my Jekyll logic handles the rest. It was sometimes annoying having to fiddle with the `zoom` to make all of the map markers fit on the map, but other than that Google maps worked.

I started playing with the [Mapbox]() API this weekend. The API has so many features, that I could finally make my map headers full width, I could easily customize the look and feel, and I didn't have to manually fiddle with the zoom. I decided to roll Mapbox into my site, much like how I did with Google maps.

## Starting out

After skimming through the Mapbox.js examples, I knew that I wanted to focus on the [Fit Map to Markers](https://www.mapbox.com/mapbox.js/example/v1.0.0/fit-map-to-markers/) example. In this example, the markers are saved in a `GeoJSON` file and then that data is loaded into the marker layer. However, I want to define my locations in the `front-matter` of my Jekyll post, not create a `GeoJSON` file. To make this happen, I needed to find a way to define my locations in the flesh. 

I clicked around the examples, until I found that I was looking for in [Load GeoJSON](https://www.mapbox.com/mapbox.js/example/v1.0.0/load-geojson/) example. This example uses the variable `geojson` to hold all of the map marker data. 

My next step was to marry to the two examples:

	var map = L.mapbox.map('map', 'katydecorah.h41bj3lj',{zoomControl: false}),
	   geoJson = [
	      {
	        "type":"FeatureCollection",
	        "features":[
	          {
	            "type":"Feature",
	            "properties":{
	              "title":"DC",
	              "marker-color":"#2A2B26"
	            },
	            "geometry":{
	              "type":"Point",
	              "coordinates":[
	                -77.03887939453125,
	                38.89530825492018
	              ]
	            }
	          }
	        ]
	      }
	    ],
	   markerLayer = L.mapbox.markerLayer().setGeoJSON(geoJson).addTo(map);
	map.fitBounds(markerLayer.getBounds());

It worked!

<figure>
<p data-height="350" data-theme-id="97" data-slug-hash="4d4fc4b2cb6a777aa6f015813cc41ad4" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/4d4fc4b2cb6a777aa6f015813cc41ad4'>Mapbox -- Testing</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Demonstration with multiple locations.</figcaption>
</figure>

## Jekyll and Mapbox
Now that I had the map working, I knew that I could integrate Mapbox into my Jekyll posts. 

In the front-matter of this post, I added `locations`, just like I have done in previous posts to generate a Google map (I'm using coordinates until I have time to crack [geocoding](#geocoding)). I added a new flag to this post, `mapType: Mapbox`.

The following is currently in this page's front-matter to generate the map:

	mapType: Mapbox
	locations: 
	 - "-73.7629483,42.6539068"
	 - "-73.7254484,43.2440284"
	 - "-82.5525523,35.5908429"

Since I'm still exploring and learning the Mapbox API, I'm not 100% ready to break up with Google maps on my posts. For now, I will allow Google maps on previous posts, but I will use the flag to let Jekyll know when to use Mapbox.

I altered my Google map code to consider the new Mapbox flag:

	{% raw %}
	{% if page.locations %}
	<div{% if page.mapType %} id="map"{% endif %} class="post-map-header">
		{% if page.mapType %}{% else %}
		<img src="http://maps.googleapis.com/maps/api/staticmap?{% for location in page.locations %}{% if forloop.first %}center={{location | replace:' ','+' }}&amp;markers=color:blue%7C{{location | replace:' ','+' }}{% else %}&amp;markers=color:blue%7C{{location | replace:' ','+' }}{% endif %}{% endfor %}&amp;zoom={% if page.zoom %}{{page.zoom}}{% else %}13{% endif %}&amp;size=1280x180&amp;scale=2&amp;sensor=false&amp;visual_refresh=true" class="post-location-image" alt="">
		{% endif %}
	</div>
	{% endif %}
	{% endraw %}

If the post has `mapType`, then Jekyll will add `id="map"` and it will not load the Google map. For this page, which has `mapeType`, the logic above will output:
	
	<div id="map" class="post-map-header"></div>

In my `end.html` include, that wraps up every post and page, I added a new include, `mapbox.html`. This include contains the following logic:

  {% raw %}
	{% if page.mapType %}
	<link href='//api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.css' rel='stylesheet' />
	<script src='//api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.js'></script>
	<script>
	var geoJson = [{"type":"FeatureCollection","features":[{% for location in page.locations %}{"type":"Feature","properties":{"marker-color":"#2A2B26"},"geometry":{"type":"Point","coordinates":[{{location}}]}}{% if forloop.last == false %},{% endif %}{% endfor %}]}],
	map = L.mapbox.map('map', 'katydecorah.h41bj3lj',{zoomControl: false}),
	markerLayer = L.mapbox.markerLayer().setGeoJSON(geoJson).addTo(map);
	map.fitBounds(markerLayer.getBounds());
	map.dragging.disable();
	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	if (map.tap) map.tap.disable();
	</script>
	{% endif %}
	{% endraw %}

If the page has `mapType`, then it will load Mapbox and create the `geoJson` variable. The `geoJson` variable is constructed using a loop on the current page `locations`.

## Finalizing

I decided to disable dragging and zooming because for posts, the map is more for context and showmanship. I didn't want my visitors to get lost in a scroll. I also overrode the `cursor: move`  on `.leaflet-container,.leaflet-clickable` to `default` to not confuse visitors since the dragging and zooming is disabled.

I added `opacity` to `.leaflet-tile-pane` to allow the map to slightly recede. 

I added an `animation` to the `.leaflet-marker-icon` to allow the map markers to glide onto the map.

I didn't do too much to customize the look and feel of the map; this is something I would love to do in the near future.

## Geocoding

It wasn't until I after I finished all of this, that I found [Initially Position Map with Geocode](https://www.mapbox.com/mapbox.js/example/v1.0.0/map-center-geocoding/). I had assumed that I would need to collect the coordinates for the locations. After studying the example, I couldn't immediately find a way to query multiple locations. I will have to return to this later, because string locations are much easier work with when creating posts on the fly and it would give me the opportunity to roll Mapbox into my past posts.

## Conclusions

Mapbox produces gorgeous maps. 

I realize this might not be a typical use case for Mapbox, considering I pretty much neutered the map into static map. I love automating features and it was still cool to figure out.