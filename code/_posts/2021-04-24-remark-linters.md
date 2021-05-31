---
title: Linting markdown
image: 2021-04-24-linting-markdown.jpg
tags:
  - JavaScript
  - Mapbox
---

At Mapbox, we write a majority of documentation in markdown. We have a suite of markdown linters to help us stay consistent and do quality assurance.

Our suite includes markdown plugins from the community and some that we have made:

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Check links](#check-links)
- [Assert frontmatter](#assert-frontmatter)
- [Lint JSX in markdown](#lint-jsx-in-markdown)
- [Improve link text](#improve-link-text)
- [A shared remark configuration](#a-shared-remark-configuration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Check links

When reviewing content, checking that links work is easy to forget and since it can be automated, you shouldn't have to do it.

Our link checker:

- Checks for broken links in markdown files.
- Fails links that have a hardcoded Mapbox access token, because we prefer the contributor use a constant so that we can quickly rotate tokens when needed.
- Requires links relative to our subdomain to be formatted consistently for SEO.

On a few occasions, our CI's connection will dip and we have to rerun the tests. This happens infrequently enough that it hasn't been a problem.

I'm only scratching the surface with the intricacies of our link-checker and for that reason our plugin in private. If you are interested add a link checker, our plugin is based off of David Clark's [`remark-lint-no-dead-urls`](https://github.com/davidtheclark/remark-lint-no-dead-urls).

## Assert frontmatter

For SEO, we assert that every page has a `title` and `description`. We also assert:

- `layout`. Used by our component library's `PageLayout` component to choose which layout to display.
- `contentType`. One of: `API`, `example`, `glossary`, `guide`, `playground`, `reference`, `specification`, `troubleshooting`, or `tutorial`. This helps us to internally define the content.
- `products`. An array of Mapbox product names that are included on the page. This helps us track documentation for every product.

We have several more properties that we assert that often disable or enable features on the page. Many of these properties are React component properties that our component library will read, which is why we found it important to assert their values.

## Lint JSX in markdown

Our static site generator, [Batfish](https://github.com/mapbox/batfish), uses [`jsxtreme-markdown`](https://github.com/mapbox/jsxtreme-markdown) to transform markdown into React components. This means that many our of markdown pages embed JSX.

We had difficulty with catching JSX errors since we lacked a proper linter. This resulted in merging errors and receiving a failed build with a cryptic error message. We then had the idea to build a markdown plugin that will parse the markdown files with [`jsxtreme-markdown`](https://github.com/mapbox/jsxtreme-markdown) and then run eslint using the [Node.js API](https://eslint.org/docs/developer-guide/nodejs-api) on each file.

Our plugin, affectionately known as xtreme-linter, will:

- Make sure an imported module can be resolved to a module on the local file system (`import/no-unresolved`).
- Check for undeclared variables in JSX (`react/jsx-no-undef`).
- Find unused variables (`no-unused-vars`).
- Find undeclared variables (`no-undef`).

I love all our plugins, but this one the most.

## Improve link text

We developed a remark linter that warns against non-descriptive link text: [`remark-lint-link-text`](https://github.com/mapbox/remark-lint-link-text). Not only does the linter help us make lint text more accessible, it also makes content easier to digest.

The linter warns against the following link text:

- click here
- here
- read more
- this link
- more here
- this article

## A shared remark configuration

Finally, we bundled all the remark linters into a shared remark configuration. This prevents us from having to repeat code in every repository and help streamline updates.
