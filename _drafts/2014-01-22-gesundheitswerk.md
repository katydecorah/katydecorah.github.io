---
published: false
---

I saw this great Dribble shot of a simple logo. The thing that caught my eye was the absense of the bottom-right corner. I needed to try this out. 

## .gesund
The project is a single element, using `.gesund`, as the gray square. The `:after` element is the circle and the `:before` camouflages the bottom-right corner.

## :after
The `:after` is a circle, with slightly larger dimension than the parent element. It's absolutely positioned and is stuck to the top-most left-most corner of the parent. To keep consistant with the design and for future color changes, I set the `background-color: $bg`. With some [handy work](http://css-tricks.com/transparent-borders-with-background-clip/), I made the border transparent using `background-clip: padding;`. For a while, I didn't understand why `background-clip` wasn't working for me, until I realized that I was using `background` instead of `background-color`. Once I made the switch, `background-clip` worked.

## :before
The `:before` is the keystone piece. This pseudo element is a triangle that fits every so delicately in the crook of bottom-right corner of `.gesund`. I carefully and thoughtfully tweaked the `border-width`, `top`, and `left` based on `$size`, to make the project scalable.

Once I got the triangle in place, I had to consider its coloring and stacking order.

### Coloring
It took me several over thinking Sass-color-functions-what-are-you-why-are-you-doing moments, to realize that coloring this damn triangle is actually way more simple. The triangle needs to be colored with the body background color, or `$bg`. The triangle provides a buffer atop the gray `.gesund` to allow the circular border of `:after` to rgba itself the same color upon the triangle as it does on the body background.

### Stacking
The triangle is stacked below `:after`, but above `.gesund`. Think of `:before` as the meat in this project party sandwich.

This the the natural stacking order of pseudo elements with its parent element. ??? Originally, I flip flopped the pseudos, which required me to use `z-index` to make the elements fall into the stacking order that I wanted. As I was typing this post, I realized that I could save myself a few `z-index` rules and rename the pseudo elements to fall into natural stacking order.

## Neato Burrito Feature
Try adding a `z-index` to `:before`. You will be presented with a fun new take on the project and $100 dollars.

And thanks to college German for understanding the title of the Dribbble shot. Jawohl!