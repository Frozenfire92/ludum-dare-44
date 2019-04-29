import Service from '@ember/service';
import { inLocalStorage } from 'ld-44/utils/decorators';
import { action, computed } from '@ember/object';

export default class PlayerService extends Service {
  @inLocalStorage name;
  @inLocalStorage talent;
  @inLocalStorage scrap = 0;
  @inLocalStorage experience = 0;
  @inLocalStorage health = 100;

  @inLocalStorage headgear
  @inLocalStorage tunic;
  @inLocalStorage pants;
  @inLocalStorage boots;

  @inLocalStorage weapon;

  @inLocalStorage equipment = [];

  @computed('experience')
  get level() {
    return this.experience < 1000
      ? 1
      : parseInt(this.experience / 1000);
  }

  @computed('equipment')
  get equipmentNames() {
    return this.equipment.mapBy('name');
  }

  @action create(name, talent) {
    this.name = name;
    this.talent = talent;
    this.scrap = 0;
    this.experience = 0;
    this.health = 100;
    this.equipment = [
      {
        type: 'headgear',
        name: 'basic cap'
      },
      {
        type: 'tunic',
        name: 'simple shirt'
      },
      {
        type: 'pants',
        name: 'plain pants'
      },
      {
        type: 'boots',
        name: 'worn shoes'
      },
      {
        type: 'daggers',
        name: 'small knife'
      },

    ]
  }

  @action reset() {
    this.name = null;
    this.talent = null;
    this.scrap = null;
    this.experience = 0;
    this.health = 100;

    this.headgear = null;
    this.armor = null;
    this.pants = null;
    this.boots = null;

    this.weapon = null;

    this.equipment = [];
  }
}
