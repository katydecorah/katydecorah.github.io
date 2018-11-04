---
title: Incrementally awesome Sass labels

tags:
  - Sass
image: https://yo.katydecorah.com/2013-09-29-incrementally-awesome-sass-labels-0.png
project: true
css: |
  .label {
    vertical-align: middle;
    background: rgba(0, 125, 147, 0.5);
    border-color: rgba(0, 125, 147, 0.5);
    padding: 0.25em 0.75em;
    color: #fff;
    display: inline-block;
    margin: 0.3em;
    border-radius: 0.25em;
  }
  .label:hover {
    background: rgba(0, 60, 71, 0.5);
    color: #fff;
  }

  .label-edibles {
    background: #002793;
    background: rgba(0, 39, 147, 0.5);
    border-color: #002793;
    border-color: rgba(0, 39, 147, 0.5);
  }
  .label-edibles:hover {
    background: #001347;
    background: rgba(0, 19, 71, 0.5);
  }

  .label-adventures {
    background: #2f0093;
    background: rgba(47, 0, 147, 0.5);
    border-color: #2f0093;
    border-color: rgba(47, 0, 147, 0.5);
  }
  .label-adventures:hover {
    background: #170047;
    background: rgba(23, 0, 71, 0.5);
  }

  .label-code {
    background: #850093;
    background: rgba(133, 0, 147, 0.5);
    border-color: #850093;
    border-color: rgba(133, 0, 147, 0.5);
  }
  .label-code:hover {
    background: #400047;
    background: rgba(64, 0, 71, 0.5);
  }

  .label-playlists {
    background: #93004c;
    background: rgba(147, 0, 76, 0.5);
    border-color: #93004c;
    border-color: rgba(147, 0, 76, 0.5);
  }
  .label-playlists:hover {
    background: #470025;
    background: rgba(71, 0, 37, 0.5);
  }

  .label-freelance {
    background: #930a00;
    background: rgba(147, 10, 0, 0.5);
    border-color: #930a00;
    border-color: rgba(147, 10, 0, 0.5);
  }
  .label-freelance:hover {
    background: #470500;
    background: rgba(71, 5, 0, 0.5);
  }
---

For this site I wanted my categories to be color coded, but I didn't want to put a lot of effort into managing it. Instead I spent a little effort into making sure I didn't have to manage it.

## The Set-up

Where I want a category to be color coded, I used the class of 'label.' While not immediately semantic, it could allow for flexibility in the future. I'm also a Bootstrap fan, so it was a go-to move. This class is intended to be used on inline elements such as spans or anchor tags.

Sample: <span class="label">label</span>

Style:

<script src="https://gist.github.com/katydecorah/6748647.js">&nbsp;</script>

I set a default background as a starting point and just in case something fails.

Next I created a Sass list to define each category.

<script src="https://gist.github.com/katydecorah/6748660.js">&nbsp;</script>

For each category I created its own supplemental class. Each class incrementally changes the background-color of the original color `$blue`. Based on how many categories I have I chose 35 to be my increment. This may need to be adjusted if you have more or less items and depending on how close of a color spectrum you desire.

<script src="https://gist.github.com/katydecorah/6748663.js">&nbsp;</script>

## Tada

A miraculous rainbow of categories.

<span class="label">label</span>
<span class="label label-edibles">edibles</span>
<span class="label label-adventures">adventures</span>
<span class="label label-code">code</span>
<span class="label label-playlists">playlists</span>
<span class="label label-freelance">freelance</span>

## Things to consider

I can easily add categories, woo!

...but if I end up with more than 9 categories (hopefully not), then my color spectrum is going to get a bit cozy.
