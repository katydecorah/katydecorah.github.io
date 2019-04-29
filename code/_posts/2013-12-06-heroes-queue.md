---
title: Heroes Queue by Antonas Deduchovas
tags:
  - Sass
  - Dribbble
  - CodePen
  - Google Sheets
image: http://codepen.io/katydecorah/pen/cJfhC/image/large.png
pen: cJfhC
dribbble: http://drbl.in/jzgO
---

<p data-height="350" data-theme-id="97" data-slug-hash="cJfhC" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/cJfhC'>Heroes Queue by Antonas Deduchovas</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>

I love trying to find different ways to get a job done. Especially when it means using a certain piece of technology in an unexpected way. Maybe the job is silly, but it's the problem solving that I really, truly dig.

At first glance, I knew I wanted to somehow play around with the Dribbble shot [Heroes Queue by Antonas Deduchovas](http://drbl.in/jzgO) and I was definitely thinking single element for each character, but with tons of `box-shadow`. But, I also knew that I didn’t want to do the grunt work. So I opened up a spreadsheet in Google Drive.

## Google spreadsheets to the rescue

In a new spreadsheet, I resized the rows and columns to 25 and turned word text off. Now I had a grid, unscathed by lengthy text. I opened the shot in Photoshop and added a grid to closely match each bit of the image.

## Format > Conditional formatting

Before this project, I had known about a cool feature in Google Spreadsheets, _conditional formatting_. You can set conditions in the spreadsheet to style a cell based on a string or digit. When the condition is matched, then the background color or font color of that cell will change according to your rule.

{% include img.html src='2013-12-06-heroes-queue-0.png' alt='Conditional Formatting' class='img-half' %}

## Variables as conditions

I set up my color variables as conditional formatting. For example, in any cell that had `$bg`, the condition called for that cell to be the background color I selected. I added more rules for other variables such as `$red`, `$face`, and `$shirt`. This step isn’t necessary, but it improves the experience.

## Writing out the characters

With one eye in Photoshop and another in Google Drive, I started typing my variables into the spreadsheet. As I entered a variable that matched a condition, the background instantly changed. It only took a few minutes to assign a color variable to each cell. Plus, spreadsheets allow for mass select and paste, it was a snap.

I ended up creating each character on a 26&times;26 grid or in spreadsheet terms A1:Z26. This grid size came in handy later when concocting the formula.

{% include img.html src='2013-12-06-heroes-queue-1.png' alt='batman' class='img-half' %}

You might notice that I didn’t need to include `$bg`. I could have left those cells blank, because in the end I’m just going to ignore those cells because the `body` background can make up for it. I’m a visual person, so putting those values in worked for me.

## arrayFormula()

Once I had the character ready, it was time for formula magic to output my `box-shadow` values.

    =ArrayFormula(if(A1:Z26<>"$bg","("&column(A1:Z1) -1 &" * $width) (" & ROW(A1:Z26) -1  &" * $width) 0 0 "&A1:Z26&",",""))

I entered this formula in the first cell after the last column, AA:1. This formula went through A1:Z26 and transposed all the cell data, but I carefully defined the output so that each cell declares its own `box-shadow` value.

The formula does the following:

- If any cell within A1:Z26 doesn't equal “`$bg`”, then reformat the cell, but if it does then do “” (create a blank cell — so yes, the variable is superfluous as stated before).
- To reformat the cell, as seen in the second set of double quotes, each permitted cell generates the following `box-shadow` values `<offset-x> <offset-y> <blur-radius> <color>,`. Each cell dynamically adjusts the `offset-x` and `offset-y` values of the shadow according to its position in the spreadsheet. I set the `blur-radius` to 0 and used the existing cell data for the `color` of the shadow.

Initially, I had used static values, for example: `9em 0em 0 $red,`, but that meant I couldn't scale the character because this was based on 1em. Instead, I made the values relative: `(9 * $width) (0 * $width) 0 $red,`. Now whenever I adjust the `$width` the character will stay in perfect proportion.

## Gimme all the box-shadows

Once I entered the formula into cell AA:1, the character was automatically transposed into `box-shadow` values. From there I selected all AA1:AZ26 cells, copied, and pasted as the value of `box-shadow:` into my CSS. And done!

Feel free to [check out the spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0AvJ6mdPETci9dEtZak04VzU2UEFqeXZ3V2hIdGtrWXc&usp=sharing) that I used to create these characters.

(I highlighted AA1 to show that that cell holds the formula.)

{% include img.html src='2013-12-06-heroes-queue-2.png' alt='Batman with values' class='img-half' %}

When I pasted the code it had some undesirable spaces and returns, but I quickly regex replaced that sucker into a dreamy column.

{% include img.html src='2013-12-06-heroes-queue-3.png' alt='Batman Straight Values' class='img-half' %}

## Phat code

This code is heavy. So heavy. I know it’s irresponsible for every day wear, but it’s fun and this is one of my favorite ways to learn new things. I spend my work days creating web-based trainings that must be pristine in IE7. For that reason, I crave projects that push boundaries.

### p.s.

I tried to get the same animation in the Dribbble shot with the characters bouncing up and down. Unfortunately, the animation didn't take too kindly to all the values. It rendered a trippy, slapping of box-shadows, that was sure to melt a computer into liquid, Alex Mack style. I settled with a hover, so did you hover?
