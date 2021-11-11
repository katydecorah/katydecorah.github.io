---
title: Automate peer dependency management
image: automate-peer-dependency-management.png
tags:
  - Mapbox
---

With [`npm@v7`](https://github.blog/2021-02-02-npm-7-is-now-generally-available/), you no longer have to install peer dependencies. This feature removed a huge maintenance burden for our documentation sites at Mapbox. Through strategic use of peer dependencies and [dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates), we've significantly reduced our dependency maintenance.

## Our configuration

To keep all site repositories consistent, we have configuration packages for [`eslint`](/code/eslint-config/), [`remark`](/code/lint-markdown/), and [`prettier`](https://github.com/mapbox/prettier-config-docs). To support each configuration, we must install `devDependencies` (such as `eslint-plugin-jsx-a11y`, `remark-lint-heading-increment`, and `lint-staged`) to make them work. In total, we maintain over 20 dependencies in each repository to support our configuration packages, which adds up across 18 repositories.

## Managing peer dependencies

With npm@7, whatever `peerDependencies` that you define in `package.json`, npm will be automatically install them. For us, this eliminates our need to manually maintain about 20 packages in each repository.

{% include img.html src="2021-10-09-automate-peer-dependency-management-2.png" alt="A list of peerDependencies for an eslint configuration." width="1270" height="604" %}

Our workflow looks like this:

1. **Save `devDependencies` as `peerDependencies` in each configuration package.** We moved all the `devDependencies` that are required to allow the configuration to run as `peerDepedencies` in `package.json` in our configuration packages.

2. **Automatically update peer dependencies with dependabot.** Each configuration package's repository has a dependabot workflow to check weekly or monthly for updates (depending on the package). This helps keep the `peerDepedencies` up-to-date on an automated schedule.

3. **Automatically install peer dependencies in each site.** In each site repository, we updated the configuration package and removed the now redundant developer dependencies. Since in the first step, we saved `devDependencies` as `peerDependendies`, npm will automatically install peer dependencies to site repository's `package-lock.json`.

4. **Automatically update dependencies dependabot in each site.** Each site repository has a dependabot workflow that checks daily for updates to each of the three configuration packages. This means that as soon as we release a new version of a configuration package, within one day dependabot will open a pull request in all 18 repositories with the version bump.

## Overrides

If a site repository needs a bump sooner than our workflows will allow, we can force install dependencies (`--force`). It's nice to have an approachable workaround to fix fast problems.

## Leave it to the bots

A good sum of our dependencies are now maintained on a schedule thanks to dependabot and peer dependencies. We can roll out changes significantly faster to our site repositories, which gives us much more time write the docs.

And now your moment of diff zen.

<div class="photos">
{% include img.html src="automate-peer-dependency-management.png" alt="A package.json git diff showing about 20 developer dependencies removed." width="2436" height="1188" %}
</div>
