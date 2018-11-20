---
title: Storing assets in an AWS bucket
category: code
emoji: ☁️
image: //yo.katydecorah.com/2018-11-04-photos-in-a-bucket-0.png
tags:
  - AWS
  - Jekyll
---


This is part II to [Download Flickr photos in your Jekyll posts](/code/flickr-to-jekyll) and a rundown of how I setup a subdomain that points at an AWS S3 bucket to host my site's assets. And https, too!

## Create a bucket

I started by creating a bucket on [S3](https://s3.console.aws.amazon.com/s3/home) to store my photos. To keep my bucket secure and allow me to test locally, I added a policy to [allow my IP address access](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-3). In the next step, I'll allow CloudFront to configure my bucket policies further.

## Make it https

Next, I followed these instructions to [serve HTTPS requests for my Amazon S3 bucket](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3/).

💡 When creating your SSL Certificate, under the **Add domain names** section, also add an `*` version of your domain. For example: `yo.katydecorah.com` and `*.katydecorah.com`.

I also pointed my subdomain at CloudFront bu copying the value of **Domain Name** from my distribution. Then from my domain host, I created a CNAME record that points at that CloudFront domain name. For example:
- type: `CNAME`
- host name: `yo`
- target name: `1234abcd.cloudfront.net`

## Secure assets to the domain

To keep my assets secure, I followed the steps on [How to Prevent Hotlinking by Using AWS WAF, Amazon CloudFront, and Referer Checking](https://aws.amazon.com/blogs/security/how-to-prevent-hotlinking-by-using-aws-waf-amazon-cloudfront-and-referer-checking/) (I used **Approach 1: A separate subdomain**).

Next, I followed these steps to [allow access to an Amazon S3 bucket only from a CloudFront distribution](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-access-to-amazon-s3/).

Now only my site can load my content, which keeps others from hotlinking my stuff and driving up my AWS bill.

## Create a custom error page

Now that CloudFront is blocking traffic to my bucket outside of my domain, I created an error page. I did this in CloudFount by clicking **Error Pages** and then **Create Custom Error Response**. From the dropdown I selected `403: Forbidden` and hit `Yes` on **Customize Error Response**. I entered a response path of `/oops.html` which is [a file](//yo.katydecorah.com/oops.html) I uploaded to my bucket.

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

The include contains logic and the `picture` element. The include determines which size photo to display based on the classes that are passed through to the include. When I'm developing locally, my site will use my AWS bucket's URL that my IP address can access (set by permissions when I created my bucket earlier).

You can [check out the include on GitHub](https://github.com/katydecorah/katydecorah.github.io/blob/d1b1cf784915115985ea88f99f32941213a63015/_includes/img.html).

## We'll see

I'm not sure how this new journey of hosting my assets on AWS will go, how my include will change, or the future of my photo sizes. Nevertheless, it was really fun figuring out all the pieces.
