---
layout: post
title: Forebruary
category: coding
tags: Sass, CodePen, JavaScript
---

A few days ago I saw [Forebruary](http://ilyabirman.net/projects/forebruary/); a calendar that doesn't need replacing! Naturally, I needed to figure this out, CodePen style.

I wrote the HTML in HAML. My main goal was to generate the numbers on the calendar efficiently. It took a some research, but I figured out how to use case statements. I have a feeling there is a better way to increment the numbers in each row, but I haven't arrived at it yet.

Once I had everything styled, I tackled the position of the frame. The frame slides to indicate the entire month. The last two columns, highlighted in red, are the weekends. I knew I needed to find out today's date (to understand the current month) and which day of the week the first day of the month starts. I found [JavaScript to find the first day of the month](http://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery) for any given month or the current month. 

Once I had the value for the first day of the month, I was set. August starts on a Thursday, or day of the week number 4 (remember the week starts on Monday). So for any month that begins on a Thursday it will have the same starting position. I just needed to absolutely position the frame for each day of the week. I found the position by manually adjusting the numbers. I created if statements to compare the values to move the frame accordingly. 

Next month the frame should automatically slide to represent September.

<p data-height="500" data-theme-id="97" data-slug-hash="Chmws" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/Chmws'>Forebruary</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>
