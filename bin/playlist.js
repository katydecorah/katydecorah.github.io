#!/usr/bin/env node

const script = require('../scripts/playlist.js');
const argv = require('minimist')(process.argv.slice(2));

if (!argv.playlist) {
  console.log(
    'Usage:   node bin/playlist.js --playlist=<playlist-id>'
  );
  console.log(
    'Example: node bin/playlist.js --playlist=0000111100001111'
  );
  process.exit(1);
}

process.env.SpotifyPlaylist = argv.playlist;

script.playlist({}, null, (err, callback) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(callback);
});
