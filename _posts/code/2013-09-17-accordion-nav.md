---
layout: post
title: Accordion nav
category: code
tags:
- CodePen
- no JS
- Haml
- Sass
image: http://codepen.io/katydecorah/pen/kEuwC/image/large.png
redirect_from: /code/2013/09/17/accordion-nav/
---


<p data-height="500" data-theme-id="97" data-slug-hash="kEuwC" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/kEuwC'>Accordion Nav</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

This is very typical list-style navigation, in that the dropdown/accordion effect is a nested list.

I think what made the effect successful was dividing the responsibilities of the navigation among the elements. Each list item has an anchor tag, naturally, but I made sure that the majority of the physical design was styled in the anchor tags. The actual list items handle more of the function.

For instance, each li element on hover will release the dropdown. This made sure that as I hovered into the dropdown, it didn't slide back up. Had I put event on the anchor tags, once I hover off of the parent and onto the children, the dropdown would slide back up.

Likewise, I styled the anchor tags to make sure the styles didn't intrude on the effect when the dropdown was activated. Had I styled the background of the li elements, when hovered the dropdown would be hugged by the color of the list-item's parent.

The overall effect of the accordion is achieved by skewing the list items, but I also made the overflow hidden when the dropdown is inactive. Otherwise my text from the inactive dropdown would be sitting all squished and weird for the world to see.

I'm really happy that so many people enjoyed this one!