import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PagerComponent extends Component {
  @tracked index = 0;

  get isDone() {
    return this.index < (this.args.page.content.length - 1);
  }

  @action next() {
    if (this.isDone) {
      this.index++;
    }
    else {
      if (this.args.done && typeof this.args.done === 'function') {
        this.args.done();
      }
    }
  }
}
