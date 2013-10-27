---
published: false
---

As I was building [Navigation Bar by Jan Kaděra](), I haphazardly designed the sides of each button. I remember thinking, "Ack! This is not the smart way!" To make good on that thought, I decided to figure out the "smart way."

So let's learn how to create dimenional sides on an element, but let's make that element a part of an organism.

## Xylophone!

![xylophone inspiration](/http://2.bp.blogspot.com/_KFzj9M-mLDA/TDva0USnUaI/AAAAAAAAALg/qCekvdrOet8/s1600/xylophone.jpg)

Using a Google sourced image of the children's toy version, I set to work. I laid out my goals. I wanted the outcome to look exactly like the toy, but I also wanted it to be scalable and flexible. If I want to add extra keys, let it. If I want to fatten the keys, let it. If I want to change the colors, let it.

## Markup

Easy part of the project. Parent div `.xylophone` with 8 (as a starting point) children divs `.keys`.

## Styles

Each key is styled similiarly, where its pseudo elements create sides making the key dimensional. Using a Sass loop, I am able to proportionally adjust the size, positioning, and color of the keys.

The first key creates is primary in deciding the size and positioning of the following keys. The keys are centered vertically based on the size of the first key.

The last key controls the positioning of the support beams that connect the keys onto the xylophone.