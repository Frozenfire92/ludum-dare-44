import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default class NewRoute extends Route {
  @service data;

  beforeModel() {
    if (this.data.player.name) {
      this.transitionTo('main');
    }
  }
}
