---
title: Documentation action
image: 2022-11-07-documentation-action.png
tags:
  - Node.js
  - GitHub
---

Earlier this year, I created [documentation action](https://github.com/katydecorah/documentation-action) to automatically generate documentation for my GitHub Actions.

The action requires a sample workflow, a markdown file (like `README.md`) to write the documentation, and the action configuration file (`action.yml`).

Once you add documentation action to your action's repository, it will generate and keep up-to-date:

- **How to set up the workflow.** This includes short instructions and a ready to copy and paste sample workflow.
- **Action options.** A list of all input options, if they exist.
- **Workflow dispatch options.** The payload object for actions that use a workflow dispatch event.

In the sample workflow for documentation action, the action will trigger if any of the following files, `.github/workflows/example.yml`, `action.yml`, `package.json`, and `README.md`, since these files are the source for the documentation. If there's a diff, then the action will generate and commit the documentation.

The documentation action may not cover all action use cases yet. (It mostly it covers what I have built with actions so far.)
