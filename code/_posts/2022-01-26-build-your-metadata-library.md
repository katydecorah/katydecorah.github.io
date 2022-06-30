---
title: Build your metadata library
image: 2022-01-26-build-your-metadata-library.png
tags:
  - Node.js
  - GitHub
---

Last year, I started to track new [recipes I tried](/code/bookmark-action/) and [books I read](/code/read/) by saving their metadata to YAML files. I had already been [saving Spotify playlists](/code/jekyll-data-playlists/) in the same way and then this year I started saving [Wordle games](/code/wordle-to-yaml/). I have found something deeply gratifying about maintaining metadata libraries.

Tracking these activities has served as a helpful reference for when a friend asks me what I've read lately or for a good recipe. Everything is in one place. I was also surprised to learn that I made 96 new recipes last year, a number I wouldn't have known, or even been able to guess, had I not tracked.

The metadata we generate from our daily activities can help build a passive, yet, rich journal.

## Make tracking easy

Over the years, I tried to make tracking frictionless and rewarding. Each costs me seconds of my time or is fully automated:

- **Spotify playlists.** At the end of the season, the [Spotify to YAML GitHub action](https://github.com/katydecorah/spotify-to-yaml-action) automatically exports the playlist.
- **Books.** After I finish a book, I enter its ISBN into my [Finished a book iOS shortcut](https://github.com/katydecorah/read-action/tree/main/shortcut#finished-a-book-shortcut) which triggers the [Read GitHub action](https://github.com/katydecorah/read-action/) to save the book metadata.
- **Recipes.** After I finish a recipe, I use the app's share option along my [Add to recipe box iOS shortcut](https://github.com/katydecorah/bookmark-action/tree/main/shortcut#bookmark-shortcut) to trigger the [Bookmark GitHub action](https://github.com/katydecorah/bookmark-action/).
- **Wordle.** After I finish a Wordle game, I use the app's share option along with my [Wordle iOS shortcut](https://github.com/katydecorah/wordle-to-yaml-action/tree/main/shortcut#wordle-to-yaml-shortcut) to trigger the [Wordle to YAML GitHub action](https://github.com/katydecorah/wordle-to-yaml-action/).
- **Seasonal recap.** At the end of the season, the [Seasonal post GitHub action](https://github.com/katydecorah/seasonal-post-action) will pull from all the data files and automatically create a post to summarize the things I read, made, and listened to.

I have found this iOS shortcut to GitHub issue pipeline to be ideal for data that doesn't have an API, for when I want to pull data from many sources, and for activities I complete on or near my phone. I also like to avoid added logins. For example, while Goodreads is a known service to track books, it's more than I want.

## A data warehouse

I created a private repository to hold my YAML files:

```
_data
  learning.yml
  playlists.yml
  read.yml
  recipes.yml
  watched.yml
  wordle.yml
```

These files once lived in my site repository, but I realized they serve a different function than my site. And while most of my work is in public repositories, I'm not ready to share everything.

## Points on the board

My private data repository builds [a public site](/has/). I mentioned earlier that I tried to make the process of tracking rewarding &mdash; this site is it. Like checking something off a checklist, I have found a sense of accomplishment that makes me want to continue, to do more, to read more, to try a new recipe.

Since my GitHub actions commit directly to the repository, the site will automatically update. This means that about a minute after I triggered a workflow for finishing a book, the book's title and thumbnail will appear on the site.

## More on meta tags

During this process of tracking, I think the most interesting concept is website structured data in the form of meta tags. The [Bookmark GitHub action](https://github.com/katydecorah/bookmark-action/) uses an [Open Graph](https://ogp.me/) scraper. Since websites are incentivized to follow these standards to display their links richly on social media, I've found this dataset to be readily available.

Meta tag attributes are perfect for tracking and bookmarking, which makes the [Bookmark GitHub action](https://github.com/katydecorah/bookmark-action/) so versatile.

I do find that validation and consistency of these Open Graph meta tags to be lacking. For example, some sites will append extra text to the title, such as the site name when there's another meta tag to store this data. I suppose this exercise has made me want to think more carefully about how I shape metadata.
