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

module.exports = {
  readData
};
