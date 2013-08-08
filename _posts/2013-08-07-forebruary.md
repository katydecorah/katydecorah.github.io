---
layout: post
title: Forebruary
category: coding
tags: Sass, CodePen, JavaScript
---

A few days ago I saw this calendar [Forebruary](http://ilyabirman.net/projects/forebruary/). A calendar that doesn't need replacing! So naturally, I needed to figure this out - CodePen style.

I wrote the HTML in HAML. I wanted to print out the numbers with little effort. It took a some research, but I figured out how to use case statements. Very cool stuff.

Once I had everything styled, I tackled the position of the frame. The frame slides to indicate the entire month. That last two columns, highlighted in red, are the weekends. So I knew I needed to find out today's date (to understand the current month) and the day of the week that the first day in the month starts. August starts on a Thursday, or day of the week number 4 (remember the week starts on Monday). I [found JavaScript to discover the first day of the month](http://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery). Once I had that value, I was set. I just needed to find the position left for each frame for each day of the week. I did this by manually adjusted the numbers. I created if statements to compare the values to be able to move the frame accordingly.


<p data-height="500" data-theme-id="97" data-slug-hash="Chmws" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/Chmws'>Forebruary</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>
