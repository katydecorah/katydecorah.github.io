---
title: Organizing a conference with bots
category: notes
image: https://cloud.githubusercontent.com/assets/2180540/17576600/6ad2076e-5f42-11e6-8b3a-d2ca29823192.png
tags:
- Ela Conf
---

Last year, [Ela Conf](http://elaconf.com) organizers and I relied on Google Forms for women to submit anything from talks to volunteer applications. Forms worked well for us, but reviewing abstracts in a spreadsheet wasn't exactly a fun thing to do. With the help of [Zapier](https://zapier.com/), I created some efficient little bots that keep us organized and motivated.

## Volunteer, proposals, and grant bot

Every time someone submits a volunteer application or an abstract, a new GitHub issue is created in our private repo and then our organizer Slack channel receives a ping:

![abstract](https://cloud.githubusercontent.com/assets/2180540/17576762/664883c4-5f44-11e6-8a1b-f8c644526672.png)


![volunteerbot](https://cloud.githubusercontent.com/assets/2180540/17576748/3b4f1bd8-5f44-11e6-946d-2cc2c0290260.png)


:raising_hand: **Under the hood:** First, I created a GitHub account @elaconfbot (so as to not inflate my GitHub graph, make it clear that I'm not creating new issues, and because bots are cute). I made a zap in Zapier that will submit a new GitHub issue by @elaconfbot once a new row in the form's spreadsheet is added (aka someone fills out the form). We also have a Slack integration that watches the repo for new issues.

With Zapier, you can also assign labels and even add issues to milestones as someone submits a form. Now instead of reading a spreadsheet, we'll be able to comment on each abstract and use all of GitHub's organizational features. I absolutely adore this workflow.

We have this workflow set up for all of our forms:

![image](https://cloud.githubusercontent.com/assets/2180540/17576807/d451df46-5f44-11e6-8736-f3c6d60ff112.png)


## Welcomebot

Every time a someone requests to join our Slack channel, we get pinged in our organizer channel:

![welcomebot](https://cloud.githubusercontent.com/assets/2180540/17576722/d80304d6-5f43-11e6-9057-83af82176149.png)

:wave: **Under the hood:** Zapier listens for additions to the spreadsheet and sends a message to our Slack channel. We can now add women to our community even faster!

![image](https://cloud.githubusercontent.com/assets/2180540/17576797/bc0f2f92-5f44-11e6-9bfe-addc4bd3547c.png)


## Ticketbot

Every time someone buys a ticket, we get pinged in our organizer channel:

![ticketbot](https://cloud.githubusercontent.com/assets/2180540/17576736/0d04adce-5f44-11e6-9bcb-2559e892fe3d.png)

:ok_woman: **Under the hood:** I created a catch hook in Zapier and entered it in [nvite](https://nvite.com)'s RSVP webhook setting (thanks for being a sponsor, nvite!) as the trigger. I think this is our favorite bot!

![image](https://cloud.githubusercontent.com/assets/2180540/17576784/9cc48722-5f44-11e6-91ce-82e893ffbf30.png)


## Bots, bots, and more bots

Every time we get a ping from our :raising_hand: :wave: :ok_woman: bots, we all get excited. Seeing women wanting to participate with and at Ela Conf in real-time is much more magical and meaningful than I think we all anticipated.

It's also going to be fun watching @elaconfbot's contribution graph:

![contributions](https://cloud.githubusercontent.com/assets/2180540/17576770/84f44ea2-5f44-11e6-8be1-3b62e5a81bca.png)

Can you tell when we opened our [call for proposals](http://elaconf.com/proposals/)?

My next challenge will be building an anonymous feedback system for our speakers. I have a suspicion that it will involve some type of form, GitHub, and then some type of delivery service. I cannot wait to get started!

If you enjoyed this post, love bots, awesome systems, and advancing women in tech, please consider [becoming an Ela Conf sponsor](http://elaconf.com/sponsor/)!

