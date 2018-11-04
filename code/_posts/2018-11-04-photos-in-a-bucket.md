---
title: Storing assets in an AWS bucket
category: code
emoji: 🗑
tags:
  - AWS
  - Jekyll
---

This is the unofficial Part II to [Download the Flickr photos in your Jekyll posts](/code/flickr-to-jekyll) and a rundown of how I created a secure subdomain that points at an AWS S3 bucket to host my site's assets.

## Create a bucket

I started by creating a bucket to store my photos. From a little research I decided to name my bucket after the subdomain that I will later point at the bucket `yo.katydecorah.com`.

I used [this policy on my bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html#root-domain-walkthrough-s3-tasks) that would give read access to my bucket but not allow the public to see a list of everything in my bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::example.com/*"]
    }
  ]
}
```

## Set static site hosting

From my S3 bucket, I clicked **Properties** > **Static website hosting**. I chose **Use this bucket to host a website**, entered `index.html`, and hit saved. (I completed the configuration in the next step.)

Next, I uploaded an `index.html` to my bucket. (It's blank for now.)

## Make it https

Next, I followed these instructions to [serve HTTPS requests for my Amazon S3 bucket](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3/). In addition to following the instructions, I made sure to:

1. Set the **Default Root Object** to `index.html`. This will connect the page I uploaded in the last step.
2. Point my subdomain at the CloudFront.
   - Once I created my CloudFront distribution, I clicked on it and then copied the value of **Domain Name**.
   - From my domain host, I created a CNAME record that points at that CloudFront domain name. For example:
     - type: `CNAME`
     - host name: `yo`
     - target name: `1234abcd.cloudfront.net`

It took a few hours for the changes to propagate, but my bucket is now serving securely.

## Generate photo versions

For each photo, I generated these versions:

- 1600px wide
- 1000px wide
- 1600px wide in webp
- 1000px wide in webp

I decided these sizes as the max-width of my site is around 800px. For a full-width image I'd want to double it for retina displays. I created the 1000px version for the occasion I use half-width images.

I created webp versions for fun, even though they don't have wide browser support.

For the time being, I'm using [Panic's Transmit](https://panic.com/transmit/) to sync my photos to my bucket. I'm currently working on a build script that will resize images and upload it to S3 for me (stay tuned 📺).

## Replace `img` with `picture`

Next, I replaced all instances of the `img` element with the `picture` element so I could take advantage of the `srcset` attribute.

To implement, I decided to create an include called `img.html`. I used my code editor's regex find and replace to swap out the `img` element for the new include in all my posts:

- Find: `<img([\w\W]+?)>`
- Replace: {% raw %}`{% include img.html $1 %}`{% endraw %}

For markdown images:

- Find: `(!\[(.*?)\]\()(.+?)(\))`
- Replace: {% raw %}`{% include img.html src='$3' alt='$2' class='' %}`{% endraw %}

Both regex searches keep all attributes intact, which means that I'm passing the original image's `src`, `alt`, `class` attributes as variables to the include.

The include contains logic and the `picture` element where the include will determine which size photo to display based on the classes that are passed through the include. You can [check out the include on GitHub](https://github.com/katydecorah/katydecorah.github.io/blob/68058c7316dbefde8f9a1eae5e0a94c83113911d/_includes/img.html).

## We'll see

I'm not sure how this new journey of hosting my assets on AWS will go or how my include will change or even the variety of photos sizes. Nevertheless, it was really fun figuring out all the pieces.
