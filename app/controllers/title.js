import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TitleController extends Controller {
  @service data;

  @action startGame(){
    if (this.data.player.name) {
      this.transitionToRoute('main');
    }
    else {
      this.transitionToRoute('new');
    }
  }
}
