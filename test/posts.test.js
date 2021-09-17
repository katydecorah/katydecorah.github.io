import test from "tape";
import { readFileSync, readdirSync } from "fs";
import jsyaml from "js-yaml";

const paths = [
  "adventures/_posts/",
  "epicurean/_posts/",
  "code/_posts/",
  "notes/_posts/",
];

import { readData } from "./utils.js";

const data = {
  give: readData("_data/", "organizations.yml"),
};

const readPost = (filename) => {
  const file = readFileSync(filename, "utf-8");

  try {
    const parts = file.split(/---\s*[\n^]/),
      frontmatter = parts[1];

    return {
      name: filename,
      file,
      metadata: jsyaml.load(frontmatter),
      content: parts[2],
    };
  } catch (err) {
    console.log(
      `\nCould not read metadata, check the syntax of the metadata and front matter in ${filename}`
    );
  }
};

const posts = paths.reduce((arr, path) => {
  readdirSync(`${path}/`).forEach((file) => {
    if (!file.startsWith(".")) arr.push(`${path}${file}`);
  });
  return arr;
}, []);

// build array of permalinks
const permalinks = posts.reduce((prev, post) => {
  let permalink;

  if (post) {
    const file = readPost(post);
    const metadata = file.metadata;
    if (metadata.permalink) {
      permalink = metadata.permalink;
    } else {
      permalink = post
        .replace("_posts", "")
        .replace(".md", "/")
        .replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/, "");
    }

    if (!prev[permalink]) {
      prev[permalink] = [];
    }
    prev[permalink].push(permalink);
  }

  return prev;
}, {});

posts.forEach((post) => {
  const { metadata, content } = readPost(post);

  test(post, (t) => {
    t.equal(
      typeof metadata,
      "object",
      `frontmatter must be formatted correctly: ${post}`
    );

    // check permalinks
    let permalink;
    if (metadata.permalink) {
      permalink = metadata.permalink;
    } else {
      permalink = post
        .replace("_posts", "")
        .replace(".md", "/")
        .replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/, "");
    }
    t.equal(
      permalinks[permalink].length,
      1,
      "permalink must not already exist " + permalink
    );

    if (metadata.category == "adventures") {
      t.ok(metadata.locations, "adventure post must have a locations field");
      t.equal(
        typeof metadata.locations,
        "object",
        "locations must be an object"
      );
      t.ok(
        metadata.coordinates,
        "adventure post must have a coordinates field"
      );
      t.equal(
        typeof metadata.coordinates,
        "object",
        "coordinates must be an object"
      );
    }

    const hasImage = content.match(/`?{%\s?include img.html(.*)\s?%}`?/gim);
    if (hasImage && hasImage.length > 0) {
      hasImage.forEach((image) => {
        if (!image.startsWith("`"))
          t.ok(image.includes("width"), `image must have width and height`);
      });
    }

    if (metadata.organizations) {
      const found = data.organizations.metadata.find(
        (m) => m.name == metadata.organizations
      );
      t.ok(
        found,
        `"${metadata.organizations}" must match a "name" in _data/organizations.yml`
      );
    }

    t.end();
  });
});
