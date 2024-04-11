---
title: Generative static art
---

I [redesigned my site](https://github.com/katydecorah/theme/releases/tag/v5.0.0) a few months ago and had fun creating small generative art pieces that change at build time.

At the top of every page, next to my name, are four quarter circles with two on top and two on bottom. These shapes appear in a random order on every page.

I did this by creating a base style for the shapes and then creating a class for each shape to round it off at a different corner.

```css
.shape div {
  width: 1rem;
  height: 1rem;
  background: var(--font-color);
}

.shape-1 {
  border-radius: 100% 0 0;
}

.shape-2 {
  border-radius: 0 100% 0 0;
}

.shape-3 {
  border-radius: 0 0 0 100%;
}

.shape-4 {
  border-radius: 0 0 100%;
}
```

Next, I used the [sample filter](https://jekyllrb.com/docs/liquid/filters/#sample) to pick random values from my array of CSS shape classes.

```liquid
{% raw %}<div class="shape">
  {% assign choices = "shape-1,shape-2,shape-3,shape-4" | split: "," %}
  {% assign shapes = choices | sample: 4 %}
  {% for s in shapes %}
  <div class="{{ s }}"></div>
  {% endfor %}
</div>{% endraw %}
```

I also created a horizontal line decoration using the same concept, but longer. Toward the bottom of each page, before the footer, are nine quarter circles in a row.

It's kind of fun to click around until you find the tulip shape.
