const request = require('request');
const _ = require('underscore');
const fs = require('fs');
const moment = require('moment');

module.exports.playlist = (event, context, callback) => {
  getPlaylist()
    .then(formatTracks)
    // create new post
    .then(data => createPost(data))
    // save tracks to playlists.yml
    .then(data => updateMaster(data))
    // save image to img/playlists/
    .then(data => saveImage(data))
    .then(data => callback(null, data))
    .catch(err => callback(err));
};

const getPlaylist = () => {
  const opts = {
    url: `https://api.spotify.com/v1/users/katydecorah/playlists/${
      process.env.SpotifyPlaylist
    }?fields=name%2Cimages%2Cexternal_urls%2Ctracks.items(track(name%2Calbum(name)%2Cartists(name)))`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SpotifyAccessToken}`
    }
  };
  return new Promise((resolve, reject) => {
    request(opts, (err, res, body) => {
      if (err) reject(err);
      resolve(JSON.parse(body));
    });
  });
};

const formatTracks = data => {
  const tracks = data.tracks.items.reduce((arr, track) => {
    arr.push({
      name: track.track.name,
      artist: _.pluck(track.track.artists, 'name').join(', '),
      album: track.track.album.name
    });
    return arr;
  }, []);
  return new Promise(resolve => {
    resolve({
      name: data.name,
      formatted_name: data.name
        .replace('/', '-')
        .toLowerCase()
        .replace(' ', '-'),
      url: data.external_urls.spotify,
      tracks: tracks,
      image: _.findWhere(data.images, { width: 640 }).url
    });
  });
};

const createPost = data => {
  let contents = `---\nlayout: post\ntitle: ${
    data.name
  }\ncategory: playlists\nspotify: ${data.url}\nimage: img/playlists/${
    data.formatted_name
  }.png\npermalink: /playlists/${
    data.formatted_name
  }/\n---\n\n[Listen on Spotify](${data.url})\n\n`;

  data.tracks.map(track => {
    contents += `* ${track.name}, ${track.artist}\n`;
  });
  return new Promise(resolve => {
    fs.writeFile(
      `_posts/playlists/${moment().format('YYYY-MM-DD')}-${
        data.formatted_name
      }.md`,
      contents,
      err => {
        if (err) throw err;
        resolve(data);
      }
    );
  });
};

const updateMaster = data => {
  let content = fs.readFileSync('_data/playlists.yml').toString('utf8');
  content += `- playlist: ${data.name}\n  spotify: ${data.url}\n  tracks:\n`;
  data.tracks.map(track => {
    content += `  - track: "${track.name}"\n    artist: "${
      track.artist
    }"\n    album: "${track.album}"\n`;
  });
  return new Promise(resolve => {
    fs.writeFile('_data/playlists.yml', content, err => {
      if (err) throw err;
      resolve(data);
    });
  });
};

const saveImage = data => {
  return new Promise(resolve => {
    download(data.image, `img/playlists/${data.formatted_name}.png`, err => {
      if (err) throw err;
      resolve('done!');
    });
  });
};

const download = (uri, filename, callback) => {
  request.head(uri, () => {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
};
