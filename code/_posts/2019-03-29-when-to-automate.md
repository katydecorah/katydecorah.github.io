---
title: When to automate
image: 2019-03-29-when-to-automate.jpg
emoji: 🤖
---

You will know if you have a candidate for an automation when you have: [a frequent manual process](#1-frequent-manual-process), [consistent data](#2-consistent-data), and [a trigger](#3-a-trigger).

## 1. Frequent manual process

The _frequent_ part in frequent manual process is whatever allows you to get the job done. Here are a few examples of some manual processes you may see in your day to day:

- Every week I update a GitHub ticket with data from a Google Spreadsheet.
- Every day I need to know how many people are going to be in the office, including visitors.
- I need to know who at the company has anniversary next month and how many years so we can order them a personalized cake.

## 2. Consistent data

Having a consistent data source can make or break your ability to automate. Check to see that your data:

- Lives on an application or service that has an API.
- Has attributes or identifiers that will allow you to get return data. For example, if you need to trigger an event based on a specific date, then you need to find a date field in your data.

## 3. A trigger

Your automation needs a trigger to know when to run its code. Your automation could run on a schedule:

- Every 5 minutes
- The first Monday of the month
- Every day at 5:30 pm Pacific Time

Or your automation can run in response to another event. For example, if you send a tweet with a hashtag, then you could trigger an automation to save the contents of that tweet to a spreadsheet.

## Should I build it custom?

Services like [Zapier](https://zapier.com/), [IFTTT](https://ifttt.com/), and [Apple's Shortcuts](https://itunes.apple.com/us/app/shortcuts/id915249334?mt=8) that can make automation as easy as connecting your account and clicking a few buttons. [Slack](https://www.slack.com/apps) also offers built-in features and apps to help automate processes.

I recommend seeing if there's already a service available that can do the automation you're looking for before creating something from scratch.

You should create a custom automation when a service doesn't connect the processes you need, in a way that you need them to, or if you have any privacy concerns.

## Where can I host a custom automation?

You have a lot of options to host your code and schedule it or listen for changes. Here are a couple that I've worked with personally:

- [Amazon Web Services (AWS)](https://console.aws.amazon.com/) - You can upload your code to an S3 bucket and then use a Lambda for trigger and/or schedule it. Examples:
  - [Make your Slack status the weather forecast](/code/weather-status/)
  - [Building a chillbot](/code/chillbot/)
- [Glitch](https://glitch.com/) - You can create an Express app that can listen for changes to a webhook. Examples:
  - [Create a mood ring with Glitch, Slack, and LIFX](/code/mood-ring/)
  - [Write to Airtable from a Slack command](/code/slack-to-airtable/)

## Is my automation helpful?

You should regularly check-in with your automation to make sure it still accomplishes your goal, especially in the company of others.

- **Does the automation add value or noise?** If your automation posts too often or presents wrong information, users will begin to distrust it and ignore it. Evaluate your automation for quality over quantity.
- **Does it fit into your workflow or are you working around it?** Your automation should work with your workflow. Make adjustments to make interacting and working with the automation easier for all.

Finally, have a work-in-progress mindset with your automation. Your workflows and productivity constantly change, so should your automation. Ask for colleagues for feedback and see how others interact with your automation, and then iterate.
