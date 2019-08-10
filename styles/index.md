---
layout: default
title: Styles
hideTitle: true
colors:
  - background
  - background-accent
  - link
  - link-hover
  - text-color
  - text-accent
---

# Colors

<div class="swatches">
{% for color in page.colors %}
<div class="swatch-{{color}}"></div>
{%endfor %}
</div>

# Header Level 1

## Header Level 2

### Header Level 3

#### Header Level 4

---

**Duis aute irure dolor** in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
- Aliquam tincidunt mauris eu risus.
- Ut enim ad minim veniam, quis nostrud exercitation.

_Lorem ipsum dolor sit amet_, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur [sint occaecat cupidatat](../) non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

`.btn`

<a href="../" class="btn">Button</a>

---

```css
#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}
```

---

## Posts

### Photo grids

`.img-fourths`

<div class="post">
<div class="photos">
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-fourths" %}
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-fourths" %}
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-fourths" %}
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-fourths" %}
</div>
</div>

`.img-thirds`

<div class="post">
<div class="photos">
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-thirds" %}
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-thirds" %}
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-thirds" %}
</div>
</div>

`.img-half`

<div class="post">
<div class="photos">
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-half" %}
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-half" %}
</div>
</div>

`.img-wide`, `.img-tall`

<div class="post">
<div class="photos">
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" class="img-wide" %}
{% include img.html src="cali.jpg" class="img-tall" alt="Untitled" %}
</div>
</div>

<div class="post">
<div class="photos">
{% include img.html src="ducks.jpg" alt="Washington Park, Albany" %}
</div>
</div>
