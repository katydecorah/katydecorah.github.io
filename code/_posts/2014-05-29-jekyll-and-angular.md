---
title: Jekyll and AngularJS

tags:
  - Jekyll
  - AngularJS
  - CodePen
pen: LqbjG
image: 2014-05-29-jekyll-and-angular-0.png
---

I'm a total AngularJS rube, so it took me a few tries to get Angular to work on a Jekyll site. Since both use `{% raw %}{{ curly brackets }}{% endraw %}`, Jekyll will gobble up the brackets first. (And none for AngularJS.)

After some digging, I found [this Fiddle](http://jsfiddle.net/Bvc62/3/) and I learned about Angular's [interpolate provider](https://docs.angularjs.org/api/ng/provider/$interpolateProvider).

Interpolate provider will allow you to swap curly brackets for different characters.

<p data-height="300" data-slug-hash="LqbjG" data-default-tab="result" class='codepen'>See the Pen Angular Interpolate Provider Example by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
