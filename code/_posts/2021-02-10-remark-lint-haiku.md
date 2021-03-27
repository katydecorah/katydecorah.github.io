---
title: A test for haiku
image: 2021-02-09-haiku.png
tags:
  - Node.js
---

To support my post [Haiku 2018-2019](/notes/haiku-a-day/), I created [remark-lint-haiku](https://github.com/katydecorah/remark-lint-haiku) to make sure that each haiku is in 5, 7, 5 syllable pattern. The linter uses [syllable](https://github.com/words/syllable) to count the syllables.

To markup a haiku, I used a fenced code block and set `haiku` as the code language.

````
```haiku
Parallelogram
I tried to cut from fabric
I cut a rhombus
```
````

If a line has too many syllables, then the linter will return:

```
23:1-27:4  warning  "I tried to cut from my fabric" (8), it should have 7 syllables.  haiku  remark-lint
```

If a line has too few syllables:

```
23:1-27:4  warning  "I tried to cut fabric" (6), it should have 7 syllables.  haiku  remark-lint
```

If the haiku does not have 3 lines:

```
23:1-27:4  warning  Haiku has 2 lines, it should have 3 lines.  haiku  remark-lint
```

I also updated my site's CSS to switch the font for `.language-haiku` to a serif.

```haiku
Parallelogram
I tried to cut from fabric
I cut a rhombus
```
