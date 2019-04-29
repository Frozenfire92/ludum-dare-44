import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import { secondEncounter } from 'ld-44/utils/data/encounters'
import { generateEncounter } from 'ld-44/utils/generators/encounter'

export default class MapController extends Controller {
  @service data;

  @tracked encounter;
  encounterCB = null;

  @action expedition(type) {
    switch(type) {
      case 'explore-system':
        if (this.data.story.wentToSystem) {
          console.log('TODO generateEncounter', type);
          this.encounter = generateEncounter(type);
        }
        else {
          this.encounter = secondEncounter;
          this.encounterCB = () => this.data.story.wentToSystem = true;
        }
        break;
      default:
        console.log('TODO generateEncounter', type);
        this.encounter = generateEncounter(type);
        break;
    }
  }

  @action encounterComplete() {
    if (this.encounterCB && typeof this.encounterCB === 'function') {
      this.encounterCB();
    }
    this.encounter = null;
    this.encounterCB = null;
  }
}
