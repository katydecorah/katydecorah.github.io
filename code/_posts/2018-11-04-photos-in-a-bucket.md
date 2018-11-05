---
title: Storing assets in an AWS bucket
category: code
emoji: ☁️
image: https://yo.katydecorah.com/2018-11-04-photos-in-a-bucket-0.png
tags:
  - AWS
  - Jekyll
---

This is part II to [Download Flickr photos in your Jekyll posts](/code/flickr-to-jekyll) and a rundown of how I setup a subdomain that points at an AWS S3 bucket to host my site's assets. And https, too!

## Create a bucket

I started by creating a bucket to store my photos. I used [this policy on my bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html#root-domain-walkthrough-s3-tasks) that would give read access to my bucket but not publicly list everything in my bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::bucket-name/*"]
    }
  ]
}
```

## Set static site hosting

From my S3 bucket, I clicked **Properties** > **Static website hosting**. I chose **Use this bucket to host a website** and entered `index.html`. (I completed the configuration in the next step.)

I also uploaded an `index.html` to my bucket.

## Make it https

Next, I followed these instructions to [serve HTTPS requests for my Amazon S3 bucket](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3/). In addition to following the instructions, I made sure to:

1. Set the **Default Root Object** to `index.html`. This will connect the page I uploaded in the last step.
2. Under **Viewer Protocol Policy** I selected `Redirect HTTP to HTTPS`.
3. Point my subdomain at CloudFront.
   - Once I created my CloudFront distribution, I copied the value of **Domain Name**.
   - From my domain host, I created a CNAME record that points at that CloudFront domain name. For example:
     - type: `CNAME`
     - host name: `yo`
     - target name: `1234abcd.cloudfront.net`

It took a few hours for the changes to propagate, but my bucket is now serving securely.

## Secure assets to the domain

To keep my assets secure, I followed the steps on [How to Prevent Hotlinking by Using AWS WAF, Amazon CloudFront, and Referer Checking](https://aws.amazon.com/blogs/security/how-to-prevent-hotlinking-by-using-aws-waf-amazon-cloudfront-and-referer-checking/). I used **Approach 1: A separate subdomain** and it appears to be working as expected. Earlier I tried adding policies to my bucket to restrict my assets to the domain, but had difficulty getting it just right. I'll circle back to this section if I discover improvements or missteps.

## Generate photo versions

For each photo, I created these versions based on the max-width of my site:

- 1600px wide
- 1600px wide in webp
- 1000px wide
- 1000px wide in webp

For the time being, I'm using [Panic's Transmit](https://panic.com/transmit/) to sync my photos to my bucket. I'm currently working on a build script that will resize images and upload it to S3 for me (stay tuned 📺).

## Replace `img` with `picture`

As a last step, I replaced all instances of the `img` element with `picture` so I could use `srcset`.

To implement, I decided to create an include called `img.html`. I used my code editor's regex find and replace to swap out the `img` element for the new include in all my posts:

- Find: `<img([\w\W]+?)>`
- Replace: {% raw %}`{% include img.html $1 %}`{% endraw %}

For markdown images:

- Find: `(!\[(.*?)\]\()(.+?)(\))`
- Replace: {% raw %}`{% include img.html src='$3' alt='$2' class='' %}`{% endraw %}

Both regex searches keep all attributes intact, which means that I'm passing the original image's `src`, `alt`, `class` attributes as variables to the include.

The include contains logic and the `picture` element where the include will determine which size photo to display based on the classes that are passed through the include. You can [check out the include on GitHub](https://github.com/katydecorah/katydecorah.github.io/blob/68058c7316dbefde8f9a1eae5e0a94c83113911d/_includes/img.html).

## We'll see

I'm not sure how this new journey of hosting my assets on AWS will go, how my include will change, or the future of my photo sizes. Nevertheless, it was really fun figuring out all the pieces.
