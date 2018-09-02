---
layout: post
title: Combination lock
category: code
tags:
- Sass
- jQuery
- Haml
pen: CLxkg
image: http://farm3.staticflickr.com/2838/12730513903_cd54d30d25_o.png
project: true
redirect_from: /code/2013/04/19/combination-lock/

---

<p data-height="550" data-theme-id="97" data-slug-hash="CLxkg" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/CLxkg'>Combination Lock</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I created a functioning combination lock.

I provided the combination, but you need to resize your browser window to spin the dial. Don't forget you spin right, left (pass the number once), and right again. (It's much easier on CodePen and if you start with your browser relatively narrow.)

Every aspect was a challenge, but I loved it.

I wrote the HTML in Haml, for the heck of it. I wanted to output the numbers without having to do it manually. It was cool figuring it out. I'm sure there is a more efficient way, but I'm still happily exploring.

I used Hugo Giraudel's [mixin for putting items in a circle](http://hugogiraudel.com/2013/04/02/items-on-circle/) to position all the numbers. I think the trickiest part of the CSS was getting the gradients and shadows to look authentic. I did a lot of adjusting, experimenting, and asking the opinion of others before I settled on my recipe.

The jQuery was gnarly. I needed to know the width of the user's browser at the start. From that value and the width of the lock, I created a specific ratio to be sure that the dial would spin proportionally. I calculated when the browser width would coincide with each combination number and added classes to the body to indicate when a success. Writing the jQuery took a lot of guessing, scribbling, and high school formulas, but I got it!
