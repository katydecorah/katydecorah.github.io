---
layout: post
title: Ice Cream Pattern by Dorottya Porkolab
category: code
tags: 
  - CodePen
  - Sass
  - Dribbble
  - Haml
  - treats
pen: Bjoui
image: "http://codepen.io/katydecorah/pen/Bjoui/image/large.png"
published: true
dribbble: http://dribbble.com/shots/1294320-Ice-Cream-Pattern
---

<p data-height="500" data-theme-id="97" data-slug-hash="Bjoui" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/Bjoui'>Ice Cream Pattern by Dorottya Porkolab</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

Dribbble shot [Ice Cream Pattern by Dorottya Porkolab](http://dribbble.com/shots/1294320-Ice-Cream-Pattern)

For this pen, I made each ice cream a single element. I used `border-top` for the pink section, `border-bottom` for the green section, and background for the yellow section. The inner ice cream shadow is a `:before` and the stick is an `:after`.

I rotated the ice cream bars using the nth-child selector, but more specifically calling out odd and even. The odd and even ice creams have similar styling, but the odd is a reflection of the even. To acheive this, I only really had to swap around and lighten the shadows and on the odd ice creams. The trickiest part was adding just the right amount of margin to make the pattern look evenly spaced out.

I applied a width to the body to ensure that the pattern will stay inline. Then I hid the overflow to keep the pattern tight against the browser.

And then I made an animation on hover because it's Friday.

This pen was my pursuit in redemption after creating [this morbid pen](http://codepen.io/katydecorah/pen/Lkogi) yesterday in honor of Halloween.