---
title: Wordle to yaml
image: 2022-01-16-wordle.png
tags:
  - Node.js
  - GitHub
---

I'm playing [Wordle](https://www.powerlanguage.co.uk/wordle/). I love a word puzzle and like many have been hooked by the daily game. I wrote [wordle-to-yaml-action](https://github.com/katydecorah/wordle-to-yaml-action) to commit my Wordle scores to a yaml file.

I paired the action with an [iOS Shortcut](https://apps.apple.com/us/app/shortcuts/id915249334) (like the one I created for my [read-action](/code/read/#pair-it-with-an-ios-shortcut)). After I complete a game, I select my Wordle shortcut from the iOS share sheet and the shortcut will automatically format the score and then open the GitHub issue to kick of the action.

It sounds like a mouthful, but my beautiful bot friends complete these tasks in seconds.

The data for each board looks something like this:

```yaml
- number: 210
  score: 3
  board:
    - "🟩⬛⬛⬛⬛"
    - "⬛⬛🟨🟩🟨"
    - "🟩🟩🟩🟩🟩"
  won: true
  date: "2022-01-15"
```

I created [a page to show off my scores](https://katydecorah.com/has/played/#wordle) and calculate the same game statistics found on Wordle. I love to see [my data in one place](https://katydecorah.com/has/) and build workflows that make it enjoyable to add to my growing collections.
