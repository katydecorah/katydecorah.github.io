const test = require('tape');
const fs = require('fs');
const jsyaml = require('js-yaml');

const readData = (dir, filename) => {
  var buffer = fs.readFileSync(dir + filename),
    file = buffer.toString('utf8');

  return {
    name: filename,
    file: file,
    metadata: jsyaml.load(file)
  };
};

const data = {
  playlists: readData('_data/', 'playlists.yml')
};

////////////////////////////////////////////////
////////////////////////////////////////////////
// PLAYLIST TESTS
////////////////////////////////////////////////
////////////////////////////////////////////////

data.playlists.metadata.forEach(post => {
  test(post.playlist, t => {
    t.equal(typeof post, 'object', 'playlist must be formatted correctly');
    t.ok(post.playlist, 'playlist must have a name');
    //t.ok(post.rdio, 'playlist must have an rdio link');
    t.ok(post.spotify, 'playlist must have an spotify link');
    t.equal(typeof post.tracks, 'object', 'playlist must have tracks');

    t.end();
  });
});
