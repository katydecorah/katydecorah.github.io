if (!process.env.PULL_NUMBER) {
  core.setFailed("No PULL_NUMBER environment variable set");
  process.exit(1);
}

// https://github.com/octokit/action.js/
import { Octokit } from "@octokit/action";
import core from "@actions/core";

const octokit = new Octokit();

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const { data } = await octokit.request(
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/files{?per_page,page}",
  {
    owner,
    repo,
    pull_number: process.env.PULL_NUMBER,
  }
);

const fileMatcher = new RegExp(
  /^(.*)\/_posts\/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-(.*).md/
);

core.info(`Files: ${JSON.stringify(data)}`);

const files = data
  .map((file) => file.filename)
  .filter((file) => file.endsWith(".md"))
  .filter((file) => {
    const match = fileMatcher.exec(file);
    core.info(`Match: ${match}`);
    if (!match) {
      return "";
    }
    return `http://localhost:3000/${match[1]}/${match[2]}/`;
  });

if (files.length == 0) {
  core.info("No files found, adding root");
  files.push("http://localhost:3000/");
}

core.notice(files);
core.setOutput("InputUrls", files.join(","));
core.setOutput("MaxUrls", files.length == 0 ? 100 : files.length);
