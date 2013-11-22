---
layout: post
title: Static Google Maps Image for Jekyll Posts
category: code
tags: 
  - Jekyll
  - Google Maps
  - API
image: "http://katydecorah.com/img/google-maps.png"
"image-small": "http://katydecorah.com/img/google-maps.png"
"image-large": "http://katydecorah.com/img/google-maps.png"
locations: "Albany,NY"
project: true
published: true
---

I have quite a few posts with locations and I wanted a better way to integrate them into my posts. I tinkered around with the static Google Maps Image API and found a neat little solution.


## Code

<script src="https://gist.github.com/katydecorah/6487522.js">&nbsp;</script>

## Explanation

For any post with a location, I simply a "locations" variable in the post header.

    locations:
     - University at Albany
     - Siena College

I'm using *locations* to support multiple places, but you may have just one.

    locations: Albany,NY

Your location can be a place, a city, an address, or even coordinates. Really anything you would enter into Google Maps when searching.
## Live Example

{% if page.locations %}
<img src="http://maps.googleapis.com/maps/api/staticmap?{% for location in page.locations %}{% if forloop.first %}center={{location}}&amp;markers=color:blue%7C{{location}}{% else %}&amp;markers=color:blue%7C{{location}}{% endif %}{% endfor %}&amp;zoom={% if page.zoom %}{{page.zoom}}{% else %}13{% endif %}&amp;size=300x200&amp;scale=2&amp;sensor=false&amp;visual_refresh=true" alt="">
{% endif %}

## Zoom for Multiple Locations

When using multiple locations, the map will center around the first location. A good idea is to put your most centrally located destination first. You might also need to change the zoom on the map. You can do this by adding a "zoom" variable in the post header.

	locations:
    - University at Albany
    - Siena College
	zoom: 10

The lower the zoom, the farther out the map will reach. The zoom is automatically set at *13*, which is ideal for 1 location (but you can adjust that).

## More Information

Take a look at the [Google Maps Image API](https://developers.google.com/maps/documentation/staticmaps/) for more parameters. You can learn how to adjust the size of the image, styling markers, and much more.

I'm still new to the Jekyll world, but I hope this helpful to someone else.