import { readFileSync, readdirSync } from "fs";
import jsyaml from "js-yaml";
import { readData } from "./utils.js";

const paths = [
  "adventures/_posts/",
  "epicurean/_posts/",
  "code/_posts/",
  "notes/_posts/",
];

const {
  organizations,
} = async () => await readData("_data/", "organizations.yml");

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
    const { metadata } = readPost(post);
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

describe("posts", () => {
  for (const post of posts) {
    const { metadata, content } = readPost(post);

    test(post, async () => {
      expect(typeof metadata).toEqual("object");

      // check permalinks
      let permalink = metadata.permalink
        ? metadata.permalink
        : post
            .replace("_posts", "")
            .replace(".md", "/")
            .replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/, "");

      expect(permalinks[permalink].length).toEqual(1);

      if (metadata.category == "adventures") {
        expect(metadata.locations).toBeDefined();
        expect(typeof metadata.locations).toEqual("object");
        expect(metadata.coordinates).toBeDefined();
        expect(typeof metadata.coordinates).toEqual("object");
      }

      const hasImage = content.match(/`?{%\s?include img.html(.*)\s?%}`?/gim);
      if (hasImage && hasImage.length > 0) {
        for (const image of hasImage) {
          if (!image.startsWith("`"))
            expect(image.includes("width")).toBeTruthy();
        }
      }

      if (metadata.organizations) {
        const found = await organizations.metadata.find(
          ({ name }) => name == metadata.organizations
        );
        expect(found).toBeDefined();
      }
    });
  }
});
