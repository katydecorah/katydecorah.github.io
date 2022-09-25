---
title: Now reading
image: 2022-09-24-now-reading.jpg
tags:
  - Node.js
  - GitHub
---

I built a display that shows the book I'm reading and how many books I read this year. It's powered by my [GitHub Action to track books](https://github.com/katydecorah/read-action), a Raspberry Pi, [epaper.js](https://github.com/samsonmking/epaper.js), and an [e-paper module](https://www.waveshare.com/wiki/4.2inch_e-Paper_Module).

<div class="photos">
{% include img.html src="2022-09-24-now-reading.jpg" alt="The now reading book display is in a black frame. It shows the book 'How to Read Now' by Elaine Castillo. Book goal 86 out of 100 books read." width="4032" height="3024" %}
</div>

## Refactor read-action

Before I started this project, I knew I would need to update [read-action](https://github.com/katydecorah/read-action). The action only stored the date that I finished a book, so to show the book I'm reading, I needed the add the start date. This kicked off a series of small refactors:

- **Switch trigger to a workflow_dispatch event**. Before, I triggered the action by opening a GitHub issue. The action would parse the issue title to get the ISBN. This process was noisy. Now, I send a payload with the book's ISBN directly to the action.
- **Switched output format to JSON.** I love Yaml for its readability, but since I never read the file myself, it makes more sense to switch to JSON. Not only did this refactor remove a lot of code, but it made the output library file easier to parse by others, such as iOS Shortcuts.
- **Add `dateStarted` property.** Finally, I added the `dateStarted` property. If I send an ISBN with `dateStarted`, it will mark the book as started on that date. If I send the ISBN with `dateFinished`, it will check to see if the ISBN already exists in my library and then update the object with the finished date.

I updated the [sample iOS Shortcut](https://github.com/katydecorah/read-action/tree/main/shortcut) to handle the new API format and date options.

## Design the display

Knowing that the resolution on the e-paper module is low and only supports gray-scale, my design took on a retro vibe. I considered using cover book art, but knew the image would start to degrade given the small scale.

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="QWrNmzd" data-user="katydecorah" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/katydecorah/pen/QWrNmzd">
  Now reading...</a> by Katy DeCorah (<a href="https://codepen.io/katydecorah">@katydecorah</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

I made a few more tweaks and published the [now reading page](https://katydecorah.com/archive/books/now/) on my archive site, where it will automatically update as I start a new book.

## Set-up the Raspberry Pi

I used [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to format my SD card and make sure it could connect to wifi. Once the device connected to wifi, from my computer, I connected via SSH to the Raspberry Pi. I followed the [steps to install epaper.js](https://github.com/samsonmking/epaper.js#installation) with some bumps. My Raspberry Pi is several generations behind the recommended specifications.

One new thing I learned is that you can make [nvm](https://github.com/nvm-sh/nvm) install unofficial Node builds with:

```bash
NVM_NODEJS_ORG_MIRROR=https://unofficial-builds.nodejs.org/download/release/ nvm install 16
```

## Display the display

Finally, I ran the epaper.js command and my site appeared! I was pleasantly surprised that the design only need an increase the `font-weight` to improve the contrast.

Next, I spent $8 at Target on a 4x6 frame, spray painted it black, and cut a black frame to match the screen. After negotiating with some masking tape, the e-paper module fit snugly in the frame.

## Keep the display updated

On the Raspberry Pi, I used [crontab](https://man7.org/linux/man-pages/man5/crontab.5.html) to update the display every hour. To do this, I created a separate script to make sure crontab can access node_modules:

```sh
#!/bin/bash
export NVM_DIR="/home/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
ejs display rpi-4in2 "https://katydecorah.com/archive/books/now/"
```

Next, I ran `crontab -e` and added my cron job:

```sh
0 * * * * /home/display.sh > ejs.log 2>&1
```

The last bit `> ejs.log 2>&1` generates logs for the job, which was immensely helpful in debugging.

## Build your virtual library

Over the past few years, I have jumped back into reading, but I don't own a lot of physical books. I love audiobooks and ebooks, and supporting my local library. Building a virtual library is a fun way to remember the books I read and I look forward to designing more virtual library views for my display.
