---
title: Building a WeatherBot

image: 2017-02-22-weatherbot-0.jpg
tags:
  - Node.js
  - AWS
  - API
---

We live in Upstate New York so there's snow and it's kind of pain for J to plow the driveway if our cars are in the way. I built a little Slack bot that runs three times a day (7 am, 1 pm, and 7 pm). And if there will be more than one inch of snow in the next 12 hours then [WeatherBot](https://github.com/katydecorah/weatherbot) will ping our Slack:

{% include img.html src='2017-02-22-weatherbot-1.jpg' alt='WeatherBot Slack Post' class='img-full' width='1362' height='136' %}

## How it works

1. Using the [Dark Sky API](https://darksky.net/dev/), I [run through the hourly data](https://github.com/katydecorah/weatherbot/blob/bfef0af2650e42c7fcee960ac615de680b6987c2/index.js#L29) for the next 12 hours.
2. During each hour, if the forecast shows precipitation which is snow, _and_ the snow will accumulate, then [start adding up the accumulation](https://github.com/katydecorah/weatherbot/blob/bfef0af2650e42c7fcee960ac615de680b6987c2/index.js#L32-L34).
3. If there's more than 1 inch of snow during the next 12 hours, then [post to Slack](https://github.com/katydecorah/weatherbot/blob/bfef0af2650e42c7fcee960ac615de680b6987c2/index.js#L41-L47).

## How it runs

WeatherBot uses three [AWS resources](https://aws.amazon.com/):

1. [**S3**](https://aws.amazon.com/s3/) - I deploy and host the code here.
2. [**CloudFormation**](https://aws.amazon.com/cloudformation/) - I created a [CloudFormation template](https://github.com/katydecorah/weatherbot/blob/master/cloudformation/weatherbot.template.json) that defines the variables and the functions that Lambda will need to run my code.
3. [**Lambda**](https://aws.amazon.com/lambda/) - Lambda handles [running my code](https://github.com/katydecorah/weatherbot/blob/bfef0af2650e42c7fcee960ac615de680b6987c2/cloudformation/weatherbot.template.json#L113-L126) at the days and times I've defined. (The CloudFormation template does me a solid by configuring Lambda for me.)

[Browse the code!](https://github.com/katydecorah/weatherbot)

And now we get to sit back and wait for :snowflake: and then park our cars good.
