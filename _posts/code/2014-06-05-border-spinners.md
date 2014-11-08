---
layout: post
title: Border Spinners
category: code
tags:
 - CodePen
 - border
 - animation
 - single element 
 - Sass
image: http://i.imgur.com/axSxlAN.gif
codepen: tbjqx
---

<p data-height="300" data-theme-id="97" data-slug-hash="tbjqx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/tbjqx/'>Twinner Spinner</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

A few days ago, I wanted to create a single element spinner. (Just for funsies.) After several minutes of tinkering, I whipped up *Twinner Spinner*.

## Meet the elements

The main element, `.loader`, acts as a container for the spinner. The real magic happens in its pseudo elements. I did this because once you animate a main element it can be tricky to control its pseudo elements. I also used the main element to dictate the size of the project since I'm using ems.

## Pseudo what

I styled the `:before` and `:after` similarly; each element is a 1em circle with a transparent border. However, one element received `left` and `border-left-color` values, while the other received `right` and `border-right-color` values.

My use of the border properties may seem redundant, but the elements need a border all around to keep the border from pinching in.

## Animation

Once I got the elements styled and in place, I created a animation to rotate the elements. I found that by adding an `animation-delay` to one of the elements, I could give the spinner a little more personality, especially paired with an ease `animation-timing-function`.

## Variable-ing Up

Even though I had everything looking pretty darn sweet, I put variables in where I could. By doing so, I can now control the speed, size, and colors of the spinner from the top of my Sass.

Naturally, I created a few spin-off spinners.

<div class="media">
<div class="thirds">
<p data-height="300" data-theme-id="97" data-slug-hash="AFkrj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/AFkrj/'>Twinner Spinner II</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>
<div class="thirds">
<p data-height="300" data-theme-id="97" data-slug-hash="zytix" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/zytix/'>Slicer Spinner</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>
<div class="thirds">
<p data-height="300" data-theme-id="97" data-slug-hash="dIknh" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/katydecorah/pen/dIknh/'>Twisty Spin</a> by Katy DeCorah (<a href='http://codepen.io/katydecorah'>@katydecorah</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div>
</div>

I absolutely love a scalable project with smart variables. It really helps push the boundaries on the simplest of properties.

p.s. the color palette I used for all spinners is from [Flat UI Colors](http://flatuicolors.com/).

