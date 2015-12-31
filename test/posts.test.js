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

// build array of permalinks
var permalinks = posts.reduce(function(prev, post, index, list) {
  var permalink;
  
  if (post) {
    
    var file = readPost(post);
    var metadata = file.metadata;
    if (metadata.permalink) {
      permalink = metadata.permalink;
    } else {
      permalink = post.replace('_posts','').replace('.md','/').replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/,'');
    }
    
    if (!prev[permalink]) { prev[permalink] = []; }
    prev[permalink].push(permalink);
  }
  
  return prev;
}, {});

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
    
    t.equal(typeof metadata, 'object', "front matter must be formatted correctly");
    
    t.ok(metadata.title,"post must have a title");
    t.ok(metadata.image,"post must have an image");
    t.ok(metadata.category,"post must have a category");
    if (metadata.layout) {
      t.equal(metadata.layout,"post","layout must equal 'post'");
    }
    if (subDir.indexOf(metadata.category) == -1) {
      t.fail("'" + metadata.category + "' is not a valid category")
    }
    
    
    // check permalinks
    if (metadata.permalink) {
      peramlink = metadata.permalink;
    } else {
      permalink = post.replace('_posts','').replace('.md','/').replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/,'');
    }
    t.equal(permalinks[permalink].length, 1, 'permalink must not already exist ' + permalink);
    
    if (metadata.category == "playlists") {
      t.ok(metadata.permalink, "playlist must have a permalink")
    }
    
    if (metadata.category == "adventures") {
      t.ok(metadata.locations, "adventure post must have a locations field");
      t.equal(typeof metadata.locations, 'object', "locations must be an object");
      t.ok(metadata.coordinates, "adventure post must have a coordinates field");
      t.equal(typeof metadata.coordinates, 'object', "coordinates must be an object");
    }
    
    if (metadata.tags) {
      t.equal(typeof metadata.tags, 'object', "tags must be an object");
      t.equal(metadata.tags.length < 6, true, "post should have no more than 5 tags");
    }
    
    t.end();
  });
  
});
