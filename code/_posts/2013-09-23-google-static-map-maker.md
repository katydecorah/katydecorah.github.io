---
title: Google Static Map Maker
tags:
  - API
  - AngularJS
  - Sass
  - CodePen
image: 2013-09-23-google-static-map-maker.png
---

After working with Google Static Maps for some of my posts [(re: Static Google Maps Image for Jekyll Posts)](/code/google-maps-images-api-for-jekyll), I started scheming on an easier way to arrive at a map. I thought this might be helpful for other people too.

<p data-height="600" data-theme-id="97" data-slug-hash="Klieu" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/Klieu'>Google Static Map Maker</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

Visit [the Google Static Map Marker](http://staticmapmaker.com).

This project is powered with Angular. I've only dabbled in Angular, but it came in handy because it's so great with forms.

## Head scratcher

One thing that had me scratching my head: how to evaluate an expression, but then output something else. For instance, when I don't have a value for the API Key input, then I don't want the parameter to be displayed in the API call. Because if the value of `api` is blank, it can throw an error. I knew I needed a way to check the value of the input and output code based on that evaluation, but I couldn't figure out how to write it.

Finally, I figured it out.

```js
{% raw %}
{{ e.API !== '' && '&key='+e.API || ''}}
{% endraw %}
```

Wherever this is present, it will evaluate the input and then output based on evaluation. If the input does not equal an empty string, or if the input has a value, (`e.API !== ''`) then output `&key=[whatever the api key is]` otherwise (`||`) show `''` (empty string).

I evaluated the checkbox for the Map Marker (showMarker) the same way:

```js
{% raw %}
{{ showMarker == 'true' && '&markers=size:'+e.markerSize+'%7Ccolor:'+e.markerColor+'%7C'+e.location.split(' ').join('+') || '' }}
{% endraw %}
```

Angular is pretty cool.
