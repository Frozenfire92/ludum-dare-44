import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GameoverController extends Controller {
  constructor() {
    super(...arguments);
    setTimeout(() => this.ready = true, 2000);
  }

  ready = false;
  @service data;

  @action toTitle() {
    if (this.ready) {
      this.data.reset();
    }
  }
}
