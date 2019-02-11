var visit = require('unist-util-visit');
var toString = require('nlcst-to-string');

module.exports = liquid;

function liquid() {
  return transform;
}

function transform(tree) {
  visit(tree, 'PunctuationNode', visitor);
}

function visitor(node, index, parent) {
  var siblings = parent.children;
  var offset = index;
  var start = index;

  // return if not {%
  if (toString(node) !== '{' && valueOf(siblings[offset]) !== '%') {
    return;
  }

  // mark siblings as SourceNode until closing %}
  while (siblings[start]) {
    siblings[start].type = 'SourceNode';
    if (valueOf(siblings[start]) == '}' && valueOf(siblings[start - 1]) == '%')
      break;
    else start++;
  }
}

function valueOf(node) {
  return node ? toString(node) : '';
}
