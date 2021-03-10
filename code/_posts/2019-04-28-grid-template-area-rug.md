---
title: grid-template-area-rug
image: 2019-04-27-grid-template-area-rug-3.png

codepen: true
tags:
  - CodePen
  - CSS
  - Haml
  - JavaScript
  - Google Sheets
---

Inspired by a recent [tile](https://www.instagram.com/p/BTO9mu0gQm6/) [search](https://www.instagram.com/p/BV7hx9blq19/), I set out to create a tiled floor pattern with CSS grid. Thanks to helpful examples on [Grid by Example](https://gridbyexample.com/examples/example11/) by [Rachel Andrew](https://rachelandrew.co.uk/), I tried [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas).

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="html,result" data-user="katydecorah" data-slug-hash="52ce7749ea720096a510e91790fe3c1f" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="grid-template-area-rug">
  <span>See the Pen <a href="https://codepen.io/katydecorah/pen/52ce7749ea720096a510e91790fe3c1f/">
  grid-template-area-rug</a> by Katy DeCorah (<a href="https://codepen.io/katydecorah">@katydecorah</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

With `grid-template-areas` you can assign a `grid-area` to elements you want to manipulate in the grid. Then you call the `grid-area` in the `grid-template-areas` in the exact order you want the elements to appear.

## Draw the pattern

I decided to see how far I could push the boundaries of `grid-areas`. Taking tool inspiration from [Heroes Queue](/code/heroes-queue/), I created a 57 x 57 grid in Google Sheets by resizing the rows and columns.

My ink was the formula `= "r" & ROW() & "c" & COLUMN()` which assigned a unique value to each cell. I also used a conditional formatting rule to turn any cell that began with `r` to black. To denote whitespace, I entered a period `.` which came in handy later.

<div class="photos">
{% include img.html src="2019-04-29-grid-template-area-rug.png" alt="Google spreadsheet pattern" width="2114" height="1444" %}
</div>

You can take a look at the [tile spreadsheet](https://docs.google.com/spreadsheets/d/1NsGr-rOQhd-XCAauMp6gq_YofqHrwaizk9f8z6AO4k8/edit?usp=sharing) I used for this project.

## Translate the pattern

Next, I created a script (`Tools` > `Script editor`) to generate the code in Google Sheets. The script:

1. Reads all rows and columns in my active sheet.
2. Breaks the rows into chunks (multiples of 14) since I found 14 to be the limit for `grid-template-areas`.
3. Generates CSS.
4. Generates Haml.
5. Displays the generated code in a sidebar in Google Sheets.

When I ran the script from the Script editor, the sidebar appears in the sheet with the code that I copied and pasted.

<div class="photos">
{% include img.html src="2019-04-27-grid-template-area-rug-3.png" alt="generated code in a sidebar in Google Sheets" width="2114" height="1444" %}
</div>

Since there isn't a straightforward way to share the script and I'm not really up for making this into an official Sheets add-on, I added the script to the JavaScript window of the CodePen.

## Closer look at code

The compiled HTML includes a div for each tile and each tile is assigned a unique `grid-area` using the row and column values from the spreadsheet.

```html
<div class="tiles">
  <div class="tile" style="grid-area: r1c1"></div>
  <div class="tile" style="grid-area: r1c57"></div>
  <div class="tile" style="grid-area: r2c2"></div>
  ...
</div>
```

Then using `grid-template-areas`, I called each `.tile` by its `grid-area` name exactly where I wanted it to appear in each row. Remember that period `.` for the whitespace? In `grid-template-areas` a period denotes an empty track which kept my whitespace intact.

```css
.tiles-0 {
  grid-template-areas:
    "r1c1  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . r1c57"
    ". r2c2  r2c3  r2c4  r2c5  r2c6  r2c7  r2c8  r2c9  r2c10 r2c11 r2c12 r2c13 r2c14 r2c15 r2c16 r2c17 r2c18 r2c19 r2c20 r2c21 r2c22 r2c23 r2c24 r2c25 r2c26 r2c27 r2c28 r2c29 r2c30 r2c31 r2c32 r2c33 r2c34 r2c35 r2c36 r2c37 r2c38 r2c39 r2c40 r2c41 r2c42 r2c43 r2c44 r2c45 r2c46 r2c47 r2c48 r2c49 r2c50 r2c51 r2c52 r2c53 r2c54 r2c55 r2c56 ."
    ". r3c2  . r3c4  . r3c6  . r3c8  . r3c10 . r3c12 . r3c14 . r3c16 . r3c18 . r3c20 . r3c22 . r3c24 . r3c26 . r3c28 . r3c30 . r3c32 . r3c34 . r3c36 . r3c38 . r3c40 . r3c42 . r3c44 . r3c46 . r3c48 . r3c50 . r3c52 . r3c54 . r3c56 .";
}
```

The CSS above is the first three rows of the floor. You can see the pattern of alternating whitespace `.` and tiles:

<div class="photos">
{% include img.html src="2019-04-27-grid-template-area-rug-2.png" alt="First three rows of the Google spreadsheet" width="1227" height="93" %}
</div>

## Style the grid

Finally, I used CSS to add background color to `.tile` which turned all the tiles (except for the whitespace) to the color of my choosing.

This project was a silly project, but I loved learning more about CSS grid and, unexpectedly, learning how to create sidebars in Google Sheets.

## More patterns

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="html,result" data-user="katydecorah" data-slug-hash="pBBEdN" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="grid-template-area-rug, 2">
  <span>See the Pen <a href="https://codepen.io/katydecorah/pen/pBBEdN/">
  grid-template-area-rug, 2</a> by Katy DeCorah (<a href="https://codepen.io/katydecorah">@katydecorah</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
