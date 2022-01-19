---
title: Improve documentation with failed searches
image: 2021-06-12-improve-documentation-with-failed-searches.png
tags:
  - Mapbox
---

Do you track searches with no results on your site? To the Mapbox documentation team, it's an interesting dataset. We can learn what the user wants, but cannot find, and then turn those failed searches into improvements.

Sometimes a user will search for a JavaScript framework that we don't have an example for yet or they use different phrasing. We can then add content or a synonym set so the user can find what they want.

Our team recently improved how we triage searches with no results. By focusing on improving data quality, response time, and holding ourselves accountable, we are building a more meaningful solution to improving documentation with failed searches.

## Is this a metric?

When we added search to all documentation pages, we wanted track it in our team's operational metrics. Our search provider's insights dashboard informs us of the percent of searches with no results along with a list of these searches. We thought this percent of searches with no results was a good metric. And by good, I mean it was a number and we could say how high we did and didn't want it to go and call it a metric. So we did.

Each week a Lambda function shared last week's search analytics to a GitHub issue and then we triaged any top queries with no results as needed. This went on for a couple years.

And then our percent of searches with no results went above our threshold and we couldn't bring it back down. We added content and configured our search engine, but it didn't budge. After suggesting that we increase our threshold, my team pointed out that if we need to raise the threshold, then it's not the right metric.

## What makes a metric good?

Ultimately, your metrics must be meaningful to your systems and users. In our case we learned that:

- **An issue is reported as it happens.** If the reporting is delayed, then your response will always be delayed.
- **An issue is counted by the number of users.** When working with users, focus on quantifying how many of them are affected rather than how many events they generated. While the number events can be helpful, if you can't quantify users then it will be difficult to assess your response.
- **A system of accountability to respond to issues.** Your team needs a system to hold you accountable to responding to issues, ideally through automation and alerts.

At the time, our metric did not meet any of these standards.

## Improving the metric

We brainstormed what an alternative could look like and considered a system like [how we track 404s](/code/monitor-404s-with-sentry/). After some iteration, we learned that our search provider's data was not meaningful because it did not distinguish how many users entered each search with no results. Userless data is useless.

We stepped away from our search provider's analytics and updated our search component to send an event to Sentry as soon as the user completes a search with no results. With Sentry, our data was suddenly enriched. Not only did we have a user and event count for each search, we also know what page they searched on.

Instead of tracking the percent of searches with no results, our team now has a service license agreement (SLA) for triaging searches with no results.

## Debating our way to alert response documentation

In Sentry, we created an alert based on the number of users per week that searched for the same query with no results and monitored it for several weeks. Each time we received an alert, we added it to a Google doc and debated if we should ignore it (it's out of scope) or resolve it (add content or configurations to create results).

By doing this exercise and involving the entire team, we documented our criteria for handling the alert. This also gave us time to make adjustments to the threshold.

## Your failed searches improve the docs

It may be cheeky to thank users for improving documentation every time their search returns no results, but the sentiment true. It's a valuable dataset that helps us see our product through the users's eyes.
