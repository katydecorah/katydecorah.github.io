---
title: Jekyll data playlists

tags:
  - Jekyll
  - PHP
image: 2014-03-23-jekyll-data-playlists-0.png
---

In 2008, I started creating a playlist for every season. I kept my playlists in iTunes, but have migrated to Rdio. These playlists are my audio diaries. I can listen to one and remember where I was, where I was going, who I was with, and how I felt. I love these playlists.

## Jail breaking the playlists

When I got a new computer in 2012, I didn't save my playlists in iTunes properly. In short, my files got disconnected from my library. It was a hot mess, but thankfully I had the original `iTunes Music Library.xml`. I found <a href="https://youtu.be/MIOUirsX0LM" data-proofer-ignore>a great tutorial</a> that taught me how to import the data in the XML into an Access database. Now I had a table containing all my playlists with track title, artist, and album.

Next, I migrated the database to PHPmyadmin. Using PHP I spun out each playlist into markup and pasted the contents into its own post on this site. It worked great, a little time consuming, but it worked.

## Importing to Rdio

After some more hacking, I was able to import the playlists into Rdio using re/spin. Re/spin easily imports any Last.fm or Spotify playlist into Rdio. The service also accept [XSPF](http://www.xspf.org/). I was able to save each playlist as an XSPF and import it into Rdio.

Not all songs transferred over, but enough did to make it worth it. Re/spin will want to find something if Rdio doesn't have a match, so beware of some funky replacements. Otherwise, re/spin is a fabulous service.

## Datarrhea

At this point I had my playlist data stored in an SQL table, in Rdio, and in individual posts. I started to feel guilty about shoveling my data in every direction.

I decided to tighten up the process.

## Jekyll data files

I ditched the database and moved the playlists into a single YAML file. Using PHP, I outputted the playlist data into YAML format. I had to clean out special characters, but in all it worked beautifully. I saved my data into [`playlists.yml`](https://github.com/katydecorah/katydecorah.github.com/blob/master/_data/playlists.yml) in my site's `_data` folder.

{% include img.html src='2014-03-23-jekyll-data-playlists-0.png' alt='playlists.xml' class='img-half' %}

Using liquid, I could now spin through the data. To test, I created a [playlist master]({{site.url}}/playlists) page that pulls all the data from `playlists.yml` into a beautiful list.

Things were looking tighter, but I still had duplicated data on my site. I had the playlists stored in the YAML file and I had the markup I copied and pasted into individual posts.

I put Jekyll to work.

1. I ripped out the content from all the playlist posts.
2. I matched the names of the posts to the names of the playlists.
3. To my post layout, I added the condition that if the `page.category == 'playlists'` then `include single-playlist.html`
4. The [`single-playlist.html`](https://github.com/katydecorah/katydecorah.github.com/blob/master/_includes/single-playlist.html) will then loop through `playists.yml` where the post title equals a playlist name. If the playlist name matches, it will output the data for that playlist only.
5. Since I replaced the content for these posts, I updated my feed to link directly to the Rdio playlist and have no content.

Now I can adjust the markup of my playlist posts just by changing `single-playlist.html`. Likewise, I can control all the playlist data by editing `playlists.yml`.

## Adding new data

My new workflow for adding a playlist to my site at the end of the season:

1. Open up the Rdio playlist to be exported.
2. Run the bookmarklet to output the playlist in YAML format (more about this below).
3. Copy and paste the YAML at the bottom of `playlists.yml`
4. Create a new post title with the same name as the playlist.
5. Serve Jekyll/commit and the playlist data will automatically populate into the new post.

## Rdio bookmarklet

I found [this great bookmarklet](https://gist.github.com/nloko/3001053) that scrapes the title, artist, and album from a given Rdio playlist. I've had little experience with bookmarklets, but I hacked away at it. My version outputs the playlist into YAML. It also grabs the playlist title, image, and link to the playlist on Rdio.

Now, I need to make sure that the entire playlist is loaded and that I open the "Share" modal, otherwise the bookmarklet won't find those values. I'll make the bookmarklet sweet on a rainy day, but for now it works despite the conditions.

![Rdio playlist bookmarklet in action.](http://i.imgur.com/4YDPRZl.gif)

[Rdio playlist to YAML bookmarklet](https://gist.github.com/katydecorah/9574336)

It felt great to get my playlists under one roof. It felt even better to figure out how to use data files in Jekyll.
