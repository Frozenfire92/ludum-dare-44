import Service, { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DataService extends Service {
  @service player;
  @service settings;

  @service router;

  @action reset() {
    this.player.reset();
    this.settings.reset();
    this.router.transitionTo('title');
  }
}
