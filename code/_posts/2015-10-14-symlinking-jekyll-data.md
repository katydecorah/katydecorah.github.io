---
title: Symlinking Jekyll data files

image: https://yo.katydecorah.com/2015-10-14-symlinking-jekyll-data-0.png
tags:
  - Jekyll
---

[Font Library](https://katydecorah.com/font-library/) has delicious data packed into a [JSON file](https://katydecorah.com/font-library/families.json). I've had an urge to see how else I can hack the file with Jekyll and tonight I was up for the challenge.

To start, the JSON file is in the root of the Jekyll site, making it a simple file without Jekyll powers. I keep it there so it's easier to find, especially for contributors. A few times I had considered moving it to `_data/` because with a [Jekyll data file](http://jekyllrb.com/docs/datafiles/) I can use [liquid](https://github.com/Shopify/liquid/wiki) to `loop` and `if` and `else` the data all I want.

I also thought about duplicating the file so that I'd have the best of both worlds, but that's hard to maintain. And then I thought about creating a [symlink](https://en.wikipedia.org/wiki/Symbolic_link). I had never created one before, but [thanks to the Internet](http://apple.stackexchange.com/a/115647) I opened Terminal and entered:

{% highlight sh %}
$ ln -s ../families.json \_data/families.json
{% endhighlight %}

And :boom: symlink! (Ok, it wasn't that smooth. It took me a bit to figure out how to write the path. And then after I pushed, I got a build error because I originally didn't use a _relative_ path.)

But will it loop?

I created a file in the root `families.csv` and wrote:

## {% highlight liquid %}{% raw %}

---

{% for item in site.data.families %}
{{item.family}}
{% endfor %}
{% endraw %}{% endhighlight %}<!--_-->

And soon I had a CSV file with a list of the font family names.

I also used ["very ugly string manipulation hacks"](http://stackoverflow.com/a/30607373) to get a distinct list of tags and in alphabetical order. And with a few more very ugly string manipulation hacks, I got the [CSV file](https://github.com/katydecorah/font-library/blob/gh-pages/families.csv) looking exactly how I wanted:

<div class="photos">
{% include img.html src="2015-10-14-symlinking-jekyll-data-1.png" alt="CSV file" class="img-full" %}
</div>

Since Github pages run in safe mode the file won't build in production. (It's still totally a success though.)
