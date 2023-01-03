---
title: Lint markdown
image: 2021-06-05-lint-markdown.png
tags:
  - JavaScript
  - Mapbox
---

At Mapbox, we write a majority of documentation in [markdown](https://daringfireball.net/projects/markdown/). We have a suite of markdown linters to help us stay consistent and improve the quality of our documentation.

Our suite includes [remark plugins](https://github.com/remarkjs/remark-lint) to lint markdown. We have built our own plugins and use many from the community:

- [Check links](#check-links)
- [Assert frontmatter](#assert-frontmatter)
- [Lint JSX in markdown](#lint-jsx-in-markdown)
- [Check variables](#check-variables)
- [Improve link text](#improve-link-text)
- [Improve accessibility](#improve-accessibility)
- [Assert heading level increment](#assert-heading-level-increment)
- [A shared remark configuration](#a-shared-remark-configuration)

## Check links

When reviewing content, it's easy to forget to check that links work and since it can be automated, you shouldn't have to do it.

Our link checker:

- Checks for broken links in markdown files.
- Fails links that have a hardcoded Mapbox access token. We prefer the contributor use a variable so we can manage access tokens in one place.
- Swaps out any variables in links (such as version numbers) to properly check the link.
- Requires links that are relative to our subdomain be [formatted consistently to improve search engine optimization (SEO)](https://developers.google.com/search/docs/advanced/guidelines/duplicate-content).

I'm only scratching the surface with the intricacies of our link checker and for that reason our linter in private. Our linter is based off of David Clark's [remark-lint-no-dead-urls](https://github.com/davidtheclark/remark-lint-no-dead-urls).

## Assert frontmatter

For SEO, we assert that every page has a `title` and `description` that will be used by the `title` and meta description elements in the page's `head`. We also assert:

- `layout` - Used by our component library's `PageLayout` component to choose which layout to display.
- `contentType` - One of: `API`, `example`, `glossary`, `guide`, `playground`, `reference`, `specification`, `troubleshooting`, or `tutorial`. This allows us to internally define the content for reporting and tracking.
- `products` - An array of Mapbox product names that are included on the page. This helps us track documentation for every product.

We have several more properties that we assert that can disable or enable features on the page.

## Lint JSX in markdown

Our static site generator, [Batfish](https://github.com/mapbox/batfish), uses [jsxtreme-markdown](https://github.com/mapbox/jsxtreme-markdown) to transform markdown into React components. This means that many our of markdown pages include JSX syntax.

We had difficulty with catching JavaScript errors in the embedded markdown files. This resulted in failed builds with cryptic error messages. We then had the idea to build a remark linter that will parse the markdown files with jsxtreme-markdown and then run eslint using the [Node.js API](https://eslint.org/docs/developer-guide/nodejs-api) on each file.

Our linter, affectionately known as xtreme-linter, will:

- Make sure an imported module can be resolved to a module on the local file system (`import/no-unresolved`).
- Check for undeclared variables in JSX (`react/jsx-no-undef`).
- Find unused variables (`no-unused-vars`).
- Find undeclared variables (`no-undef`).

I love all our linters, but this one the most.

## Check variables

Since we can use JSX in markdown, we also use variables for repeated information like access tokens and version numbers. We built a remark-linter that will scan markdown pages for variables and then assert that the variable exists in the repository's local `constants.json` file.

## Improve link text

We developed a remark linter, [remark-lint-link-text](https://github.com/mapbox/remark-lint-link-text), that warns against non-descriptive link text. The linter warns against the following link text:

- click here
- here
- read more
- this link
- more here
- this article

## Improve accessibility

Our newest remark linter helps check that all `iframe` elements and our React component `DemoIframe` have a `title` attribute and all `img` elements and our React component `AppropriateImage` have an `alt` attribute. While remark linters already exist to find missing alt text like [remark-lint-no-empty-image-alt-text](https://www.npmjs.com/package/remark-lint-no-empty-image-alt-text) and [@double-great/remark-lint-alt-text](https://www.npmjs.com/package/@double-great/remark-lint-alt-text), we needed to extend it to our React components since we use them in our markdown files.

## Assert heading level increment

Another remark linter that we love is [remark-lint-heading-increment](https://www.npmjs.com/package/remark-lint-heading-increment). This linter asserts that headings are always in order. This is especially helpful for longer pages and pages with a lots of sections.

## A shared remark configuration

Finally, we bundle all the remark linters into a shared remark configuration. The shared configuration prevents us from having to repeat code in every repository and help streamline updates.

These linters help guide our contributors to writing better documentation and allows our team to focus more closely on the content during reviews.
