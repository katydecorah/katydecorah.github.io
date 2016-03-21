var test = require('tape');
var fs = require('fs');
var path =  require('path');
var jsyaml = require('js-yaml');

var data = {
  playlists: readData('_data/', 'playlists.yml')
};

// build array of playlists
var playlists = data.playlists.metadata.map(function(post) {
  return post.playlist;
});

function readData(dir, filename) {
  var buffer = fs.readFileSync(dir + filename),
  file = buffer.toString('utf8');
  
  try {
    
    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(file)
    };
  } catch(err) {}
}

////////////////////////////////////////////////
////////////////////////////////////////////////
// PLAYLIST TESTS
////////////////////////////////////////////////
////////////////////////////////////////////////

data.playlists.metadata.forEach(function(post) {
  
  test(post.playlist, function(t) {
    
    t.equal( typeof post, 'object', "playlist must be formatted correctly");
    t.ok(post.playlist, "playlist must have a name");
    //t.ok(post.rdio, "playlist must have an rdio link");
    t.ok(post.spotify, "playlist must have an spotify link");
    t.equal( typeof post.tracks, 'object', "playlist must have tracks");
    
    t.end();
  });
});
