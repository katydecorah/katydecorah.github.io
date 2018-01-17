---
title: Collate Google Form responses into Google Docs
category: code
image: https://c1.staticflickr.com/5/4607/27955743299_c8ae637d85_o.png
tags:
- API
- workflow
- Ela Conf
---

For [Ela Conf](http://elaconf.com) 2016 and 2017, we created a Google form to collect speaker feedback. The form had the following fields:

+ For which session are you leaving feedback? (A select box with all the possible talks)
+ What did you learn?
+ What did you find confusing?
+ What's one thing the speaker(s) can improve their talk for next time?

We then read through the responses, summarized them into a personal report for each speaker, and then sent the feedback to each speaker after the conference.

Reading through a spreadsheet with 290 rows with feedback for 20 sessions wasn't going to be fun, so I wrote [spreadsheet-collator](https://github.com/katydecorah/spreadsheet-collator/) that would:

1. [Read the spreadsheet.](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L16-L35)
2. [Group the data based on the talk title.](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L42)
3. [Format the data.](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L87-L96)
4. [Write the data to its own Google Doc file.](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L62-L85)

The script worked beautifully and saved us loads of time. Here's how you can use it:

## Create your form

Create your form in Google Sheets. (For this example, I made a vegetable feedback form.)

![Screenshot of a Google Form](https://c1.staticflickr.com/5/4629/39734271961_330feb9a1a_o.png)

Once you create the form, click the "Responses" tab and then the Google Sheets icon to create a Google spreadsheet to store your data.

While you have your spreadsheet open, you'll want to jot down a few credentials:

1. The spreadsheet ID, which is that string of characters in the URL:
![Screenshot of Google spreadsheet ID](https://c1.staticflickr.com/5/4707/39702871512_674448cc63_o.png)
2. The spreadsheet range, which is the tab name and cell ranges you want to read. For this example we want `Vegetable Feedback!B:D`:
![Screenshot of Google spreadsheet range](https://c1.staticflickr.com/5/4631/39702871792_ee4d2daf2c_o.png)
3. The name of the column header that holds the rows that will be the titles of your Google docs:
![Screenshot of Google spreadsheet header row](https://c1.staticflickr.com/5/4662/39734272281_47ce959bb8_o.png)

## Create a Google Drive folder

Create a folder in Google Drive that will ultimately be the home for the docs. You can also store your form and form response spreadsheet here.

![Screenshot of a Google Drive folder](https://c1.staticflickr.com/5/4661/39734272331_af7926a36c_o.png)

While you're here, you also want to jot down the folder's ID, which is that string of characters in the URL:

![Screenshot of Google Drive Folder ID](https://c1.staticflickr.com/5/4650/24864818327_42066d52b2_o.png)

## Configure the collator

After you've cloned the [spreadsheet-collator repo](https://github.com/katydecorah/spreadsheet-collator/), open up [config.js](https://github.com/katydecorah/spreadsheet-collator/blob/master/config.js), and update the config with the values you collected above.

## Run the collator

Following the steps in the [README](https://github.com/katydecorah/spreadsheet-collator#authenticate-and-run), you'll need to first authenticate your account so that script can access your spreadsheet and create files. Then you can [run the collator](https://github.com/katydecorah/spreadsheet-collator#run-the-script).

![Screenshot of Terminal](https://c1.staticflickr.com/5/4751/39734272401_73e655c530_o.png)

Open up your Google Drive folder to see your freshly created documents:

![Screenshot of Google Drive folder with docs](https://c1.staticflickr.com/5/4711/39702871972_5319836e8a_o.png)

And then open up a doc to see your collated data:

![Screenshot of Google doc](https://c1.staticflickr.com/5/4758/24864818507_6ea0f68953_o.png)

## Customize the collator

Off the shelf, this script is great for sorting comments. And with a little editing, it can process other types of data. You can [edit this section](https://github.com/katydecorah/spreadsheet-collator/blob/59e312affe5ac32eabf47a879cc7f1cdcea3bbc4/index.js#L87-L96) to customize the output for each doc. Perhaps you want to add additional text to each doc or you want to calculate and then display the average for a quantitative question.
