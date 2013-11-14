---
layout: post
title: Git File Renaming
category: code
tags: 
  - Git
image: "img/youre-doing-it-peter.jpg"
published: true
---

Today at work I needed to move and rename a ton of files, but I also needed to make sure that the Git history followed. When I tried to move the files manually, SourceTree thought I deleted the files and then created new files elsewhere. When I commit files like this, SourceTree is usually smart enough to catch on, but it wasn't happening. No good. 

It took me a while to figure this all out, so I figured I'd share.

In the root, I had nearly 1000 files with the following naming schema: `L1T1-page01.cfm` (standing for lesson 1, topic 1, page 1). All together there are 8 lessons, each lesson has multiple topics, and each topic has multiple pages.

I needed to move these files from the root and into organized folders: `L1T1-page01.cfm` would reside at `lessons/01-lesson-name/01-topic-name/L1T1-page01.cfm`.

So I had to `git mv` these files myself; a new-to-me command.

First, I moved batches of files belonging to the same topic to their respective topic folders by hitting this command:

	git mv L1T1* lessons/01*/01*

(Can I get a *hell yeah* for that asterisk?)

After I moved the files I realized I wanted to shorten the filenames from `L1T1-page01.cfm` to `01.cfm`.

Within each topic folder, I hit the following command:

	for f in *.cfm; do git mv $f $(echo $f | sed ‘s/L[0-9]T[0-9]-page//g’);done
    
It worked. Just by looking at the last command, I know there's a smarter way to write it. Nevertheless, it worked and I'm kind of proud of myself.

As I was figuring this out, I imagined the scene from Hook where Peter begins to remember how to play pretend and the children are like "You're doing it, Peter."

<iframe width="640" height="360" src="http://www.youtube.com/embed/AAJaWFdgeVM?feature=player_detailpage" title="You're doing it, Peter"> &nbsp; </iframe>