import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class StoryController extends Controller {
  @action returnToMain() {
    this.transitionToRoute('main');
  }
}
