import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewController extends Controller {
  @service data;

  @action submit(e) {
    e.preventDefault();
    let name = e.target.name.value || e.target.name.placeholder;
    let talent = e.target.talent.value;
    this.data.player.create(name, talent);
    this.transitionToRoute('story', 'intro');
  }
}
