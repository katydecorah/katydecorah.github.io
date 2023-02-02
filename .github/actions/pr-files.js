// https://github.com/octokit/action.js/
import { Octokit } from "@octokit/action";

const octokit = new Octokit();

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const files = await octokit.request(
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/files{?per_page,page}",
  {
    owner,
    repo,
    pull_number: process.env.PULL_NUMBER,
  }
);

console.log(files);
