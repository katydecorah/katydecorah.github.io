---
title: Turn a Spotify playlist into a Jekyll post
category: code
image: https://c2.staticflickr.com/2/1780/41148768130_78baa7c1f4_o.png
tags:
- API
- workflow
- Jekyll
---

For the past ten years, I've created a playlist for each season. I wrote about this before when I made [Jekyll data playlists](https://katydecorah.com/code/jekyll-data-playlists/). At the end of each season, the playlist gets a post and I store all the data in `_data/playlists.yml` (for safe keeping).

:scream: Tired: Doing this work manually.

:sunglasses: Wired: Using [this handy script](https://github.com/katydecorah/spotify-to-jekyll).

## Under the hood

1. The script [gets the playlist](https://github.com/katydecorah/spotify-to-jekyll/blob/77cbfb4365b4bce0d19e0be0598f46cbbcfbe6fe/index.js#L22-L39) from Spotify.
2. Next, it [formats the tracks](https://github.com/katydecorah/spotify-to-jekyll/blob/77cbfb4365b4bce0d19e0be0598f46cbbcfbe6fe/index.js#L41-L65) with exactly the data I'll need for later.
3. With the new dataset, it [creates a post](https://github.com/katydecorah/spotify-to-jekyll/blob/77cbfb4365b4bce0d19e0be0598f46cbbcfbe6fe/index.js#L67-L80) and [formats it](https://github.com/katydecorah/spotify-to-jekyll/blob/77cbfb4365b4bce0d19e0be0598f46cbbcfbe6fe/index.js#L82-L94) to my liking.
4. Then [updates the master playlist](https://github.com/katydecorah/spotify-to-jekyll/blob/77cbfb4365b4bce0d19e0be0598f46cbbcfbe6fe/index.js#L96-L118) by [reading the file, appending the new data](https://github.com/katydecorah/spotify-to-jekyll/blob/77cbfb4365b4bce0d19e0be0598f46cbbcfbe6fe/index.js#L109-L118), and then [saving it](https://github.com/katydecorah/spotify-to-jekyll/blob/77cbfb4365b4bce0d19e0be0598f46cbbcfbe6fe/index.js#L98-L105).
5. Finally, the script [downloads the playlist image](https://github.com/katydecorah/spotify-to-jekyll/blob/77cbfb4365b4bce0d19e0be0598f46cbbcfbe6fe/index.js#L120-L128).

When I'm ready to turn a Spotify playlist into a post, I run from terminal:

```
spotify-to-jekyll --playlist=<playlist-id>
```

In a few seconds, the script has updated `_data/playlist.yml`, created a new post, and downloaded a thumbnail image for the post.

![GitHub app displaying the three files that have been downloaded](https://c2.staticflickr.com/2/1837/29086582348_5be7bd7e87_o.png)

You can find the [code on GitHub](https://github.com/katydecorah/spotify-to-jekyll) to learn how to set it up for yourself.
