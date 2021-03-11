---
title: Generate an Instagram RSS feed with GitHub actions
image: 2021-02-27-instagram-rss-action.png
tags:
  - Node.js
  - GitHub
---

After missing a local pierogi pop up, I needed a better way to manage Instagram. I created [Instagram RSS action](https://github.com/katydecorah/instagram-rss-action) that will generate an RSS feed from one or more public Instagram accounts.

In the [repository's README](https://github.com/katydecorah/instagram-rss-action#setup) is a sample action workflow that runs the action once a day and then automatically commits the feed to your repository; a great workflow if you're using GitHub pages.

The action also has an option to remove hashtags and emoji to help make each post easier to read in RSS.

<div class="photos">
{% include img.html alt="" src="2021-02-27-instagram-rss-action.png" width="1600" height="979" %}
</div>
