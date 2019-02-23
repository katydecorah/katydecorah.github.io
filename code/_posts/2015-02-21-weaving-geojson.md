---
title: Weaving data into GeoJSON with Jekyll

tags:
  - Jekyll
image: 2015-02-21-weaving-geojson-0.jpg
---

Say you have a dataset for a handful of countries or all the countries, or maybe a handful of states or all the states. You want to assign your data to each state or country as a polygon of that area, not a point, so you can do fun colors or popups and make a darn cool map.

Something like this:

<div class="photos">
<iframe src="https://katydecorah.com/geojson-weaver/" width="100%" height='400px'></iframe>
</div>

So at this point your thought process might be you're like, "Ok, where do I start?" and then you think, "Ok, maybe I'll do it by hand!"

But have you seen what the coordinates for a single GeoJSON polygon of a state looks like?

```json
[
  [
    [-87.359296, 35.00118],
    [-85.606675, 34.984749],
    [-85.431413, 34.124869],
    [-85.184951, 32.859696],
    [-85.069935, 32.580372],
    [-84.960397, 32.421541],
    [-85.004212, 32.322956],
    [-84.889196, 32.262709],
    [-85.058981, 32.13674],
    [-85.053504, 32.01077],
    [-85.141136, 31.840985],
    [-85.042551, 31.539753],
    [-85.113751, 31.27686],
    [-85.004212, 31.003013],
    [-85.497137, 30.997536],
    [-87.600282, 30.997536],
    [-87.633143, 30.86609],
    [-87.408589, 30.674397],
    [-87.446927, 30.510088],
    [-87.37025, 30.427934],
    [-87.518128, 30.280057],
    [-87.655051, 30.247195],
    [-87.90699, 30.411504],
    [-87.934375, 30.657966],
    [-88.011052, 30.685351],
    [-88.10416, 30.499135],
    [-88.137022, 30.318396],
    [-88.394438, 30.367688],
    [-88.471115, 31.895754],
    [-88.241084, 33.796253],
    [-88.098683, 34.891641],
    [-88.202745, 34.995703],
    [-87.359296, 35.00118]
  ]
]
```

Ugh.

And what about a country?

```json
[
  [
    [
      [-65.5, -55.2],
      [-66.45, -55.25],
      [-66.95992, -54.89681],
      [-67.56244, -54.87001],
      [-68.63335, -54.8695],
      [-68.63401, -52.63637],
      [-68.25, -53.1],
      [-67.75, -53.85],
      [-66.45, -54.45],
      [-65.05, -54.7],
      [-65.5, -55.2]
    ]
  ],
  [
    [
      [-64.964892, -22.075862],
      [-64.377021, -22.798091],
      [-63.986838, -21.993644],
      [-62.846468, -22.034985],
      [-62.685057, -22.249029],
      [-60.846565, -23.880713],
      [-60.028966, -24.032796],
      [-58.807128, -24.771459],
      [-57.777217, -25.16234],
      [-57.63366, -25.603657],
      [-58.618174, -27.123719],
      [-57.60976, -27.395899],
      [-56.486702, -27.548499],
      [-55.695846, -27.387837],
      [-54.788795, -26.621786],
      [-54.625291, -25.739255],
      [-54.13005, -25.547639],
      [-53.628349, -26.124865],
      [-53.648735, -26.923473],
      [-54.490725, -27.474757],
      [-55.162286, -27.881915],
      [-56.2909, -28.852761],
      [-57.625133, -30.216295],
      [-57.874937, -31.016556],
      [-58.14244, -32.044504],
      [-58.132648, -33.040567],
      [-58.349611, -33.263189],
      [-58.427074, -33.909454],
      [-58.495442, -34.43149],
      [-57.22583, -35.288027],
      [-57.362359, -35.97739],
      [-56.737487, -36.413126],
      [-56.788285, -36.901572],
      [-57.749157, -38.183871],
      [-59.231857, -38.72022],
      [-61.237445, -38.928425],
      [-62.335957, -38.827707],
      [-62.125763, -39.424105],
      [-62.330531, -40.172586],
      [-62.145994, -40.676897],
      [-62.745803, -41.028761],
      [-63.770495, -41.166789],
      [-64.73209, -40.802677],
      [-65.118035, -41.064315],
      [-64.978561, -42.058001],
      [-64.303408, -42.359016],
      [-63.755948, -42.043687],
      [-63.458059, -42.563138],
      [-64.378804, -42.873558],
      [-65.181804, -43.495381],
      [-65.328823, -44.501366],
      [-65.565269, -45.036786],
      [-66.509966, -45.039628],
      [-67.293794, -45.551896],
      [-67.580546, -46.301773],
      [-66.597066, -47.033925],
      [-65.641027, -47.236135],
      [-65.985088, -48.133289],
      [-67.166179, -48.697337],
      [-67.816088, -49.869669],
      [-68.728745, -50.264218],
      [-69.138539, -50.73251],
      [-68.815561, -51.771104],
      [-68.149995, -52.349983],
      [-68.571545, -52.299444],
      [-69.498362, -52.142761],
      [-71.914804, -52.009022],
      [-72.329404, -51.425956],
      [-72.309974, -50.67701],
      [-72.975747, -50.74145],
      [-73.328051, -50.378785],
      [-73.415436, -49.318436],
      [-72.648247, -48.878618],
      [-72.331161, -48.244238],
      [-72.447355, -47.738533],
      [-71.917258, -46.884838],
      [-71.552009, -45.560733],
      [-71.659316, -44.973689],
      [-71.222779, -44.784243],
      [-71.329801, -44.407522],
      [-71.793623, -44.207172],
      [-71.464056, -43.787611],
      [-71.915424, -43.408565],
      [-72.148898, -42.254888],
      [-71.746804, -42.051386],
      [-71.915734, -40.832339],
      [-71.680761, -39.808164],
      [-71.413517, -38.916022],
      [-70.814664, -38.552995],
      [-71.118625, -37.576827],
      [-71.121881, -36.658124],
      [-70.364769, -36.005089],
      [-70.388049, -35.169688],
      [-69.817309, -34.193571],
      [-69.814777, -33.273886],
      [-70.074399, -33.09121],
      [-70.535069, -31.36501],
      [-69.919008, -30.336339],
      [-70.01355, -29.367923],
      [-69.65613, -28.459141],
      [-69.001235, -27.521214],
      [-68.295542, -26.89934],
      [-68.5948, -26.506909],
      [-68.386001, -26.185016],
      [-68.417653, -24.518555],
      [-67.328443, -24.025303],
      [-66.985234, -22.986349],
      [-67.106674, -22.735925],
      [-66.273339, -21.83231],
      [-64.964892, -22.075862]
    ]
  ]
]
```

Double ugh.

Imaging trying to traverse a GeoJSON file _filled_ with all that ugh? No, thank you.

## Jekyll to the rescue

I found a better workflow with Jekyll.

After a quick search I found a [GeoJSON file with all the countries](https://github.com/johan/world.geo.json). I regex'd it into yaml format and saved it to my `_data` folder ([in _this_ repository](https://github.com/katydecorah/geojson-weaver)) as [`countries.yml`](https://github.com/katydecorah/geojson-weaver/blob/gh-pages/_data/countries.yml). That will serve as a reference file; I don't need to touch it. Actually, Atom will barf if I try to open it, so it stays sealed tight.

Next, I created another file ([`leave.yml`](https://github.com/katydecorah/geojson-weaver/blob/gh-pages/_data/leave.yml)). This is the data that I want to weave in with the country data. For each country, I made sure to use the same exact country name found in `countries.yml` because later I'll evaluate the name to match the data up.

```yaml
- country: United States of America
  leave: 0
- country: Mexico
  leave: 12
```

I created a [Jekyll-ized JavaScript file](https://github.com/katydecorah/geojson-weaver/blob/gh-pages/country-data.js) to output the GeoJSON as a variable. Here's how I did it:

1. First, I looped through the countries data.
2. Inside that loop, I looped through my data file.
3. Inside that loop, I told Jekyll that I _only_ want results when the country name matches the country names in my data file.
4. I customized the feature properties based on my data and how they should look.

The code looks like this:

```js
{% raw %}var countryData = {
  "type": "FeatureCollection",
  "features": [{% for s in site.data.countries %}{% for x in site.data.leave %}{% if s.country == x.country %}
    {
      "type": "Feature",
      "properties": {
        "name": "{{s.country}}",
        "leave": {{x.leave}},
        "title": "{{s.country}}",
        "description": "Mothers receive {{x.leave}} weeks paid leave in {{s.country}}",
        "fill": "{% if x.leave == 0 %}#fff{% elsif x.leave <= 26 %}#aad8f1{% elsif x.leave <= 52 %}#4bc6df{% elsif x.leave >= 52.1 %}#197caa{% endif %}"
      },
      "geometry": {
        "type": "{{s.type}}",
        "coordinates": {{s.coordinates}}
      }
    },{% endif %}{% endfor %}{% endfor %}
  ]
};{% endraw %}
```

And [here's what it looks like](https://katydecorah.com/geojson-weaver/country-data.js) once Jekyll gobbles it up and spits it out. Now I can [load that GeoJSON on a map](https://katydecorah.com/geojson-weaver/)!

The workflow ends up being painless. I can make updates to my data file and once Jekyll runs, my map updates. Also, I followed the same process with state data that I got from Mapbox, so I can do some state shape and data matchmaking.

[Check out repository with all the files, data, and fun.](https://github.com/katydecorah/geojson-weaver) And, hey, guess what! I wrote about building a GeoJSON file with Jekyll before &mdash; [Jekyll and GeoJSON](/code/jekyll-geojson/).
