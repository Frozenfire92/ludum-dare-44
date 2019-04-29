import Service, { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { generateArmor, generateWeapons } from 'ld-44/utils/generators/items';

export default class DataService extends Service {
  @service player;
  @service settings;
  @service story;

  @service router;

  armor = [];
  weaponse = [];

  constructor() {
    super(...arguments);
    this.armor = generateArmor();
    this.weapons = generateWeapons();
  }

  @action reset() {
    this.player.reset();
    this.settings.reset();
    this.story.reset();

    this.router.transitionTo('title');
  }
}
