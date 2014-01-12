---
published: false
---

Since Spring 2008, I have made a playlist for every season. I love being able to flip back to certain season and remember that time through song. Some playlists remind me of living with my parents, living in my studio apartment, and driving to Burlington. I love the way the make me feel. Each playlist has a mash of genres and probably don't make sense to anyone but me. I think of them like pages in a journal.

Over a year ago, when I made the switch from PC to Mac, I was stupid. I didn't back up my iTunes properly. My music went everywhere. It was like I ripped all of the pages out of my journal. I did, however, still have my `iTunes Music Library.xml` file.

iTunes creates a trackid for each track, with the trackid it also has all the good data, like track title, artists, albumn, and everything else iTunes might know about that track. Information about tracks and playlists are stored separeately. Each playlist, in the XML, stores only the trackid. To get a readable playlist, you must match the trackid in your playlist with the trackid in a bank of all of your tracks.

I groaned over its size and the dozen or so playlists that I wanted to rescue. I knew that I could not personally manipulate the data as Sublime Text crashed and burned under the shear weight of the file. 

It's been several months, but I figured it out. My method is a little unusual, because I wasn't sure how I was going to get to the end. I used an Access database, exported to mySQL, then used PHP to ouput the data.

## Here's how I rescued my playlists from `iTunes Music Library.xml` purgatory:

### Import XML to Access
I found this [video tutorial](http://www.youtube.com/watch?v=MIOUirsX0LM) of how to import your iTunes library into Access. (Ok, not everyone has Access, but this tutorial is so good, borrow a friends computer or something.) Not only was it a very good tutorial, it was successful.

The tutorial had me create a table that lists all my tracks and its corresponding meta data. I did a similar method to import my playlists in to a new table. Next, I ran a query select the iTunes table and the playlist table, matching on the trackid??. Now I had a list of all of my playlists matched with tracks.

I exported this query to xls.

### Import into phpMyAdmin 

While I had my lists in the database, I wanted to add markup. I imported my xls into phpMyAdmin.

Here is the PHP I ran to output all the playlists with HTML. I haven't written PHP in a while, so blah blah blah:

	
    // get playlist names
    $sql =  mysqli_query($db,"SELECT distinct playlist from playlistTracks");
	while($row = mysqli_fetch_array($sql))
	{
		$playlist = $row['playlist'];
		echo "<div class='playlist'>";
		echo '<h2>'.$playlist.'</h2> ';
        // get tracks in playlist
		$sql2 =  mysqli_query($db,"SELECT * from playlistTracks where playlist='". mysql_real_escape_string($playlist) . "'");
		while($row = mysqli_fetch_array($sql2)) {
			echo "<div class='playlist-track'>";
			echo "<span class='track-name'>".$row['Name']."</span>";
			echo "<span class='track-artist'>".$row['Artist']."</span>";
			echo "<span class='track-album'> &mdash; " . $row['Album']  ."</span>";
			echo "</div>";
		}
		echo "</div>";
	}

This outputted beautiful HTML, that I could style and share.

2. imported into phpmyadmin
3. spun out tags -- > XSPF
4. http://resp.in/