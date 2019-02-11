#!/usr/bin/env node
// A fork of alex
// https://github.com/get-alex/alex
// MIT © Titus Wormer
'use strict';

var PassThrough = require('stream').PassThrough;
var notifier = require('update-notifier');
var meow = require('meow');
var engine = require('unified-engine');
var unified = require('unified');
var markdown = require('remark-parse');
var html = require('rehype-parse');
var frontmatter = require('remark-frontmatter');
var english = require('retext-english');
var remark2retext = require('remark-retext');
var rehype2retext = require('rehype-retext');
var report = require('vfile-reporter');
var diff = require('unified-diff');
var pack = require('../../package');
var filter = require('./filter');
var diacritics = require('retext-diacritics');
var indefiniteArticle = require('retext-indefinite-article');
var redundantAcronyms = require('retext-redundant-acronyms');
var simplify = require('retext-simplify');
var repeated = require('retext-repeated-words');
var passive = require('retext-passive');
var simplifyConfig = require('./simplify.config.json');
var spell = require('retext-spell');
var dictionary = require('dictionary-en-us');
var urls = require('retext-syntax-urls');
var liquid = require('./liquid.js');

var textExtensions = ['md'];
var htmlExtensions = ['html'];

// Update messages.
notifier({ pkg: pack }).notify();

// Set-up meow.
var cli = meow(
  [
    'Usage: editor [<glob> ...] [options ...]',
    '',
    'Options:',
    '',
    '  -w, --why    output sources (when available)',
    '  -q, --quiet  output only warnings and errors',
    '  -t, --text   treat input as plain-text (not markdown)',
    '  -l, --html   treat input as html (not markdown)',
    '  -d, --diff   ignore unchanged lines (affects Travis only)',
    '  -c, --dict   path to your personal dictionary',
    '  --stdin      read from stdin',
    '',
    'When no input files are given, searches for markdown and text',
    'files in the current directory, `doc`, and `docs`.',
    '',
    'Examples',
    '  $ echo "His network looks good" | editor --stdin',
    '  $ editor *.md !example.md',
    '  $ editor'
  ].join('\n'),
  {
    flags: {
      version: { type: 'boolean', alias: 'v' },
      help: { type: 'boolean', alias: 'h' },
      stdin: { type: 'boolean' },
      text: { type: 'boolean', alias: 't' },
      html: { type: 'boolean', alias: 'l' },
      diff: { type: 'boolean', alias: 'd' },
      quiet: { type: 'boolean', alias: 'q' },
      why: { type: 'boolean', alias: 'w' },
      dict: { type: 'string', alias: 'c' }
    }
  }
);

// Set-up.
var extensions = cli.flags.html ? htmlExtensions : textExtensions;
var defaultGlobs = ['{docs/**/,doc/**/,}*.{' + extensions.join(',') + '}'];
var silentlyIgnore;
var globs;
var myDictionary;

if (cli.flags.dict) {
  myDictionary = require('fs').readFileSync(`./${cli.flags.dict}`, 'utf8');
}

if (cli.flags.stdin) {
  if (cli.input.length !== 0) {
    throw new Error('Do not pass globs with `--stdin`');
  }
} else if (cli.input.length === 0) {
  globs = defaultGlobs;
  silentlyIgnore = true;
} else {
  globs = cli.input;
}

engine(
  {
    processor: unified(),
    files: globs,
    extensions: extensions,
    configTransform: transform,
    output: false,
    out: false,
    streamError: new PassThrough(),
    rcName: '.editorrc',
    packageField: 'editor',
    ignoreName: '.editorignore',
    silentlyIgnore: silentlyIgnore,
    frail: true,
    defaultConfig: transform()
  },
  function(err, code, result) {
    var out = report(err || result.files, {
      verbose: cli.flags.why,
      quiet: cli.flags.quiet
    });

    if (out) {
      console.error(out);
    }

    process.exit(code);
  }
);

function transform(options) {
  var settings = options || {};
  var plugins = [
    english,
    liquid,
    diacritics,
    indefiniteArticle,
    redundantAcronyms,
    repeated,
    [simplify, simplifyConfig],
    passive,
    urls,
    [spell, { dictionary: dictionary, personal: myDictionary }]
  ];

  if (cli.flags.html) {
    plugins = [html, [rehype2retext, unified().use({ plugins: plugins })]];
  } else if (!cli.flags.text) {
    plugins = [
      markdown,
      [frontmatter, ['yaml', 'toml']],
      [remark2retext, unified().use({ plugins: plugins })]
    ];
  }

  plugins.push([filter, { allow: settings.allow }]);

  /* istanbul ignore if - hard to check. */
  if (cli.flags.diff) {
    plugins.push(diff);
  }

  return { plugins: plugins };
}
