---
title: From Haml to Yaml

tags:
  - Jekyll
  - AngularJS
image: https://farm6.staticflickr.com/5157/14278201486_25b78eef45_o.png
redirect_from: /code/2014/12/30/from-haml-to-yaml/
---

Way back in May, I built a pen based on [MDN's article](https://developer.mozilla.org/en-US/docs/Web/CSS/length) to visualize and compare all CSS lengths. Here's the original pen:

<p data-height="400" data-theme-id="97" data-slug-hash="8e1abeef024e776dc485e94b081d74db" data-default-tab="result" data-user="katydecorah" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/8e1abeef024e776dc485e94b081d74db/'>CSS Units</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

To store each length name and metadata, I created a multidimensional array in Haml that I looped through. I did this so I could easily change the markup output. I also used AngularJS for the functionality: to update the inputs and to toggle the types.

## To Jekyll

I decided to create a Jekyll gh-pages repo and open up the tool there. I exported the CodePen and created a local Jekyll site. Once I organized the files, I refactored my code to [interpolate the AngularJS tags](/code/2014/05/29/jekyll-and-angular/).

At first I copied and pasted the compiled HTML, but I knew it was going to be a pain to make any markup changes. I ended up reformatting the Haml array to Yaml (via regex find and replace):

{% highlight yaml %}

- length: em
  type: font-relative
  description: This unit represents the calculated font-size of the element. If used on the font-size property itself, it represents the inherited font-size of the element.
  {% endhighlight %}

I saved the file into the Jekyll `_data` folder. Using a loop, I ran through each item and rebuilt markup output. [My code](https://github.com/katydecorah/css-ruler/blob/gh-pages/index.html) looks something like this:

{% highlight html %}{% raw %}
{% for item in site.data.lengths %}

<div class="example-container" data-toggle="popover" data-content="{{item.description}}" title="{{ item.length }}, {{item.type}}">
<div class="example" style="width: [[ unit ]]{{ item.length }}; height: [[ unit ]]{{ item.length }}" title="[[unit]]{{item.length}}"></div>
</div>
{% endfor %}
{% endraw %}{% endhighlight %}

To make content changes, I'll update the Yaml. To make layout changes, I'll update the HTML. Party :tada:.

## The CSS Ruler

Feast your eyes on the live [CSS Ruler]({{site.url}}/css-ruler/) or [jump into the code](https://github.com/katydecorah/css-ruler).

p.s. Uncheck _all_ the length types to unlock an Easter egg.
