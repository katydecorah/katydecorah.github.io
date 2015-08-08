---
title: Writing for everyone
category: code
image: https://farm8.staticflickr.com/7612/16606351737_721e54516d_c.jpg
tags:
 - Mapbox
 - maps
 - conference
---

A couple weeks ago I gave my talk [Writing for everyone](http://katydecorah.com/writing-for-everyone/) at [FOSS4G NA](https://2015.foss4g-na.org/). I had a great time! You can click through my slides below, follow along with [my notes](http://katydecorah.com/writing-for-everyone/notes/), or <a href="https://youtu.be/bXd6aRRvJG4?list=PLWW0CjV-TafaJlkE6Zq4OgXgb04TQfNiR" data-proofer-ignore>watch the video</a>.

<iframe src="http://katydecorah.com/writing-for-everyone/" width="100%" height="500px"></iframe>

The slides are built with [Big](http://www.macwright.org/big/) and Jekyll. At first I was just going to work in a flat HTML file, but then I got the itch.

Directories! Pages! Organization! Front-matter! Logic!

I wove Big into Jekyll and came up with a nice workflow. Each slide is a Jekyll post. I organized sections into folders. I used front matter properties to organize slide styles. Oh and that notes page up top? It's pulling each slide/posts `notes` data from the front matter. Pretty handy. [Check out the repo](https://github.com/katydecorah/writing-for-everyone).