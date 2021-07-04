---
title: A shared ESLint configuration
image: 2021-07-05-eslint-config.png
tags:
  - Mapbox
---

Like our [markdown linters](/code/lint-markdown/), all Mapbox documentation repositories use a [shared ESLint configuration](https://eslint.org/docs/developer-guide/shareable-configs). Our configuration covers everything from enforcing React best practices to improving accessibility, including:

- [`eslint-config-mapbox`](https://github.com/mapbox/eslint-config-mapbox) is a shared ESLint config for Mapbox engineering teams which serves as the base for our configuration.
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) includes React specific linting rules.
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) checks accessibility rules on JSX elements.
- [`eslint-plugin-es`](https://github.com/mysticatea/eslint-plugin-es) allows us to disallow unsupported ECMAScript syntax.
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) turns off all rules that are unnecessary or might conflict with [Prettier](https://github.com/prettier/prettier).
- `eslint-plugin-docs` is a private plugin that I've been developing to create custom ESLint rules for our documentation sites. So far the plugin makes sure that when you import [`mapbox-gl`](https://github.com/mapbox/mapbox-gl-js) that you must include a special component to handle the loading of the map.

ESLint plugins will help keep your code consistent and improve the quality, but they are also excellent teaching tools. When I come across a plugin, I take joy in reading each rule to learn the benefits of enabling or disabling it.
