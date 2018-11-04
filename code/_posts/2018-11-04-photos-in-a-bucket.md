---
title: Storing assets in an AWS bucket
category: code
emoji: 🗑
tags:
  - API
  - workflow
  - Jekyll
---

This is the unofficial Part II to [Download the Flickr photos in your Jekyll posts](/code/flickr-to-jekyll).

## Point a subdomain to an AWS bucket

I wanted to make sure that my assets stored on an AWS bucket would use my domain. I found some [great instructions on how to alias a subdomain to an S3 bucket](https://carltonbale.com/how-to-alias-a-domain-name-or-sub-domain-to-amazon-s3/). Following the instructions, I created an S3 bucket called `yo.katydecorah.com`, updated the permissions to the bucket, and adjusted my DNS records to point my newly created subdomain at the bucket.

## Create photo options

For each photo, I generated these versions:

- 1600px wide
- 1000px wide
- 1600px wide in webp
- 1000px wide in webp

I decided these sizes as the max-width of my site is around 800px. For a full-width image I'd want to double it for retina displays. I created the 1000px version for the occasion I use half-width images.

I created webp versions for fun, even though they don't have wide browser support.

For the time being, I'm using [Panic's Transmit](https://panic.com/transmit/) to sync my photos to my bucket. I'm currently working on a build script that will resize images and upload it to S3 for me (stay tuned 📺).

## Replace `img` with `picture`

Next, I wanted to replace all instances of the `img` element with the `picture` element so I could take advance of the `srcset` attribute.

To implement, I decided to create an include called `img.html`. I was able to use my code editor's regex find and replace feature to swap out the `img` element for the include in all my posts:

- Find: `<img([\w\W]+?)>`
- Replace: {% raw %}`{% include img.html $1 %}`{% endraw %}

This find and replace kept all attributes intact. Which meant that I'm passing the original image's `src`, `alt`, `class` attributes as variables to the include.

The include contains logic and the `picture` element where the include will determine which size photo to display based on the classes that are passed through the include.

## We'll see

I'm not sure how this new journey of hosting my assets on AWS will go or how my include will change or even the variety of photos sizes. But with everything, let's get it live and see what happens.
