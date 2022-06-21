---
title: Save your bookmarks with GitHub actions
image: 2021-03-27-bookmark-action.png
tags:
  - Node.js
  - GitHub
---

I have been on a [GitHub actions](https://github.com/features/actions) kick with [read-action](/code/read/) and [instagram-rss-action](/code/instagram-rss-action/). Most recently, I created [bookmark-action](https://github.com/katydecorah/bookmark-action) that saves a URL along with the page's metadata to a YAML file. I created this to [track all the new recipes I tried](/has/made/) so far this year.

Like read-action, I also [created an iOS shortcut](/code/read/#pair-it-with-an-ios-shortcut) for this action. This shortcut follows all the same patterns as read-action, but instead of accepting an ISBN, I enabled `Show in Share Sheet`. This means when I'm viewing a website or a recipe in the NYT Cooking app, I can click the share icon and select my shortcut to automatically grab the URL for the page that I want to bookmark.

<div class="photos">
{% include img.html class="img-half" src="2021-03-27-bookmark-action.png" alt="Finished New Recipe shortcut in iOS share sheet" width="1170" height="2532" %}
</div>

I ended up creating a private repository where I've enabled my bookmark actions. This helped reduce noise in my site's repository.

Here's to tinkering and attempting to own your own data.
