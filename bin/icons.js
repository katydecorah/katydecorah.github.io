#!/usr/bin/env node

const feather = require("feather-icons");

Object.keys(feather.icons).forEach((icon) => {
  const svg = feather.icons[icon].toSvg();
  require("fs").writeFile(`./_includes/icons/${icon}.svg`, svg, (err) => {
    if (err) return console.log(err);
    console.log(`Saved ${icon}.svg`);
  });
});
