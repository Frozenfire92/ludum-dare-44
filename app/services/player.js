import Service from '@ember/service';
import { inLocalStorage } from 'ld-44/utils/decorators';
import { action } from '@ember/object';

export default class PlayerService extends Service {
  @inLocalStorage name;
  @inLocalStorage talent;
  @inLocalStorage scrap = 0;

  @action create(name, talent) {
    this.name = name;
    this.talent = talent;
  }

  @action reset() {
    this.name = undefined;
    this.talent = undefined;
    this.scrap = 0;
  }
}
