---
layout: post
title: Leadership Letters by Jeroen van Eerden
category: code
tags:
- CodePen
- Haml
- Sass
- border
- animation
- dribbble
image: http://farm8.staticflickr.com/7083/13157662535_270504e7a3_o.png
pen: htBka
dribbble: http://drbl.in/ktXg
---
<figure>
<p data-height="350" data-theme-id="97" data-slug-hash="htBka" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/htBka'>Leadership Letters #2. by Jeroen van Eerden</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption><a href="http://drbl.in/ktXg">Leadership Letters #2. by Jeroen van Eerden</a></figcaption>
</figure>

I recreated [Leadership Letters #2. by Jeroen van Eerden](http://drbl.in/ktXg) using Hugo Giraudel's [items in a circle](http://hugogiraudel.com/2013/04/02/items-on-circle/) Sass mixin and generous use of the `border` property.

## Border control

The project has eight block elements, `.item`, nested in a container. Each `.item` is the letter `L`. (In my first commit I totally wrote that it was the number '7', re: title.) To get the shape, I assigned the top and right `border-color` colors, while I gave the bottom and left `border-color` transparent values.

<figure>
<p data-height="300" data-theme-id="5127" data-slug-hash="b113f096098c45121f65a78adc5f8af6" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/b113f096098c45121f65a78adc5f8af6'>Leadership Letters demo 1</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Creating the shape with border</figcaption>
</figure>

At first, I didn't use the bottom or left borders at all. Instead, I used `box-shadow` to cast a white lip around the broadside of each element providing space between each `.item`. By doing that I had to increment the `z-index` to keep each element's noise underneath the previous. Unfortunately, the first element in the z-index stack was then on top of the last element. I scratched my head for a while, until I removed the `box-shadow` and clipped each element's nose with a transparent left border.

Two cheers for simple code.

## Circling

Next, I needed to get each `.item` on a circle and rotated about 45 degrees to achieve the cascading effect. I tweaked the *items on a circle* mixin until each element fell into place. I've used the mixin before, but I must not have examined the code. I didn't realize that you can assign more than one `rotate` values in one `transform` rule. (I learned something new today */air guitar/*). 

{% highlight css %}
transform: rotate(0deg) translate(0.875em) rotate(45deg);
{% endhighlight %}

Using the two rotates, I balanced out the items onto the circle and then locked them into position.

## :nth-of-what

I used `:nth-of-type` to alternate the colors of my Sass list, `$colors`. I thought I had the `:nth` selector game figured out, but it took me a few tries to alternate the colors among the items.

{% highlight css %}
:nth-of-type(4n + 2)
:nth-of-type(4n + 3)
:nth-of-type(4n + 4)
{% endhighlight %}

The above will then compute as:

* 4 (0) + 2 = 2, 4 (1) + 2 = 6
* 4 (0) + 3 = 3, 4 (1) + 3 = 7
* 4 (0) + 4 = 4, 4 (1) + 4 = 8

(I think that this makes sense to me. Hi, I'm insecure about `:nth`.)

The first and fifth elements take the initial style from `.item`. 

## Border animation

Once I had the project built out, I started playing around with a few of the properties. I found that by increasing the `border-bottom-width` each element would appear to tuck its tail in, which created a beautiful inner circle. I added an animation to bounce from sharp edges to smooth edges to capture all the shapes.