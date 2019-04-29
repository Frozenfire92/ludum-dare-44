import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Chance from 'chance';
import { inject as service } from '@ember/service';

const chance = new Chance();

export default class BattleComponent extends Component {
  constructor(){
    super(...arguments);
    this.health = this.args.battle.health
    this.maxHealth = this.args.battle.health;
  }

  @service data;
  @service router;

  @tracked maxHealth = 100;
  @tracked health = 100;
  @tracked message;

  @computed('health', 'maxHealth')
  get style() {
    let p = ((this.health / this.maxHealth) * 100).toFixed(2);
    if (p > 100) p = 100;
    let color = 'green';
    if (p < 30) color = 'red';
    else if (p < 60) color = 'yellow';
    return `width: ${p}%; background-color: ${color};`;
  }

  @action attack() {
    console.log('attack');
    let bonusDie = this.data.player.weapon;
    let message = '';
    let likelihood = 40;
    if (chance.bool({ likelihood: 90 })) {
      message = 'You attacked brilliantly';
      this.health -= chance.rpg(`${bonusDie ? '5' : '3'}d6`, { sum: true });
    }
    else {
      message = 'You missed your attack';
      likelihood = 65;
    }

    if (chance.bool({ likelihood })) {
      message += ' but you took damage.';
      this.data.player.health -= chance.rpg('3d6', { sum: true });
      if (this.data.player.health <= 0) {
        this.router.transitionTo('gameover');
      }
    }
    else {
      message += ' and you dodged their counterattack.'
    }

    if (this.health <= 0) {
      message += 'You defeated the enemy!';
      this.data.player.experience += chance.integer({ min: 100, max: 500 });
    }

    this.message = message;
  }

  @action shield() {
    console.log('shield');
    let bonusDie = this.data.player.weapon;
    let message = '';
    if (chance.bool({ likelihood: 90 })) {
      message = 'You activated your shield just in time';
      if (chance.bool()) {
        message += ' and landed a parry attack'
        this.health -= chance.rpg(`${bonusDie ? '5' : '3'}d6`, { sum: true });
      }
    }
    else {
      message = 'You missed your block';
      this.data.player.health -= chance.rpg('3d6', { sum: true });
      if (this.data.player.health <= 0) {
        this.router.transitionTo('gameover');
      }
    }

    if (this.health <= 0) {
      message += 'You defeated the enemy!';
      this.data.player.experience += chance.integer({ min: 100, max: 500 });
    }

    this.message = message;
  }

  @action explosive() {
    console.log('Nothing happened');
  }

  @action run() {
    console.log('run');
    // TODO Chance for damage and fail
    this.args.continue();
  }
}
