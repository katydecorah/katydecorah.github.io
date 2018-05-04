const test = require('tape');
const fs = require('fs');
const path = require('path');
const jsyaml = require('js-yaml');
const paths = '_posts/';

// get directories in a given path
const getDir = src =>
  fs
    .readdirSync(src)
    .filter(file => fs.statSync(path.join(src, file)).isDirectory());

const readPost = filename => {
  const buffer = fs.readFileSync(filename),
    file = buffer.toString('utf8');

  try {
    const parts = file.split(/---\s*[\n^]/),
      frontmatter = parts[1];

    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(frontmatter),
      content: parts[2]
    };
  } catch (err) {
    console.log(
      `\nCould not read metadata, check the syntax of the metadata and front matter in ${filename}`
    );
  }
};

let posts = [];
const subDir = getDir(paths);
subDir.forEach(dir => {
  let file = fs.readdirSync(paths + dir + '/');
  file.forEach(i => {
    posts.push(paths + dir + '/' + i);
  });
});

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
        .replace('_posts', '')
        .replace('.md', '/')
        .replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/, '');
    }

    if (!prev[permalink]) {
      prev[permalink] = [];
    }
    prev[permalink].push(permalink);
  }

  return prev;
}, {});

posts.forEach(post => {
  const file = readPost(post),
    metadata = file.metadata;

  test(post, t => {
    t.equal(
      typeof metadata,
      'object',
      'front matter must be formatted correctly'
    );

    t.ok(metadata.title, 'post must have a title');
    t.ok(metadata.image, 'post must have an image');
    t.ok(metadata.category, 'post must have a category');
    if (metadata.layout) {
      t.equal(metadata.layout, 'post', 'layout must equal `post`');
    }
    if (subDir.indexOf(metadata.category) == -1) {
      t.fail('`' + metadata.category + '` is not a valid category');
    }

    // check permalinks
    let permalink;
    if (metadata.permalink) {
      permalink = metadata.permalink;
    } else {
      permalink = post
        .replace('_posts', '')
        .replace('.md', '/')
        .replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/, '');
    }
    t.equal(
      permalinks[permalink].length,
      1,
      'permalink must not already exist ' + permalink
    );

    if (metadata.category == 'playlists') {
      t.ok(metadata.permalink, 'playlist must have a permalink');
    }

    if (metadata.category == 'adventures') {
      t.ok(metadata.locations, 'adventure post must have a locations field');
      t.equal(
        typeof metadata.locations,
        'object',
        'locations must be an object'
      );
      t.ok(
        metadata.coordinates,
        'adventure post must have a coordinates field'
      );
      t.equal(
        typeof metadata.coordinates,
        'object',
        'coordinates must be an object'
      );
    }

    if (metadata.tags) {
      t.equal(typeof metadata.tags, 'object', 'tags must be an object');
      t.equal(
        metadata.tags.length < 6,
        true,
        'post should have no more than 5 tags'
      );
    }

    t.end();
  });
});
