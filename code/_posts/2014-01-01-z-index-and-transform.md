---
title: "z-index and transform"

tags:
  - Haml
  - Sass
  - Dribbble
  - CodePen
image: 2014-01-01-z-index-and-transform-0.png
pen: lqBtz
dribbble: http://drbl.in/jJIr
---

<p data-height="400" data-theme-id="97" data-slug-hash="lqBtz" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/lqBtz'>END by Catt</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I knew that I wanted to code out the Dribbble shot END by Catt as a single element. I planned on using the main element for the text and pseudo elements to create the tails of the ribbon.

{% include img.html src='2014-01-01-z-index-and-transform-0.png' alt='Ribbon diagram' class='img-half' %}

In making all of this happen, I was presented with of couple challenges.

1. Give the ribbon tail a shadow without adding extra elements.
2. Preserve the stacking order on transform.

## Give the ribbon tail a shadow

First, I created a triangle by manipulating the `border` properties to recreate the shadow effect of the ribbon. It worked, but it didn't match up perfectly.

{% include img.html src='2014-01-01-z-index-and-transform-1.png' alt='Ribbon tail with triangles with opacity' class='img-half' %}
{% include img.html src='2014-01-01-z-index-and-transform-2.png' alt='Ribbon tail with triangles' class='img-half' %}

And then, it came to me&hellip; a trapezoid!

{% include img.html src='2014-01-01-z-index-and-transform-3.png' alt='Ribbon tail with trapezoids with opacity' class='img-half' %}
{% include img.html src='2014-01-01-z-index-and-transform-4.png' alt='Ribbon tail with trapezoids' class='img-half' %}

The trapezoid fit perfectly. I also used a variable `$ribbonSize` to keep the ribbon tails in proportion with the shadow. In doing so, the ribbon became scalable!

## Preserve the stacking order on transform

Prior to this project, I noticed issues in preserving the stacking order, `z-index`, of elements once a `transform` is introduced. Until now, I didn't know how to remedy it, so I avoided it.

Once I added `transform` to the main element, the pseudo elements appeared to disregard the `z-index: -1` rule and sat on top of the main element.

{% include img.html src='2014-01-01-z-index-and-transform-5.png' alt='Ribbon transformed out of stacking order' class='img-half' %}

Through research, I dove into the situation of what takes place between stacking orders and transforms. I learned that once transformed, an element needs to play by 3D rules. Without specifying the `transform-style`, I was technically still in flat mode.

> If flattened, the children will not exist on their own in the 3D-space.
> <cite>-- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style">transform-style</a> by MDN</cite>

To allow the children to exist on their own, I needed to pepper in a couple more properties. First, I told my main element to `preserve-3d`.

{% highlight css %}
.ribbon {
...
transform-style: preserve-3d;
}
{% endhighlight %}

Next, I controlled the stacking order of the pseudo elements through `translateZ`. Think of `translateZ` as the 3D version of `z-index`.

{% highlight css %}
.ribbon {
...
transform-style: preserve-3d;
}
.ribbon:before, .ribbon:after {
...
transform: translateZ(-1em);
}
{% endhighlight %}

After adding these properties, my ribbon tails popped back into place behind the ribbon.

Below is a playground I created to test `translateZ`.

<p data-height="375" data-theme-id="97" data-slug-hash="lKkAF" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen z-index &amp; transform by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>
