import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlayerRoute extends Route {
  @service data;

  model() {
    return this.data;
  }
}
