var test = require('tape');
var fs = require('fs');
var path =  require('path');
var jsyaml = require('js-yaml');

var paths = '_posts/';

var posts = []

var subDir = getDir(paths);

subDir.forEach(function(dir) {
  file = fs.readdirSync(paths + dir + '/');
  file.forEach(function(i) {
    posts.push( paths + dir + '/' + i);
  });
});

function getDir(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function readPost(filename) {
  var buffer = fs.readFileSync(filename),
  file = buffer.toString('utf8');
  
  try {
    var parts = file.split(/---\s*[\n^]/),
    frontmatter = parts[1];
    
    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(frontmatter),
      content: parts[2]
    };
  } catch(err) {
    console.log("\nCould not read metadata, check the syntax of the metadata and front matter in " + filename);
  }
}

posts.forEach(function(post) {
  var file = readPost(post);
  
  var metadata = file.metadata;
  var content = file.content;
  
  test(post, function(t) {
    t.ok(metadata.title,"post must have a title");
    t.ok(metadata.image,"post must have an image");
    t.ok(metadata.category,"post must have a category");
    if (metadata.layout) {
      t.equal(metadata.layout,"post","layout must equal 'post'");
    }
    if (subDir.indexOf(metadata.category) == -1) {
      t.fail("'" + metadata.category + "' is not a valid category")
    }
    
    if (metadata.category == 'playlists') {
      t.ok(metadata.permalink, "playlist must have a permalink")
    }
    
    t.end();
  });
  
});
