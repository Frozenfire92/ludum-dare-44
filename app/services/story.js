import Service from '@ember/service';
import { inLocalStorage } from 'ld-44/utils/decorators';
import { action } from '@ember/object';

export default class StoryService extends Service {
  @inLocalStorage wentToSystem;

  @action reset() {
    this.wentToSystem = false;
  }
}
