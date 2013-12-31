---
published: false
---

I wanted to code out the Dribbble shot [END
by Catt](http://drbl.in/jJIr) as a single element, but I was presented with a couple challenges.

1. Give the ribbon tail a shadow, without adding extra elements.
2. Make the main element transform, without losing the stacking order.

## Give the ribbon tail a shadow

I first tried to create a triangle to create the shadow effect. It worked, but it didn't match up perfectly.

![Ribbon tail with triangles with opacity](https://dl.dropbox.com/s/tmyt5tl3hs36c5y/zindex-ribbon-triangle-op.png)

![Ribbon tail with triangles](https://dl.dropbox.com/s/33ijd9t5fgh0c6t/zindex-ribbon-triangle.png)

And then, it came to me&hellip; a trapezoid!

![Ribbon tail with trapezoids with opacity](https://dl.dropbox.com/s/epktfxr3eh7xceb/zindex-ribbon-trap-op.png)
![Ribbon tail with trapezoids](https://dl.dropbox.com/s/2l2v13jeytdi30c/zindex-ribbon-trap.png)

