import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EncounterComponent extends Component {
  @tracked index = 0;

  @computed('index')
  get current() {
    return this.args.encounter[this.index];
  }

  @action
  next() {
    if (this.index >= this.args.encounter.length - 1) {
      this.args.done();
    }
    else {
      this.index++;
    }
  }
}
