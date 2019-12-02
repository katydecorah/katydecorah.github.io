---
title: Codevember - a currentColor practice
image: 2019-12-01-codevember.png
tags:
  - CSS
pen: eYYyvde
---

Last month I participated in [Codevember](http://codevember.xyz/), which is a challenge to code every day in November.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-user="katydecorah" data-slug-hash="eYYyvde" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="2019 Codevember">
  <span>See the Pen <a href="https://codepen.io/katydecorah/pen/eYYyvde">
  2019 Codevember</a> by Katy DeCorah (<a href="https://codepen.io/katydecorah">@katydecorah</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Set up

Before I started the challenge, I knew that I wanted to build a collection. To keep my collection consistent, I created a border CodePen that I referenced in each daily project:

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="css,result" data-user="katydecorah" data-slug-hash="oNNpBwo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="2019 Codevember - border">
  <span>See the Pen <a href="https://codepen.io/katydecorah/pen/oNNpBwo">
  2019 Codevember - border</a> by Katy DeCorah (<a href="https://codepen.io/katydecorah">@katydecorah</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Challenges

To keep myself challenged, I also decided to stay strict to:

- a color scheme `currentColor` and white.
- a single div.

Using `currentColor` afforded me flexibility in changing the color scheme, especially in adding a color picker to the first CodePen.

I did find that in Chrome, you need to trigger a repaint when switching currentColor on `background` and I was able to do so with:

```CSS
div,
div::before,
div::after {
  /* trigger repaint */
  outline: 1px solid;
  outline-offset: 51vmin;
}
```

The code looks inelegant, but was the best way I trigger a repaint without affecting the elements.

## Too much code

I'm glad I tried out Codevember, but I think this will be my first and last. Coding every day for a month is too much code. I also didn't have enough free time to visit projects made by other participants, which didn't make me feel as connected to the spirit of the challenge. I'm looking forward to next year's Codevember, where I'll be cheering from the sidelines.
