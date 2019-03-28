---
title: Jekyll and GeoJSON

tags:
  - Jekyll
image: 2014-11-03-jekyll-geojson-0.png
---

Add this post to my love-affair-with-[Jekyll]({{site.url}}/code/mapbox-for-jekyll-posts/)-and-[Mapbox]({{site.url}}/code/static-mapbox-for-jekyll/) series.

## A cool thing happens

To summon Jekyll to a page, you use those six hyphens:

```liquid
---
```

Put variables inside or don't. Either way Jekyll will gobble it up and make something awesome. Jekyll doesn't discriminate.

`.html`? Sure.

`.md`? Yup.

`.geojson`? Let's try it.

## Making GeoJSON

A [GeoJSON](http://geojson.org/) file has a lot of repetition -- swap out different coordinates _here_ and maybe a style change _there_. The pattern lends itself to building a template and adding variables.

All my [adventure](/adventures) posts have coordinates that I use to build a [static map header]({{site.url}}/code/static-mapbox-for-jekyll/). I decided that I wanted to grab all those coordinates, weave them into a GeoJSON file, and then load it on a single adventure map.

To start, I worked on my loop and found that this was the best route:

```liquid
{% raw %}{% assign places = (site.posts | where: "category", "adventures") %}
{% for place in places %}
<!-- gooey, caramel center -->
{% endfor %}{% endraw %}
```

I created the file: `adventures.geojson` and added those six magical hyphens. Next, I wove and massaged until GeoJSON happened:

```json
{% raw %}{
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
}{% endraw %}
```

Then, I added a few conditional statements to make sure my data looked tight:

- **Capture post year**. I assigned a marker color based on the year the post was published.
- **Evaluate size of coordinates array**. I have at least one post with more than one set of coordinates. The logic is that if a post has one set of coordinates then its a `Point` or else it's a `MultiPoint`.
- **Smart symbol**. Based on a post's tags, I added a symbol to its marker.

Check out the [raw Jekyll GeoJSON](https://github.com/katydecorah/katydecorah.github.io/blob/master/map/adventures.geojson?short_path=f85bc8f) with all my tweaks and the [fresh out-the-oven GeoJSON](/map/adventures.geojson).

## On tap

A few things I would like to work on:

- **Polish colored markers**. Right now the markers are colored by year, but that's not super intuitive. I would like to find a better way to differentiate.
- **Polish MultiPoint**. This could be styled slightly different to bear a relationship with all the points in the feature.
- **Style a map for my site.** Right now I've been using a map that I styled with [Editor](https://www.mapbox.com/editor), but I should really get my hands dirty with [Studio](https://www.mapbox.com/mapbox-studio).

Can you tell that I work for Mapbox now? <3
