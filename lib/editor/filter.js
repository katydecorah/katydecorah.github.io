// A fork of alex
// https://github.com/get-alex/alex
// MIT © Titus Wormer

var control = require('remark-message-control');

module.exports = filter;

function filter(options) {
  var settings = options || /* istanbul ignore next */ {};
  return control({
    name: 'editor',
    disable: settings.allow,
    source: []
  });
}
