---
title: How I built a "Now reading" feature
image: 2023-12-14-now-reading-feature.png
tags:
  - GitHub
---

I added a [Now reading]({{site.url}}#now-reading) section to my site to share the book I'm currently reading. It's powered by GitHub Actions and the pressure that comes when all my library loans become available on the same day.

(I wrote about this idea last year when I built an [e-paper display to show the book I'm reading](/code/now-reading/).)

## New outputs in read-action

To make this feature work, I updated [read-action](https://github.com/katydecorah/read-action) (my GitHub action that keeps track of my books in a JSON file) to add an [output parameter](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter). The `nowReading` output parameter contains the metadata of the book I'm currently reading.

Now, every time I use read-action to add a book I've started, my workflow can access a parameter containing the data to display that book on my site. But, I still need to get that data from a private repository to my public repository.

## Pass data from repository to repository

Since I run read-action in a private repository, I used a [repository dispatch](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#repository_dispatch) to pass the book data to my public repository. I did this by updating the workflow in my private repository to add a step after read-action. This new step checks if read-action has the output parameter `nowReading`. If it does, then it will use [repository-dispatch](https://github.com/peter-evans/repository-dispatch) to send the contents of `nowReading` to my public repository as an event.

{% raw %}

```yaml
- name: Now reading
  if: steps.read_action.outputs.nowReading != ''
  uses: peter-evans/repository-dispatch@v2
  with:
    repository: katydecorah/katydecorah.github.io
    event-type: now-reading
    client-payload: '{"github": ${{ toJson(steps.read_action.outputs.nowReading) }}}'
```

{% endraw %}

In my public repository, I created a workflow that waits to receive the now-reading repository dispatch, and once triggered, it will write the contents to `_data/now-reading.json` and commit the file.

{% raw %}

```yaml
name: Now reading
on:
  repository_dispatch:
    types: [now-reading]
jobs:
  nowReading:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Update now-reading.json
        env:
          JSON_DOC: ${{ github.event.client_payload.github }}
        run: |
          echo $JSON_DOC > _data/now-reading.json
      - run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add -A && git commit -m "📚 Now Reading"
          git push
```

{% endraw %}

## Markup the metadata

As soon as the workflow commits the file, GitHub pages will build the site to display the book. My site uses the following markup (more or less):

{% raw %}

```html
<h2>Now reading</h2>
{% assign nowReading = site.data['now-reading'] %}
<div class="home-now-reading">
  <img alt="" src="book-{{nowReading.isbn}}.png" />
  <div>
    <strong>{{nowReading.title}}</strong> by {{nowReading.authors | join: ", "}}
  </div>
</div>
```

{% endraw %}

{% assign nowReading = site.data['now-reading'] %}

Or, I can tell you right here, that I'm currently reading &ldquo;{{nowReading.title}}&rdquo; by {{nowReading.authors | join: ", "}}. (This sentence will update once I start a new book.)
