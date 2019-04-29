import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

import { generateConveration } from 'ld-44/utils/generators/encounter';

export default class StationController extends Controller {
  @service data;

  @tracked encounter;

  @action encounterComplete() {
    console.log('TODO encounterComplete');
    this.encounter = null;
  }

  @action openShop() {
    // TODO random items
    this.encounter = [{
      type: 'shop',
      name: 'Station Shop',
      items: [
        ...this.data.armor.map(n => n.data[0]),
        ...this.data.weapons.map(n => n.data[0]),
      ]
    }];
    console.log('TODO openShop randomize items');
  }

  @action startConversation() {
    this.encounter = generateConveration();
  }
}
