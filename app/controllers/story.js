import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StoryController extends Controller {
  @service data;

  @action returnToMain(model) {
    let route = model.id === 'intro'
      ? this.data.player.name
        ? 'main'
        : 'new'
      : 'main';
    this.transitionToRoute(route);
  }
}
