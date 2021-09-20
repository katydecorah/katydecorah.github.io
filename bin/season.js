import { Octokit } from "octokit";
import { load, dump } from "js-yaml";
import { writeFileSync } from "fs";

const octokit = new Octokit({
  auth: process.env.GitHubToken,
});

process.env.START = "2021-06-21";
process.env.END = "2021-09-20";

const start = process.env.START;
const end = process.env.END;
const season = "Summer";
const year = "2021";
const image = `${year}-${season.toLowerCase()}.png`;

(async () => {
  // fetch books
  const bookData = await getDataFile("read.yml");
  const books = filter(bookData, "dateFinished").map(
    ({ title, authors, canonicalVolumeLink, isbn }) => ({
      title,
      authors: authors.join(", "),
      url: canonicalVolumeLink,
      isbn,
    })
  );

  // fetch recipes
  const recipeData = await getDataFile("recipes.yml");
  const recipes = filter(recipeData, "date").map(({ title, site, url }) => ({
    title,
    site,
    url,
  }));

  // fetch playlist
  const playlistData = await getDataFile("playlists.yml");
  const playlist = playlistData.find(
    ({ playlist }) =>
      playlist ===
      `${season === "Winter" ? `${year - 1}/${year}` : year} ${season}`
  );

  const md = `---
title: ${year} ${season}
image: ${image}
type: season
books:
${dump(books)}
recipes:
${dump(recipes)}
${playlist && dump(playlist)}
---

The books, music, and recipes I enjoyed this ${season.toLowerCase()}.

## Books

${books
  .map(({ title, authors, url }) => `* [${title}](${url}) - ${authors}`)
  .join("\n")}

## Playlist

${
  playlist &&
  playlist.tracks
    .map(({ track, artist }) => `* ${track} - ${artist}`)
    .join("\n")
}

## Recipes

${recipes
  .map(({ title, site, url }) => `* [${title}](${url}) - ${site}`)
  .join("\n")}
`;

  writeFileSync(
    `./notes/_posts/${process.env.END}-${year}-${season.toLowerCase()}.md`,
    md
  );
})();

async function getDataFile(file) {
  try {
    const { data } = await octokit.rest.repos.getContent({
      mediaType: {
        format: "raw",
      },
      owner: "katydecorah",
      repo: "has",
      path: `_data/${file}`,
    });
    return load(data);
  } catch (err) {
    console.log(err);
  }
}

function filter(data, field) {
  return data.filter((f) => f[field] >= start && f[field] <= end);
}
