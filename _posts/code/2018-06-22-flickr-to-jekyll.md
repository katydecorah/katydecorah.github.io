---
title: Save all your Flickr photos found in your Jekyll posts
category: code
image:
tags:
- API
- workflow
- Jekyll
---

Flickr has been the place where I've stored all my photos for this blog. For a while now I have kicked around the idea of finding a new home for them. One big reason being that a lot of the images are bloated and I would like to write my own build system to control them. Flickr being acquired gave me extra incentive to get down to business.

I [wrote a script](https://github.com/katydecorah/flickr-to-jekyll) that will scan your Jekyll posts and download all your Flickr photos. And, guess what reader, it will download the *original* Flick photo.

## Under the hood

1. The script starts by [authenticating your Flickr account](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L13-L17). This is especially necessary if you have private photos.
2. Next, it'll [find all your posts](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L41-L47).
3. For each post, the script [reads the post to find Flickr urls](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L79-L81).
4. If the [script finds photos](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L84-L89), it'll [download each photo](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L95-L109) and then [updates the photo paths](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L112-L121) in your post for the new relative ones.

You can find the [code on GitHub](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L13-L17). Now that GitHub has been acquired I'll be writing a script that emails me all my code (haha jk).
