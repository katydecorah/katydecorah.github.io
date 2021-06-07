---
title: Improving documentation through failed search queries
image: ""
tags:
  - JavaScript
  - Mapbox
---

At Mapbox, we use Swiftype for our onsite search. Swiftype provides an analytics dashboard so that you can get an idea of how many searches overall and popular search queries are happening on your site. Swiftype also provides the metric: percent of searches with no results. This number shows out of all the searches, the percent of queries that returned no results. You can also see the top queries with no results and the count of times it was searched.

The searches with no queries data is valuable since it clues us into what users want and how they describe them.

When the documentation team started define our operational metrics, we found this this percent of searches with no results attractive. And by attractive, I mean it was a number and we could say how high we did and didn't want it to go and call it a threshold. So we did.

Each week a Lambda function shares last week's search analytics to a GitHub issue and then we would triage any top queries with no results as needed. This went on for a couple years, until suddenly our percent of searches with no results went above our threshold. We combed through the top queries with no results to see if we could bat the percentage down. We added content and created synonyms for queries in Swiftype, but the percentage remained high.

After suggesting that we increase our threshold, my team pointed out, that if we need to raise the threshold, then it's probably not the right metric.

## Evolution of a metric

I went to the drawing board and started to sketch out what an alternative could look like. Using Swiftype's analytics API, I wrote a script that ran once a day and push all the top queries with no results to a Sentry project. The problem with this solution was that the data was delayed and it still didn't feel meaningful.

We were missing the user.

In Swiftype analytics, the count of each queries with no results does not distinguish how many users entered the query. So this means, a single person could search `cool maps` 40 times and that would show up in our analytics dashboard and spike our percentage of searches with no results.

## Userless data is useless

Instead of the daily script, we updated our search component so that once the user enters a search with no results, the search component will send an event to Sentry.

Now we have live data, a user count, and a system for accountability.

## Crafting the threshold

We created an alert in Sentry based on the number of users per week that searched for the same query with no results and monitored it for several weeks. Each time we received an alert, we added it to a Google doc and debated if we should ignore it (accept that the search queries is out of scope for our documentation) or resolve it (add content or adjustments in Swiftype to create results for the query).

By doing this exercise and involving the entire team, we were able to craft our criteria for triaging the alert. We also were able to make adjustments to our threshold to find the sweet spot of just enough alerts.

## Your failed searches improve the docs

It may be too cheeky to update our search component's empty result message to thank the user for improving the docs, but it's true!
