---
title: GitHub as a talk proposal review system

image: https://yo.katydecorah.com/2018-02-04-proposal-reviewer-0.png
tags:
  - Node.js
  - API
  - Ela Conf
emoji: 🗳
---

For [Ela Conf](http://elaconf.com) 2015, 2016, and 2017, we turned a private GitHub repository into a system for reviewing talk proposals.

Here's how we set it up:

1. We accepted proposals through a [Google Form](https://www.google.com/forms/about/).
2. Once someone submitted a proposal through our form, we set up a [Zapier](https://katydecorah.com/notes/ela-conf-bots/) zap to create an issue in our repo.
3. Our team used emoji reactions :+1: or :-1: on each proposal (issue) for the first round of review.

To help automate the process, I [wrote a script](https://github.com/katydecorah/proposal-reviewer) that:

1. [Reads and formats the proposals (issues)](https://github.com/katydecorah/proposal-reviewer/blob/86733ce18db717f69916e430a5e65fb887e30b60/utils.js#L6-L51).
2. [Retrieves the emoji reactions](https://github.com/katydecorah/proposal-reviewer/blob/86733ce18db717f69916e430a5e65fb887e30b60/utils.js#L75-L110) for each proposal.
3. [Makes decisions](https://github.com/katydecorah/proposal-reviewer/blob/86733ce18db717f69916e430a5e65fb887e30b60/utils.js#L135-L176) for the proposal:

- If the majority of the team gave the proposal :-1: then [the bot added the label "no" to the proposal](https://github.com/katydecorah/proposal-reviewer/blob/86733ce18db717f69916e430a5e65fb887e30b60/utils.js#L148-L157). It was also moved to a "Send rejection email" milestone.
- If all of us gave :+1: then [the bot added the label "favorite" to the proposal](https://github.com/katydecorah/proposal-reviewer/blob/86733ce18db717f69916e430a5e65fb887e30b60/utils.js#L159-L168).
- If someone still needs to give their emoji vote then [the bot assigned them to the proposal](https://github.com/katydecorah/proposal-reviewer/blob/86733ce18db717f69916e430a5e65fb887e30b60/utils.js#L138-L146) or removed them if they had since left their emoji review.

Below is a (highly) redacted example of a talk proposal with a 5 :+1: rating and a "favorite" label adhered by the bot!

{% include img.html src='2018-02-04-proposal-reviewer-1.jpg' alt='screenshot of GitHub issue' class='img-half' %}

The system and script worked very well for a small-scale (receiving around 200 proposals) conference that needed an asynchronous review period. We used labels to help organize the different types of proposals we received and left comments based on what we thought about the talk.

You can [check out the code on GitHub](https://github.com/katydecorah/proposal-reviewer).
