---
title: Download Flickr photos in your Jekyll posts
category: code

image: 2018-11-04-flickr-to-jekyll-0.png
tags:
  - API
  - Jekyll
  - Node.js
---

I've stored all my photos for this blog on Flickr. For a while now I have kicked around the idea of finding a new home for them. One big reason being that a lot of the images are bloated and I would like to create my own system to control them. And now that Flickr is changing its storage policies, it's time to move my boxes of photos out of their basement.

I [wrote a module](https://github.com/katydecorah/flickr-to-jekyll) that will scan your Jekyll posts, download all your Flickr photos, and update the photos paths with the new relative ones.

And, guess what reader, it will download the _original_ Flickr photo.

## Under the hood

1. The script starts by [authenticating your Flickr account](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L13-L17). This is especially necessary if you have private photos.
2. Next, it'll [find all your posts](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L41-L47).
3. For each post, the script [reads the post to find Flickr URLs](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L79-L81).
4. If the [script finds photos](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L84-L89), it'll [download each photo](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L95-L109) and then [updates the photo paths](https://github.com/katydecorah/flickr-to-jekyll/blob/fb849869c6f7c00da4fc60003e3f6c1c074fe2aa/index.js#L112-L121) in your post for the new relative ones.

You can find the [code on GitHub](https://github.com/katydecorah/flickr-to-jekyll/) with instructions on how to use the module on your own site.

🔮 Curious about how I'm hosting my photos now? Continue on to [Storing assets in an AWS bucket](/code/photos-in-a-bucket/).
