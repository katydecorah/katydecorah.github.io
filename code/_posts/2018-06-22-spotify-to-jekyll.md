---
title: Turn a Spotify playlist into a Jekyll post

image: 2018-06-22-spotify-to-jekyll-0.png
tags:
  - Node.js
  - Jekyll
  - API
---

For the past ten years, I've created a playlist for each season. I wrote about this before when I made [Jekyll data playlists](https://katydecorah.com/code/jekyll-data-playlists/). At the end of each season, the playlist gets a post and I store all the data in `_data/playlists.yml` (for safe keeping).

:scream: Tired: Doing this work manually.

:sunglasses: Wired: Using [this handy script](https://github.com/katydecorah/spotify-to-jekyll).

## Under the hood

1. The script [gets the playlist](https://github.com/katydecorah/spotify-to-jekyll/blob/fc88b4eff599074ebae58fa3dd8e574761edb050/index.js#L21-L38) from Spotify.
2. Next, it [formats the tracks](https://github.com/katydecorah/spotify-to-jekyll/blob/fc88b4eff599074ebae58fa3dd8e574761edb050/index.js#L40-L64) with exactly the data I'll need for later.
3. With the new dataset, it [creates a post](https://github.com/katydecorah/spotify-to-jekyll/blob/fc88b4eff599074ebae58fa3dd8e574761edb050/index.js#L66-L79) and [formats it](https://github.com/katydecorah/spotify-to-jekyll/blob/fc88b4eff599074ebae58fa3dd8e574761edb050/index.js#L81-L93) to my liking.
4. Then [updates the master playlist](https://github.com/katydecorah/spotify-to-jekyll/blob/fc88b4eff599074ebae58fa3dd8e574761edb050/index.js#L95-L117) by [reading the file, appending the new data](https://github.com/katydecorah/spotify-to-jekyll/blob/fc88b4eff599074ebae58fa3dd8e574761edb050/index.js#L108-L117), and then [saving it](https://github.com/katydecorah/spotify-to-jekyll/blob/fc88b4eff599074ebae58fa3dd8e574761edb050/index.js#L97-L104).
5. Finally, the script [downloads the playlist image](https://github.com/katydecorah/spotify-to-jekyll/blob/fc88b4eff599074ebae58fa3dd8e574761edb050/index.js#L119-L127).

When I'm ready to turn a Spotify playlist into a post, I run from terminal:

```
spotify-to-jekyll --playlist=<playlist-id>
```

In a few seconds, the script has updated `_data/playlist.yml`, created a new post, and downloaded a thumbnail image for the post.

{% include img.html src='2018-06-22-spotify-to-jekyll-1.png' alt='GitHub app displaying the three files that have been downloaded' class='img-full' width='1200' height='769' %}

You can find the [code on GitHub](https://github.com/katydecorah/spotify-to-jekyll) to learn how to set it up for yourself.
