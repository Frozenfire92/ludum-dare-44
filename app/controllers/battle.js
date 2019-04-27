import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BattleController extends Controller {
  @tracked health = 100;
  @tracked message;

  @action attack() {
    console.log('attack');
    // Chance to do damage
    // Chance to recieve damage
    this.message = 'You attacked brilliantly';
    // Update message
  }
  @action spell() {
    console.log('spell');
  }
  @action explosive() {
    console.log('explosive');
  }
  @action run() {
    console.log('run');
    // TODO Chance for damage and fail
    this.transitionToRoute('main');
  }
}
