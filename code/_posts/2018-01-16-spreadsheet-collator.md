---
title: Collate Google Form responses into Google Docs
image: 2018-01-16-spreadsheet-collator-0.png
tags:
  - Node.js
  - API
  - Ela Conf
  - Google Sheets
---

For [Ela Conf](https://elaconf.github.io/) 2016 and 2017, we created a Google Form to collect speaker feedback. The form had the following fields:

- For which session are you leaving feedback? (A select box with all the possible talks)
- What did you learn?
- What did you find confusing?
- What's one thing the speaker(s) can improve their talk for next time?

We then read through the responses, summarized them into a personal repository for each speaker, and then sent the feedback to each speaker after the conference.

Reading through a spreadsheet with 290 rows with feedback for 20 sessions wasn't going to be fun, so I wrote [spreadsheet-collator](https://github.com/katydecorah/spreadsheet-collator/) that would:

1. [Read the spreadsheet.](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L16-L35)
2. [Group the data based on the talk title.](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L42)
3. [Format the data.](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L87-L96)
4. [Write the data to its own Google Doc file.](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L62-L85)

The script worked beautifully and saved us loads of time. Here's how you can use it:

## Create your form

Create your form in Google Sheets. (For this example, I made a vegetable feedback form.)

{% include img.html src='2018-01-16-spreadsheet-collator-1.png' alt='Screenshot of a Google Form' class='img-full' width='1600' height='969' %}

Once you create the form, click the "Responses" tab and then the Google Sheets icon to create a Google spreadsheet to store your data.

While you have your spreadsheet open, you'll want to jot down a few credentials:

- The spreadsheet ID, which is that string of characters in the URL:

{% include img.html src='2018-01-16-spreadsheet-collator-2.png' alt='Screenshot of Google spreadsheet ID' class='img-full' width='1600' height='969' %}

- The spreadsheet range, which is the tab name and cell ranges you want to read. For this example we want `Vegetable Feedback!B:D`:

{% include img.html src='2018-01-16-spreadsheet-collator-3.png' alt='Screenshot of Google spreadsheet range' class='img-full' width='1600' height='969' %}

- The name of the column header that holds the rows that will be the titles of your Google docs:

{% include img.html src='2018-01-16-spreadsheet-collator-4.png' alt='Screenshot of Google spreadsheet header row' class='img-full' width='1600' height='969' %}

## Create a Google Drive folder

Create a folder in Google Drive that will ultimately be the home for the docs. You can also store your form and form response spreadsheet here.

{% include img.html src='2018-01-16-spreadsheet-collator-5.png' alt='Screenshot of a Google Drive folder' class='img-full' width='1600' height='969' %}

While you're here, you also want to jot down the folder's ID, which is that string of characters in the URL:

{% include img.html src='2018-01-16-spreadsheet-collator-6.png' alt='Screenshot of Google Drive Folder ID' class='img-full' width='1600' height='969' %}

## Configure the collator

After you've cloned the [spreadsheet-collator repository](https://github.com/katydecorah/spreadsheet-collator/), open up [config.js](https://github.com/katydecorah/spreadsheet-collator/blob/master/config.js), and update the config with the values you collected above.

## Run the collator

Following the steps in the [README](https://github.com/katydecorah/spreadsheet-collator#authenticate-and-run), you'll need to first authenticate your account so that script can access your spreadsheet and create files. Then you can [run the collator](https://github.com/katydecorah/spreadsheet-collator#run-the-script).

{% include img.html src='2018-01-16-spreadsheet-collator-7.png' alt='Screenshot of Terminal' class='img-full' width='1472' height='1018' %}

Open up your Google Drive folder to see your freshly created documents:

{% include img.html src='2018-01-16-spreadsheet-collator-8.png' alt='Screenshot of Google Drive folder with docs' class='img-full' width='1600' height='969' %}

And then open up a doc to see your collated data:

{% include img.html src='2018-01-16-spreadsheet-collator-9.png' alt='Screenshot of Google doc' class='img-full' width='1600' height='969' %}

## Customize the collator

This script is great for sorting comments and with a little editing it can process other types of data.

Try [editing this section](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L87-L96) to change the output the your docs. For example, you can add text or calculate and then display the average for a quantitative question.

Happy collating!
