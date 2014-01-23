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

Once I got the triangle in place, I had to consider its stacking order and coloring. Looking at it know, it's dead obvious that the `border-color` should use `$bg`, but for whatever reason it took me a few guess and checking until I arrived at that answer. The triangle is stacked below `:after`, but above `.gesund`. It is the meat in the project party sandwich. Triangle's purpose is to provide a buffer between the color of `.gesund` and to provide the same transparency of the `:after` border as it kisses the background of the page.

To achieve the same mixing of color, triangle uses `$bg`.

## Neato Burrito Feature
Try removing the `z-index` on `:before`. You will be presented with a fun new take on the project and $100 dollars. 

And thanks to college German for understanding the title of the Dribbble shot. Jawohl! 