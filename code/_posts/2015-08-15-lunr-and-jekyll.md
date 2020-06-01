---
title: lunr.js and Jekyll
image: 2015-08-15-lunr-and-jekyll-0.png
tags:
  - Jekyll
  - JavaScript
---

I recently spent some time hooking up a Jekyll site with [lunr.js](http://lunrjs.com/). Lunr.js is a full text client-side search engine and it works rather well. It took me a few tries to understand how lunr works and then translate that into a Jekyll site ([I had some help from this post](http://matthewdaly.co.uk/blog/2015/04/18/how-i-added-search-to-my-site-with-lunr-dot-js/)) so here's a walk through of I how got it all connected.

I also built a live demo with my site: [{{site.url}}/search](/search/)

## Tell lunr all about your fields

I started off by creating a file called, [lunr-feed.js](https://github.com/katydecorah/katydecorah.github.io/blob/master/js/lunr-feed.js) and adding front matter since I'll be using logic to loop through my posts.

Next, I declared fields to describe my data (and by data I mean my posts). I can customize the field names, but it's important to keep the `id` field (this acts like a unique identifier). I can also add a boost to each field. A boost tells lunr that I want it to favor this field _that_ much more in the context of searching. In my case, I wanted lunr to focus on the content of my posts, so I applied a boost to that field.

```js
var index = lunr(function () {
  this.field("title");
  this.field("content", { boost: 10 });
  this.field("category");
  this.field("tags");
  this.ref("id");
});
```

## Now give lunr your data

Next, I gave lunr my data. This is the data that I want lunr to search and it corresponds with the fields that I defined above. And to keep my data straight, I increment a `count` to build the `id` as my unique identifier for each post.

```js
{% raw %}{% assign count = 0 %}
{% for post in site.posts %}
  index.add({
    title: {{post.title | jsonify}},
    content: {{post.content | strip_html | jsonify}},
    category: {{post.category | jsonify}},
    tags: {{post.tags | jsonify}},
    id: {{count}}
  });
  {% assign count = count | plus: 1 %}
{% endfor %}{% endraw %}
```

By adding my fields and data, lunr passes it through its pipeline, processes the data, and builds an object that I'll query later.

## Build a data reference for lunr

To complement the data that I gave to lunr, I created an object that has basic information about each post. This is so I can reference it against lunr's search results because lunr returns the reference `id` as a search result and _not_ all the data I gave it.

```js
{% raw %}var store = [{% for post in site.posts %}{
  'title': {{post.title | jsonify}},
  'link': {{ post.url | jsonify }},
  'image': {{ post.image | jsonify }},
  'date': {{ post.date | date: '%B %-d, %Y' | jsonify }},
  'category': {{ post.category | jsonify }},
  'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
  }{% unless forloop.last %},{% endunless %}{% endfor %}
];{% endraw %}
```

## Query lunr and the match results

Finally, it's time to query lunr aka query that `index` object lunr created from my fields and data. Lunr returns `id` numbers as search results (in order of most relevant) and then I use that `id` as an index number for my `store` object so I can output details about each search result.

```js
$(document).ready(function () {
  $("input#search").on("keyup", function () {
    var resultdiv = $("#results");
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem =
        '<div class="result"><a href="' +
        store[ref].link +
        '" class="post-title">' +
        store[ref].title +
        '</a> <div class="post-date small">' +
        store[ref].category +
        " &times; " +
        store[ref].date +
        "<div><p>" +
        store[ref].excerpt +
        "</p></div>";
      resultdiv.append(searchitem);
    }
  });
});
```

## Now search

And that's how I brought lunr.js to Jekyll. You can add some fun stuff, like the number of search results or even play around with lunr's options to really customize the search.

- Documentation: [lunr.js](http://lunrjs.com/)
- Demo: [{{site.url}}/search](/search/)
- Code: [lunr-feed.js](https://github.com/katydecorah/katydecorah.github.io/blob/master/js/lunr-feed.js)
- Live file: [lunr-feed.js](/js/lunr-feed.js)
