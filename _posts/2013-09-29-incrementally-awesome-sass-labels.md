---
layout: post
title: Incrementally Awesome Sass Labels
category: code
tags: 
  - Sass
image: http://katydecorah.com/img/sass-labels.png
---

For this site I wanted my categories to be color coded, but I didn't want to put a lot of effort into managing it. So I spent a little effort into making sure I didn't have to manage it.

## The Set-up

Where I want a category to be color coded, I used the class of 'label.' While not immediately semantic, it could allow for flexibility in the future. I'm also a Bootstrap fan, so it was a go-to move. This class is intended to be used on inline elements such as spans or anchor tags.

Sample: <span class="label">category</span>

Styled:

<script src="https://gist.github.com/katydecorah/6748647.js">&nbsp;</script>

I set a default background as a starting point and just in case something fails.

Next I created a Sass list to define each category.

<script src="https://gist.github.com/katydecorah/6748660.js">&nbsp;</script>

For each category I created its own supplemental class. Each class incrementally changes the background-color of the original color `$blue`. Based on how many categories I have I chose 35 to be my increment. This may need to be adjusted if you have more or less items and depending on how close of a color spectrum you desire.

<script src="https://gist.github.com/katydecorah/6748663.js">&nbsp;</script>

## Tada

A miraculous rainbow of categories.

<span class="label">label</span> 
<span class="label label-baking">baking</span> 
<span class="label label-weekends">weekends</span> 
<span class="label label-code">code</span> 
<span class="label label-playlist">playlist</span> 
<span class="label label-vacations">vacations</span> 
<span class="label label-growing">growing</span> 
<span class="label label-weekdays">weekdays</span> 

## Things to consider

I can easily add categories, woo! 

...but if I end up with more than 9 categories (hopefully not), then my color spectrum is going to get a bit cozy.

