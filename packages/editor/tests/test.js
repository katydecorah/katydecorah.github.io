var test = require('tape');
var retext = require('retext');
var liquid = require('../liquid.js');
var fixture = require('./fixtures/fixture.json');
var fixture2 = require('./fixtures/fixture-2.json');
// var fixture3 = require('./fixtures/fixture-3.json');

var position = retext().use(liquid);

test('liquid()', function(t) {
  t.deepEqual(
    position.runSync(position.parse('{% include img.html class="img-half" %}')),
    fixture,
    'should work'
  );
  t.deepEqual(
    position.runSync(
      position.parse('hello {% include img.html class="img-half" %} hi')
    ),
    fixture2,
    'should work'
  );

  // t.deepEqual(position.runSync(position.parse('{% include img.html src="img.png" alt="Clear for the hour. 59℉" %}')), fixture3, 'should work');
  t.end();
});
