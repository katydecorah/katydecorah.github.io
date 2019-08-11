---
title: Write to Airtable from a Slack command
category: code

image: 2018-12-11-airtable-to-slack-0.png
tags:
  - Node.js
  - API
  - Glitch
  - Airtable
  - Zapier
---

I built a Slack app that asks your workspace channel a random question every weekday. Members can submit questions via a Slack command if they wish. It's great for ice breakers, to spark conversation, or to have something to look forward to every morning.

The best part is that it's built on a few of my favorite tools:

- [Glitch](https://glitch.com) holds and executes all the code I wrote to make the app work.
- [Airtable](https://airtable.com) stores the data for the questions.
- [Slack](https://slack.com) is where the conversation happens.
- [Zapier](https://zapier.com) triggers the daily post.

<div class="photos">
{% include img.html src='2018-12-11-airtable-to-slack-1.png' alt="Slack messages from Quiggles: Would you accept $1 million today (tax free) if it meant that you forevermore have a 50/50 chance of mixing up salt and sugar in a recipe?" %}
</div>

Check out the [README on Glitch](https://glitch.com/edit/#!/quiggles?path=README.md:1:0) to learn how I set up each service for the app.

## Under the hood

### Adding questions

1. To submit questions, members use the Slack slash command: `/quiggles what's for lunch today?`
2. The Slack command triggers the Glitch project to [write the question as a row in the Airtable base](https://glitch.com/edit/#!/quiggles?path=workers.js:11:0).
3. Upon successful addition of the question, the member receives [an ephemeral Slack message](https://glitch.com/edit/#!/quiggles?path=workers.js:75:0) back.

### Asking questions

1. I created a Zapier zap that will run at 11 am every weekday. It's action is to [POST to a webhook URL](https://glitch.com/edit/#!/quiggles?path=index.js:42:0) that's pointed at my Glitch project.
2. Once my project receives an authorized message from Zapier, it will pull all the rows from my Airtable base and [select a random question](https://glitch.com/edit/#!/quiggles?path=workers.js:27:0) (that hasn't been asked yet).
3. Next, my project [marks the selected question as asked](https://glitch.com/edit/#!/quiggles?path=workers.js:55:0) by timestamping the `date_asked` column in Airtable.
4. Finally, Quiggles [posts the question in Slack](https://glitch.com/edit/#!/quiggles?path=workers.js:93:0).

I dive deeper into how I setup each service in the [README of the Glitch project](https://glitch.com/edit/#!/quiggles?path=README.md:1:0).

And in case you're wondering, I wouldn't take the million dollars. I love treats too much to be disappointed 50% of the time.
