import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BattleController extends Controller {
  @action toMain() {
    this.transitionToRoute('main');
  }
}
