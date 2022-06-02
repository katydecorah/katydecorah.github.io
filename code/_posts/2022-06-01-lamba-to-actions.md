---
title: Switch from Lambda to GitHub Actions
image: 2022-06-01-lamba-to-actions.png
tags:
  - GitHub
---

This year I migrated my scheduled bots (like [Weatherbot](https://github.com/katydecorah/weatherbot/pull/21/files) and [Weather status](https://github.com/katydecorah/weather-status/pull/11)) from using AWS Lambda to [GitHub Actions](https://docs.github.com/en/actions).

- **Everything in one place.** The biggest motivation for the move was to have the code and workflow all in one place. Actions will run on the last commit to the default branch unless otherwise configured. No more committing code to GitHub and then uploading it to AWS.
- **Readable workflows**. I think writing an [Action workflow](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) is far more enjoyable and readable than an [AWS CloudFormation template](https://docs.aws.amazon.com/cloudformation/index.html). Similarly, I have found Actions requires fewer resources and configurations than AWS.
- **Helpful bundlers**. Since GitHub requires that you [commit `node_modules`](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github) along with your script, I use [@vercel/ncc](https://github.com/vercel/ncc) to bundle the code. I like letting ncc handle that piece.
- **Secrets!** With Actions you can [create and reference secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) in your repository. While you can also do this in AWS, I found the process much easier and approachable with Actions, especially when you need to rotate tokens.
- **Cron schedules.** Like Lambda, Actions offers [cron scheduling](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) among its many triggers.
- **Step-by-step.** Since actions are modularized into steps, an action is singular and plural. I can chain together other actions or run a shell script.
- **Workflows to update workflows.** I love that you can use [Dependabot to keep actions up-to-date](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/keeping-your-actions-up-to-date-with-dependabot).

Actions wins at fast testing and iteration. As soon as I commit code, I can see if my workflow succeeded (or failed) within a minute. All that adds to the delight of building something new.
