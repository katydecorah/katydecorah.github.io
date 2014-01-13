---
layout: post
title: Rescuing Playlists from iTunes
category: code
tags:
 - music
 - PHP
 - SQL
published: false
---

Since Spring 2008, I have made a playlist for every season. Just by listening to some of these playlists I feel like I'm transported to walking to class at Siena, driving to Burlington, or my studio apartment. I love the way they make me feel. Each playlist has a mash of genres and probably don't make sense to anyone but me. I think of them like pages in a journal.

Over a year ago, I bought a new computer and I was not careful with my iTunes. In fact, music went everywhere. It was like I ripped all of the pages out of my journal. I did, however, still have my `iTunes Music Library.xml` file in tact.

I couldn't import the library, because without having the tracks, the playlists wouldn't populate. I needed to rescue my playlists.

## About the XML

The iTune's Library XML file creates a `Track ID` for each track and beside that ID is all of the accompanying meta data. Information about tracks and playlists are stored separately. Each playlist, in the XML, stores only the `Track ID`. To get a readable playlist, you must match the `Track ID` in your playlist with the `Track ID` in a bank of all of your tracks.

I groaned over my library's size and the dozen or so playlists that I wanted to extract. I knew that I couldn't personally manipulate the data as Sublime Text crashed and burned under the weight of the file. 

It took a while, but I figured it out. My method is a little unusual, because I wasn't sure how I was going to get to the end. Here's the journey I took:
1. Create an Access database
2. Import into to phpMyAdmin to output data with PHP
3. Upload XSPF to re/spin

## Create an Access database
I found this [video tutorial](http://www.youtube.com/watch?v=MIOUirsX0LM) of how to import your iTunes library into Access. The tutorial taught me how to create a table that displays all of my tracks and its corresponding meta data. It worked beautifully. I did a similar method to import my playlists in to a new table. Now I had two beautiful tables that I could query. I selected trackid, name, artist, and album from the iTunes table and matched `Track ID` with the playlist table. 

That query returned a list of all of my playlists matched with tracks. Success! I exported this query to xls.

## Import into to phpMyAdmin to output data with PHP

While I had my playlists, I wanted to add markup to display on my site. I imported my xls into phpMyAdmin.

Here is the PHP I ran to output all of the playlists with HTML. (Disclaimer &mdash; I haven't written PHP in a while):

{% highlight php %}
// get playlist names
$sql =  mysqli_query($db,"SELECT distinct playlist from playlistTracks");
while($row = mysqli_fetch_array($sql)){
	$playlist = $row['playlist'];echo "<div class='playlist'>";
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
{% endhighlight %}

This outputted beautiful HTML.

## Upload XSPF to re/spin

I was happy that I had my playlists, but I wanted to play them. I found [re/spin](http://resp.in/) -- easily import any Last.fm or Spotify playlist into Rdio. They also accept [XSPF](http://www.xspf.org/). As I soon learned, XSPF is XML Shareable Playlist Format. After spending a few minutes in the documentation, I realized that I could change up my PHP I used earlier to create XSPF and I did:

{% highlight php %}
$sql =  mysqli_query($db,"SELECT distinct playlist from playlistTracks");
while($row = mysqli_fetch_array($sql))
{
	$playlist = $row['playlist'];
	echo $playlist; // for distinction purposes only
	echo "&lt;?xml version='1.0' encoding='UTF-8'?&gt;";
	echo "&lt;playlist version='1' xmlns='http://xspf.org/ns/0/'&gt;";
	echo '&lt;trackList&gt;';
	$sql2 =  mysqli_query($db,"SELECT * from playlistTracks where playlist='". mysql_real_escape_string($playlist) . "'");

		while($row = mysqli_fetch_array($sql2)) {
			print "&lt;track&gt;&lt;title&gt;".$row['Name']."&lt;/title&gt;&lt;creator&gt;".$row['Artist']."&lt;/creator&gt;&lt;album&gt;" . $row['Album']  ."&lt;/album&gt;&lt;/track&gt;";
		}
	echo "&lt;/trackList&gt;";
	echo "&lt;/playlist&gt;";
	echo "<br><br><br><br>"; // for distinction purposes only
}
{% endhighlight %}

I used entities, because the live XML tags did not close properly. Not the prettiest of code, but I was able to quickly copy and paste each playlist into an XML file. I saved the file in a public DropBox folder, grabbed the link, and uploaded. Within a few seconds, my playlist was recognized by re/spin and imported to Rdio. 

The only issue I encountered was when re/spin and Rdio tried unsuccessfully to match a track it would find something instead of nothing. So if Rdio doesn't have the track on file, it will re/spin or Rdio will find something, anything to put in its place. I had to breeze through each playlist to make a few deletions and corrections in Rdio. Otherwise, re/spin was fantastic.
