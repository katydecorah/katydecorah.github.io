---
title: Rabbit by Beard Chicken

tags:
  - Sass
  - animation
  - Dribbble
  - CodePen
image: http://i.cdpn.io.s3.amazonaws.com/6362.uIEFy.bc2d5743-393d-4569-9887-20a32aed7fd0.png
pen: uIEFy
dribbble: http://dribbble.com/shots/1316513
---

<p data-height="500" data-theme-id="97" data-slug-hash="uIEFy" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/uIEFy'>Rabbit by Beard Chicken</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I built this fun little animation from [Beard Chicken's Dribbble shot](http://dribbble.com/shots/1316513). (The animation will only run a couple of times here, but on CodePen it's infinite&hellip; hypnotizing even.)

I used only two elements for this project by putting `box-shadow` to work.

The main element `.rabbit` is the rabbit's body. The `:before` is the tail, but then I used `box-shadow` to resize, recolor, and move the element's shadow into making the rabbit's eye. I added another `box-shadow` and made the rabbit's hind leg. Then I added a bunch of shadows to create the front leg.

Similarly, the rabbit's `:after` is one ear. By using `box-shadow`, I was able to create the second ear.

I created one cloud using pseudo elements, but then used `box-shadow` to display two more clouds.

## Spread-radius

The fourth value of `box-shadow` controls the size of the shadow, or `spread-radius`. Until today, I had severely under used this value.

{% highlight css %}
box-shadow: <offset-x> <offset-y> <blur-radius> <spread-radius> <color>
{% endhighlight %}

[More on box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

The `spread-radius` is optional, but the value is 0 unless specified. If the `spread-radius` is greater than 0, then the shadow will grow. If the `spread-radius` is less than 0, then the shadow will shrink. When shrinking the shadow, you have to use small units (especially in ems), otherwise the shadow will disappear.

So in the case of `.clouds`:

{% highlight css %}
.clouds {
...
box-shadow: 5em 2em 0 -0.3em white, -2em 2em 0 white;
}
{% endhighlight %}

The first `box-shadow` creates a copy of the element, but is moved to the right 5em and down 2em. I slightly shrunk the new cloud, using -0.3em for the `spread-radius`. Naturally, I set the color of the cloud to white. For the second `box-shadow`, I moved it to the left 2em and down 2em, but kept it the same size. I set the `blur-radius` to 0 for both shadows to avoid a blur and I receive a crisp cloud.

Getting the `@keyframes` just right took a bit of adjusting, but I loved how this rabbit came to life!
