import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MainRoute extends Route {
  @service data;

  model() {
    return this.data;
  }
}
