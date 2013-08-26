---
layout: post
title: Haml Calendar
category: coding
tags: 
 - CodePen
 - Haml
 - Ruby
 - Sass
image: http://katydecorah.com/img/haml-calendar.png
---

I'm still new to Haml and Ruby, but I've really enjoyed what I've learned so far. I was looking through the Haml docs, when I found the ability to print out the date. My gears started spinning - why not create a calendar?

It took a lot of research, but I made a functioning Haml Calendar. I say functioning, because it will display the correct date and tomorrow it will automatically display tomorrow's date. You may also change the month, year, and day variables to display a specific date.

I used [these](http://dribbble.com/shots/1054042--Freebie-Calendar-Window?list=searches&tag=calendar) [shots](http://dribbble.com/shots/1054880-My-Birfday-Calendar) from Dribbble for layout and color inspiration.

## Starting out

The first step: print out today's date. Once I got that, I create variables for month, year, and day that default to today's date unless otherwise specified. I also created an array `@days` to hold the days of the week in the order I prefer.

I looped through `@days`, but I decided to only display the first letter of each day. I used a list because I always find them easy to style and they help keep my code organized.

    - @days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
	%ul.weekdays
      - @days.each do |i|
        %li.weekday
          = i[0]

Next I created a new list for the days of the calendar using a new loop:

	%ul.week
	  - (1...32).each do |i|
	    %li.day
	      = i

I started by printing 31 days (with the start of the month at Sunday for now). I styled the list items so that only 7 can fit in each row. The list items naturally fell into calendar order.

At this point I had a calendar, but it wasn't accurate. August begins on Thursday, not Sunday. I found that if I changed my loop, I could get "1" to start on Thursday `- (-3...32).each do |i|`. That works, except now Sunday reads as -3 and so forth. I added a few constraints:

	%ul.week
	  - (-3...32).each do |i|
	    %li.day
	      - if i > 0
	        = i

The items that are `i < 0` still exist, but they don't print a number. They create blank space allowing August to begin on Thursday.

It works, but it's not dynamic.

## Making it Dynamic

I wrote a new variable called `monthStart`. Using the date function along with my variables for month and year, I could get the day each month starts on. I wrote another variable to hash my `@days` array. By doing so I could find the position in the array my day starts on. So in the array, Thursday is hash 4, but my loop needs to start at -3 for the month to start on Thursday. I wrote down every day, its position in the array, and what number the loop needs to start on in order for the month to start on that day. From these findings, I created a formula. I take the negative of the hash and add 1.

	- monthStart = Date.new(year, month, 1).strftime("%a")
	- @days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
	- hashDays = Hash[@days.map.with_index.to_a]
	- monthStartNum = hashDays[monthStart]
	- adjustMonthStartNum = -monthStartNum + 1 

So I updated my loop:

	%ul.week
	  - (adjustMonthStartNum...32).each do |i|
	    %li.day
	      - if i > 0
	        = i

I changed my `month` variable to 9, to check September and it worked! However, September only has 30 days and I'm still printing out 31. 

I wrote another variable called `monthEnd`. This was easier than monthStart as I automatically receive an integer.

	- monthEnd = Integer(Date.new(year, month, -1).strftime("%d"))

I updated my loop once more (I add 1 to monthEnd here to make sure it gets the last day and not up until the last day of the month):

	%ul.week
	  - (adjustMonthStartNum...monthEnd + 1).each do |i|
	    %li.day
	      - if i > 0
	        = i

Yay! Dynamic!

I added a few more constraints when printing out the days to highlight today and to mute the days before today. I think I can write this more efficiently, but I'm ok with my progress so far.

If you edit in CodePen, try writing in a custom date, I commented out the space for you to give it a try.

I really enjoyed figuring this out. I'm new to Ruby, but I think I will do more experimenting!

p.s. I'm not sure about editing the timezone, so it might be a day ahead.

<p data-height="400" data-theme-id="97" data-slug-hash="de4bac53b9205077ab54f20900196df0" data-user="katydecorah" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/de4bac53b9205077ab54f20900196df0'>Haml Calendar</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a></p>
