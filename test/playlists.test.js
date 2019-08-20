const test = require('tape');
const utils = require('./utils');

const data = {
  playlists: utils.readData('_data/', 'playlists.yml')
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
