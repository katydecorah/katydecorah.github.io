---
title: Copyeditor on commit
image: 2021-06-06-copyeditor.png
tags:
  - JavaScript
  - Mapbox
---

Yesterday I wrote about the [markdown linters](/code/lint-markdown/) we use at Mapbox. Our other test suite focuses on language and asserts the Mapbox documentation styleguide. Our copyeditor is a fork of [alex](https://github.com/get-alex/alex), which helps you find gender favoring, polarizing, race related, religion inconsiderate, or other unequal phrasing in text.

We forked alex to add more [retext plugins](https://github.com/retextjs/retext/blob/main/doc/plugins.md) and introduce our own.

## retext plugins

[retext](https://github.com/retextjs/retext) is a natural language processor and it uses plugins to assert language. alex includes the retext plugins, [retext-equality](https://github.com/retextjs/retext-equality/) and [retext-profanities](https://github.com/retextjs/retext-profanities/). Our fork adds:

- [retext-repeated-words](https://github.com/retextjs/retext-repeated-words/) - checks for repeated words.
- [retext-indefinite-article](https://github.com/retextjs/retext-indefinite-article/) - checks if indefinite articles (`a` and `an`) are used correctly.
- [retext-simplify](https://github.com/retextjs/retext-simplify/) - checks phrases for simpler alternatives.
- [retext-passive](https://github.com/retextjs/retext-passive/) - checks for passive voice.
- [retext-spell](https://github.com/retextjs/retext-spell/) - checks spelling.

## Configuration and context

With content tests, context is everything. Our copyeditor has custom configurations for any plugin that allows it. For example, for the retext-equality plugin, we allow the word `disabled`. Where in some writing this word is polarizing, at Mapbox we are referring to a disabled feature or button.

Since every content repository is unique, our copyeditor allows the contributor to disable a rule in three ways:

1. Inline with an HTML comment
2. For an entire file
3. For an entire repository

The methods above give us flexibility to adjust our tests based on the content without having to wait for a new copyeditor release.

## Forever expanding dictionary

A spellchecker is incredibly useful, but you must be prepared to teach it new words. Our copyeditor comes with a dictionary of words that are common at Mapbox. And, more importantly, each repository can define its own local dictionary so that the contributor can add and commit words while writing.

## The Mapbox styleguide

Our copyeditor also has a custom retext plugin to support our voice and tone and to format words and phrases consistently. Some examples:

- Avoid words like `actually`, `a bit`, and `just` which minimize complexity.
- Avoid superlatives and hyperbole like `amazing`, `awesome`, or `very` and instead use facts to convey meaning.
- Colloquial and idiomatic phrases rarely make sense when translated. Replace phrases like `on the fly` with `dynamic` or `keep in mind` with `remember`.
- Help keep the voice of our documentation consistent, replace `Github` with `GitHub`, replace `OSM` with `OpenStreetMap`, and `repo` with `repository`.

## Tests as a teaching tool

We want to make sure that the error messages give a clear explanation of the change so that the contributor can understand why and how the change will improve documentation. Through our copyeditor tests, we multiplied our documentation team since at any time of day a team member can get their first content review as soon as they commit their changes to GitHub.
