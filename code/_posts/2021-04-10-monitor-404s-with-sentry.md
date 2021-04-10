---
title: Monitor 404s with Sentry
image: 2021-04-10-monitory-404s-with-sentry.png
tags:
  - JavaScript
  - Mapbox
---

Since moving to the documentation team at Mapbox at the end of 2018, I've helped solved a lot of fun problems, but haven't written about them. Let's change that.

One of my first projects on the documentation team was to add tests to all site repositories to assert our style guide and do quality assurance checks. While we added tests to assert that all internal links return a 200 status code, we also wanted a monitoring system to complete the circle.

## CloudFront and the 2 am wake up call

At first, we used CloudFront to alarm when our 400 error rate went above a certain threshold, but the alarms were almost always false positives. It's common for web crawlers to scan sites and try paths that may not exist. For example, we would see alarms on paths known to a WordPress configuration. While it was true those paths did not exist, the result was an alarm that was not meaningful to our stack.

Ultimately, we wanted to know when someone landed our 404 page. That's when the solution to use Sentry came to mind.

## Sentry as an error generation tool

We already used [Sentry](https://sentry.io/) for JavaScript error monitoring, but then realized that we don’t have to wait for a user to find an error for it to be reported in Sentry.

We set up our 404 page to automatically send an issue to Sentry on page load, here's how we did that:

1. We created a new project in Sentry specifically for our 404 issues.
2. From the 404 page, we initialized our Sentry project and send an issue to Sentry on page load. The issue includes:

- A [custom tag](https://docs.sentry.io/platforms/javascript/enriching-events/tags/) for the referrer, which is important for understanding where the broken link originated.
- A [fingerprint to group issues](https://docs.sentry.io/product/sentry-basics/guides/grouping-and-fingerprints/) by path, which is important for creating alarms.

3. In Sentry, we created an alarm that will sound if more than 10 users see the same 404 path in a week. This threshold better tuned us into the health of our pages.

It's also convenient that we can ignore issues in Sentry. If we remove a page and it has no suitable redirect, our policy is to allow the page to 404 to set the expectation that the content no longer exists.

## It just works

Since introducing Sentry to our 404 page, nearly two years ago, we have caught issues before users and our team members. But, more importantly, no false alarms.
