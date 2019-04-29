import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import { intro } from 'ld-44/utils/data/encounters';

export default class TitleController extends Controller {
  @service data;

  @tracked showIntroStory = false;
  @tracked introStory = intro;

  @action startGame(){
    if (this.data.player.name) {
      this.transitionToRoute('main');
    }
    else {
      this.showIntroStory = true;
    }
  }

  @action transitionToNew() {
    this.transitionToRoute('new');
  }
}
