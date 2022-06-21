---
title: Wordle to yaml
image: 2022-01-16-wordle.png
tags:
  - Node.js
  - GitHub
---

I'm playing [Wordle](https://www.powerlanguage.co.uk/wordle/). I love a word puzzle and like many have been hooked by the daily game. I wrote [wordle-to-yaml-action](https://github.com/katydecorah/wordle-to-yaml-action) to archive my Wordle games to a yaml file.

I paired the action with a [World to yaml iOS Shortcut](https://github.com/katydecorah/wordle-to-yaml-action/tree/main/shortcut). After I complete a game, I select the _Wordle to yaml_ shortcut from the iOS share sheet and the shortcut will automatically format the score and then open the GitHub issue to kick of the action.

It sounds like a mouthful, but my beautiful bot friends complete these tasks in seconds.

The data for each board looks something like this:

```yaml
- number: 210
  score: 3
  board:
    - "🟩⬛⬛⬛⬛"
    - "⬛⬛🟨🟩🟨"
    - "🟩🟩🟩🟩🟩"
  boardWords:
    - "yes no no no no"
    - "no no almost yes almost"
    - "yes yes yes yes yes"
  won: true
  date: "2022-01-15"
```

I created [a page to show off my scores](/has/played/#wordle) and calculate the same game statistics found on Wordle. I love to see [my data in one place](/has/) and build workflows that make it enjoyable to add to my growing collections.
