import Service, { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { generateArmor } from 'ld-44/utils/data/armor';

export default class DataService extends Service {
  @service player;
  @service settings;

  @service router;

  constructor() {
    super(...arguments);
    console.log(generateArmor());
  }

  @action reset() {
    this.player.reset();
    this.settings.reset();
    this.router.transitionTo('title');
  }
}
