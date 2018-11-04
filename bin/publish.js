#!/usr/bin/env node

const script = require('../scripts/publish.js');

script.publish({}, null, (err, callback) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(callback);
  process.exit(0);
});
