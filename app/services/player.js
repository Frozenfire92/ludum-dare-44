import Service from '@ember/service';
import { inLocalStorage } from 'ld-44/utils/decorators';
import { action } from '@ember/object';

export default class PlayerService extends Service {
  @inLocalStorage name;
  @inLocalStorage talent;
  @inLocalStorage scrap;

  @inLocalStorage headgear
  @inLocalStorage tunic;
  @inLocalStorage pants;
  @inLocalStorage boots;

  @inLocalStorage weapon;
  @inLocalStorage spell;

  @action create(name, talent) {
    this.name = name;
    this.talent = talent;
    this.scrap = 0;
  }

  @action reset() {
    this.name = null;
    this.talent = null;
    this.scrap = null;

    this.headgear = null;
    this.armor = null;
    this.pants = null;
    this.boots = null;
    this.weapon = null;
    this.spell = null;
  }
}
