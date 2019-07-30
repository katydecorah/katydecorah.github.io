---
title: Create emails from a Google spreadsheet
image: 2018-01-06-google-sheets-to-gmail-0.png
tags:
  - JavaScript
  - API
  - Ela Conf
  - Google Sheets
emoji: 📨
---

For this past [Ela Conf](//elaconf.com), we had a record number of proposals submitted, which also (unfortunately) meant a record number of rejection emails we need to send. In the past, we sent these individually, but the sheer volume was going to take hours. We didn't want to send a mass email because it was important to us to address the proposal submitter by their name and reference their submitted talk title(s).

I found [a tutorial](https://developers.google.com/apps-script/articles/sending_emails) that can send emails from a Google spreadsheet and it worked well for us.

I repurposed this script once again at Mapbox as part of our Gender Minority Employee Resource Group's mentorship program. We matched 64 pairs and we used this script to send an email to introduce the mentor and mentee. This time I updated the script to draft emails so that we could check each email before we sent it out.

I love [this script](https://gist.github.com/katydecorah/e956c783965e65f1e53b2b2b1f3a22e0) because it feels like you're creating [Mad Libs](http://www.madlibs.com/).

<style> .gist-data {max-height: 300px;} </style>

<script src="https://gist.github.com/katydecorah/e956c783965e65f1e53b2b2b1f3a22e0.js"></script>

Here's how you can use it.

## Set up your spreadsheet

At the least, you'll need a row to hold the email addresses. From there, you'll want to store data in separate rows, for example, a row for the person's name and other specific information that you'd like to pop into a template. This script also assumes that your first row of data has titles for each column.

Add one last column to your spreadsheet called "Email status" or similar. You'll use this column in the script to state if an email has already been drafted or sent to keep the script from creating duplicates.

For this example, I've created a fake business that matches you with a vegetable. New year, new me.

{% include img.html src='2018-01-06-google-sheets-to-gmail-1.png' alt='Screenshot of Google spreadsheet with sample data' class='img-half' %}

## Set up the script

Open up the tab of a Google spreadsheet that has your data.

1. Click `Tools > Script editor...` from the toolbar.
2. Replace the code in the `Code.gs` tab with [the following script](https://gist.github.com/katydecorah/e956c783965e65f1e53b2b2b1f3a22e0#file-script-js).
3. Click the save icon or click `File > Save` from the toolbar.
4. Enter a project name, such as "Draft emails".

## Customize the script

Make the script your own by specifying which columns have which data, assigning variables, and using those variables to weave together your message.

Check out the [createDraft documentation](<https://developers.google.com/apps-script/reference/gmail/gmail-app#createDraft(String,String,String)>) to learn about more options. For example, you can cc or bcc others on the emails or add a reply-to address.

I set up the current script to create drafts. If you'd prefer the script to send emails instead, swap out the `GmailApp.createDraft()` function with:

```js
MailApp.sendEmail(
  "hello@email.com", // recipient
  "To my subscribers", // subject
  "Dear subscriber,\nI love you.\nYours,\nKaty" // body
);
```

Check out the [sendEmail documentation](https://developers.google.com/apps-script/reference/mail/mail-app#sendemailrecipient-subject-body) to learn about more options you can use to send emails with this function.

## Authenticate the script

The first time you run the script you'll need to grant permission for it to read the spreadsheet and then draft or send emails from your Gmail account:

1. Click the play icon or click `Run > Run function > draftMyEmails` from the toolbar.
2. A window should appear. Click "Review Permissions."
3. Select the account you want to authenticate.
   - You may get a warning since this isn't an official script.
   - Review the code to get an idea of how it works and how it will interact with your account.
   - Once you feel comfortable, from the warning screen, click "Advanced" then "Go to Draft emails (unsafe)" (or whatever you named your script). This will get you through to the next screen.
4. Click "Allow" to grant the script access to the stated parts of your account.

## Run the script

After you authenticate, the script will run and you should find as many emails in your Gmail draft folder:

{% include img.html src='2018-01-06-google-sheets-to-gmail-2.png' alt='Screenshot of emails drafted in Gmail' class='img-half' %}
