---
published: false
---

<p data-height="324" data-theme-id="97" data-slug-hash="vrzmH" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/vrzmH'>Simple Box</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

The `.box` is a single element. The main element styles the top of the box. When I first started, I wanted the main element to style the left panel. I think that was knee jerk reaction for moving left to right. However, you will find that styling a single element box is much easier, when the main element is the top.

After I rotated `.box` 45 degrees and skewed it -15deg for both x and y, I had the top of the box. The psuedo elements, `:before` and `:after` will create the left and right panels.

<p data-height="292" data-theme-id="97" data-slug-hash="8707388727c57ea3ff8ce3bc42af5f56" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/8707388727c57ea3ff8ce3bc42af5f56'>Simple Box, 1</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I styled the psuedos with the same dimension as the top:

	&:before, &:after {
    	content:"";
    	position:absolute;
    	width:$boxSize;
    	height:$boxSize;
        background:red; // just for testing
  	}
 
I was curious where the `:before` and `:after` would lay before I started transforming them individually, so I gave them a red background.

<p data-height="268" data-theme-id="97" data-slug-hash="1ef155d2126eb89a515ed9873dc1b722" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/1ef155d2126eb89a515ed9873dc1b722'>Simple Box, 2</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

Without any transforms `:before` and `:after` will assume the transforms of the main element. So in this case, I just created a stack. To get each side in place I need to skew each pseudo element 45deg and then translate it into place.

	.box {
    	...
        &:before {
    		@include transform(skew(45deg,0) translate($boxSize / -2,$boxSize - 0.025));
    		background:lighten(adjust-hue($mainColor,3),5%);
  		}
  		&:after {
    		@include transform(skew(0,45deg) translate($boxSize - 0.025, $boxSize / -2));
    		background:lighten(adjust-hue($mainColor,1),5%);
  		}
      }

I translated each side relative to the size of the box, making the box scalable. If you adjust the `$boxSize` variable, the box will happily adjust to your liking. You will also notice a slight adjustment of `0.025`. I found that the sides did not match exactly how I liked them, so I added that small adjustment.

I also adjusted the background to take the $mainColor, adjust the hue and lighten slightly to add dimension to the box.

