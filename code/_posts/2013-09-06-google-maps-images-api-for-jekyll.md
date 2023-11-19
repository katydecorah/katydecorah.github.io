---
title: Static Google maps for Jekyll
tags:
  - Jekyll
  - API
image: 2013-09-06-google-maps-images-api-for-jekyll-0.png
locations: "Albany,NY"
---

**As of 7/26/2014, this site has moved to the [Mapbox static API](/code/static-mapbox-for-jekyll/).**

I have several posts with locations and I wanted a better way to integrate them into my posts. I tinkered around with the static Google Maps Image API and found a neat little solution.

## Code

<script src="https://gist.github.com/katydecorah/6487522.js">&nbsp;</script>

## Explanation

For any post with a location, I add a "locations" variable in the post header.

```yaml
locations:
  - University at Albany
  - Siena College
```

I'm using _locations_ to support more than one place, but you can have just one.

```yaml
locations: Albany,NY
```

Your location can be a place, a city, an address, or even coordinates. Really anything you would enter into Google Maps search.

## Live Example

{% if page.locations %}
<img src="http://maps.googleapis.com/maps/api/staticmap?{% for location in page.locations %}{% if forloop.first %}center={{location}}&amp;markers=color:blue%7C{{location}}{% else %}&amp;markers=color:blue%7C{{location}}{% endif %}{% endfor %}&amp;zoom={% if page.zoom %}{{page.zoom}}{% else %}13{% endif %}&amp;size=300x200&amp;scale=2&amp;sensor=false&amp;visual_refresh=true" alt="untitled">
{% endif %}

## Zoom for more than one locations

When using more than one location, the map will center around the first location. So it would be wise to put your most centrally located destination first. You might also need to change the zoom on the map. You can do this by adding a "zoom" variable in the post header.

```yaml
locations:

- University at Albany
- Siena College
  zoom: 10
```

The lower the zoom, the farther out the map will reach. The zoom is automatically set at _13_, which is ideal for 1 location (but you can adjust that in the code).

## More Information

Take a look at the [Google Maps Image API](https://developers.google.com/maps/documentation/staticmaps/) for more parameters. You can learn how to adjust the size of the image, styling markers, and much more.
