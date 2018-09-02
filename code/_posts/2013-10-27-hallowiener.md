---
layout: post
title: Hallowiener by Bobby McKenna
category: code
tags:
  - Sass
  - Haml
pen: qpoFv
image: http://codepen.io/katydecorah/pen/qpoFv/image/large.png
redirect_from: /code/2013/10/27/hallowiener/

---


<p data-height="400" data-theme-id="97" data-slug-hash="qpoFv" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/qpoFv'>Hallowiener by Bobby McKenna</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

Another Dribbble shot turned code. Hover for zombification.

Dribbble shot [Hallowiener by Bobby McKenna](http://dribbble.com/shots/1286749).

This was also slightly inspired by [Apple Mice By Josh Bader](http://codepen.io/joshbader/pen/fKjra). I loved his graceful transitions between each mouse, which made the experience more of a metamorphosis.

When creating a metamorphosis, I recommend building the result or hover state first.

In this case, I started with the zombie face. Once I had the zombie face, I copied all of the styles and pasted them under the hover state for the `.head` element. At this point, when I hovered on the head I saw no difference, because it was a zombie face hovering to zombie face.

Next, I needed to make the normal state the normal face. To do this, I carefully adjusted the styles of the normal state. I tried to be consistant among elements with styling to make smoother transitions. If there was an element that appeared in one state, but was removed from the next, I tried to use `opacity` instead of `display:none`. I've found that opacity will usually give you a more pleasant transition.

Lastly, I `*` styled a transition to allow all of the elements to glide into zombie mode when hovered. I also tried to remove redundant code from the normal and hover states where possible.

(My code could be cleaner, but I didn't feel like being picky on a fun Pen.)
