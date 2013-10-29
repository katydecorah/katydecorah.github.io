---
published: false
---

Today at work I needed to move and rename a ton of files, but I needed to make sure their git history followed. If I moved them manually, SoureTree would read it as I just deleted the file and created a new file. No good. I need each follow to keep its history as these reorganization in a branch to be merged on a later date. I had a hard time figuring this out, so I figured I'd write out how I arrived to a successful conclusion.

In the root, I had nearly 1000 files with the following naming schema: `L1T1-page01.cfm` (standing for lesson 1, topic 1, page 1). All together there are 8 lessons, each lesson has multiple topics, and each topic has multiple pages.

I needed to move these files from the root and store them in organized folders:  `L1T1-page01.cfm` would reside at `lessons/01-lesson-name/01-topic-name/L1T1-page01.cfm`.

So I had to `git mv` these files myself.

I moved files in the same topic to their respective topic folders by hitting this command:

	git mv L1T1* lessons/01*/01*

After I moved the files I realized I wanted to shorten the filenames from `L1T1-page01.cfm` to `01.cfm`.

Doing this by topic, I hit the following command:

	for f in *.cfm; do git mv $f $(echo $f | sed ‘s/L[0-9]T[0-9]-page//g’); done
    
    http://stackoverflow.com/questions/9984722/git-rename-many-files-and-folders

It worked. I bet there's a better way of doing it, but I'm proud of myself. As I was figuring this out, I imagined the scene from Hook where Peter begins to remember how to play pretend and the children are like "You're doing it Peter."