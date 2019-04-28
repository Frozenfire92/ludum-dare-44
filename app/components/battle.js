import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BattleComponent extends Component {
  @tracked health = 100;
  @tracked message;

  @computed('health')
  get style() {
    let color = 'green';
    if (this.health < 30) color = 'red';
    else if (this.health < 60) color = 'yellow';
    return `width: ${this.health}%; background-color: ${color};`;
  }

  @action attack() {
    console.log('attack');
    let message = 'You attacked brilliantly';
    // Chance to recieve damage
    // Chance to do damage
    this.health -= 10;

    if (this.health <= 0) {
      message = 'You defeated the enemy'
    }

    this.message = message;
  }

  @action shield() {
    console.log('shield');
    this.message = 'You activated your shield just in time';
  }

  @action explosive() {
    console.log('You blew them up');
  }

  @action run() {
    console.log('run');
    // TODO Chance for damage and fail
    this.args.continue();
  }
}
