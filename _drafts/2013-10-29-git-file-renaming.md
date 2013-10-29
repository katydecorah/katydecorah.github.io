---
published: false
---

Today at work I needed to move and rename a ton of files, but I also needed to make sure that the git history followed. When I tried to move the files manually, SoureTree thought I just deleted the file and created a new file. No good. I had a hard time figuring this out, so I figured I'd write out how I arrived to a successful conclusion.

In the root, I had nearly 1000 files with the following naming schema: `L1T1-page01.cfm` (standing for lesson 1, topic 1, page 1). All together there are 8 lessons, each lesson has multiple topics, and each topic has multiple pages.

I needed to move these files from the root and store them into organized folders:  `L1T1-page01.cfm` would reside at `lessons/01-lesson-name/01-topic-name/L1T1-page01.cfm`.

So I had to `git mv` these files myself.

I moved batched of filings belonging to the same topic to their respective topic folders by hitting this command:

	git mv L1T1* lessons/01*/01*

After I moved the files I realized I wanted to shorten the filenames from `L1T1-page01.cfm` to `01.cfm`.

I hit the following command within each topic folder:

	for f in *.cfm; do git mv $f $(echo $f | sed ‘s/L[0-9]T[0-9]-page//g’);done
    
It worked. I bet there's a better way of doing it, but I'm proud of myself. 

As I was figuring this out, I imagined the scene from Hook where Peter begins to remember how to play pretend and the children are like "You're doing it Peter."

<iframe width="640" height="360" src="//www.youtube.com/embed/AAJaWFdgeVM?feature=player_detailpage" frameborder="0" allowfullscreen>&nbsp;</iframe>