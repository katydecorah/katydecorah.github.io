---
published: false
---

Since Spring 2008, I have made a playlist for every season. I love being able to flip back to certain season and remember that time through song. Some playlists remind me of living with my parents, living in my studio apartment, and driving to Burlington. I love the way the make me feel. Each playlist has a mash of genres and probably don't make sense to anyone but me. I think of them like pages in a journal.

Over a year ago, when I made the switch from PC to Mac, I was stupid. I didn't back up my iTunes properly. My music went everywhere. It was like I ripped all of the pages out of my journal. I did, however, still have my `iTunes Music Library.xml` file.

I groaned over it's size. I knew that I could not personally manipulate the data. Sublime Text crashed and burned under the shear weight of the file.

It's been several months, but I figured it out.

## Here's how I rescued my playlists from `iTunes Music Library.xml` purgatory:

### Import XML to Access
I found this [video tutorial](http://www.youtube.com/watch?v=MIOUirsX0LM) of how to import your iTunes library into Access. (Ok, not everyone has Access, but this tutorial is so good, borrow a friends computer or something.) Not only was it a very good tutorial, it was successful.

Once I had my database in, I did a similar method to import my playlists in to a new table. Next, I ran a query select the itunes table and the playlist table, matching on the trackid??. Now I had a list of all of my playlists matched with tracks.

I exported this query to xls.

### Import into 




2. imported into phpmyadmin
3. spun out tags -- > XSPF
4. http://resp.in/