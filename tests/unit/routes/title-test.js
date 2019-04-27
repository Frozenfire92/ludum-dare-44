import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | title', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:title');
    assert.ok(route);
  });
});
