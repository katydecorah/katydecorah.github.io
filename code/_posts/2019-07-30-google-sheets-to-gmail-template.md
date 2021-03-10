---
title: Create emails from a Google spreadsheet and Google doc template
image: 2019-07-31-email-0.png
tags:
  - JavaScript
  - API
  - Google Sheets
  - Google Docs
---

Last year I wrote about how to [create emails from a Google spreadsheet](/code/google-sheets-to-gmail/). I'm going to show you how to simplify the process by creating your email template in a [Google doc](https://docs.google.com/).

## Find your variables

Look at your spreadsheet and find the variables that you will use in your template. These variables are the first row of your table. In the example below, my variables are `Name`, `Email`, `Type`, and `Recipe`.

<div class="photos">
{% include img.html src="2019-07-31-email.png" alt="Spreadsheet example where Name, Email, Type, and Recipe are all column names" width="2076" height="1240" %}
</div>

💡 Make sure your spreadsheet header has unique titles.

## Write your email template

Write your email template in a Google doc. Replace the words that you want to personalize with data from your spreadsheet with their variable name wrapped in curly brackets. For example, "Hi Katy" becomes "Hi {Name}".

<div class="photos">
{% include img.html src="2019-07-31-email-2.png" alt="Email template in Google doc" width="2076" height="1240" %}
</div>

## Get your Google doc ID

Look at the URL for your Google doc and copy the sequence of letters and numbers after `/d/` and until the next `/`. See the highlighted string in the URL bar in the image below. This is your document's ID, you'll need it later.

<div class="photos">
{% include img.html src="2019-07-31-email-doc-id.png" alt="Find the Google doc ID" width="2076" height="1240" %}
</div>

## Open the Script Editor in Google Sheets

Open up the tab of a Google spreadsheet that has your data.

1. Click `Tools > Script editor...` from the toolbar.
2. Replace the code in the `Code.gs` tab with [the following script](https://gist.github.com/katydecorah/34054b8d241265d18c068fbf413056e3).
3. Edit the first few lines of the script:
   - `googleDocId` - Paste in your Google doc's ID number that you found earlier.
   - `emailField` - Enter the column header name that holds the email addresses, for me, it's `Email`.
   - `emailSubject` - Enter the subject line you want to send. You can use variables from your spreadsheet or keep it static.
   - `emailStatus` - Enter the column header name that will serve as a status indicator that your email was drafted, for me, it's `Date drafted`. This will prevent duplicates if you run the script again.
4. Click the save icon or click `File > Save` from the toolbar.
5. Enter a project name, such as "Email drafter".

<div class="photos">
{% include img.html src="2019-07-31-email-edit-script.png" alt="Google doc id" width="2130" height="1296" %}
</div>

## Run the script

<div class="photos">
{% include img.html src="2019-07-31-email-send.png" alt="Google doc id" width="2130" height="1296" %}
</div>

When you're ready to draft your emails:

1. Click the `Select Function` dropdown and select `draftMyEmails`.
2. Click the play button and authenticate your account.
   - A window should appear, click “Review Permissions.” Select the account you want to authenticate.
   - You may get a warning since this isn’t an official script. Review the code to get an idea of how it works and how it will interact with your account. Once you feel comfortable, from the warning screen, click “Advanced” then “Go to Email drafter (unsafe)” (or whatever you named your script). This will get you through to the next screen. Click “Allow” to grant the script access to the stated parts of your account.
3. Check your spreadsheet, the column you indicated as your `emailStatus` should have today's date.
4. Open Gmail and check your drafts folder. You should see emails that are ready for you to send.

<div class="photos">
{% include img.html src="2019-07-31-email-6.png" alt="Google doc id" width="2076" height="1240" %}
</div>

If something didn't send properly, double check that your spreadsheet column rows match the variables in your Google doc exactly.
