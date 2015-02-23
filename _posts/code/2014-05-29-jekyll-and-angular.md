---
layout: post
title: Jekyll and Angular
category: code
tags:
 - CodePen
 - AngularJS
pen: LqbjG
image: https://farm6.staticflickr.com/5157/14278201486_25b78eef45_o.png
---

I'm a total AngularJS rube, so it took me a few tries to get Angular to work on a Jekyll site. Since both use `{% raw %}{{ curly brackets }}{% endraw %}`, Jekyll will gobble up the brackets first. (And none for AngularJS.)

After some digging, I found [this Fiddle](http://jsfiddle.net/Bvc62/3/) and I learned about Angular's [interpolate provider](https://docs.angularjs.org/api/ng/provider/$interpolateProvider).

Interpolate provider will allow you to swap curly brackets for different characters.

I created an example below.

<p data-height="300" data-theme-id="6389" data-slug-hash="LqbjG" data-default-tab="result" class='codepen'>See the Pen Angular Interpolate Provider Example by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>