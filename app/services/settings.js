import Service from '@ember/service';
import { action } from '@ember/object';

import { inLocalStorage, setHtmlClass } from 'ld-44/utils/decorators';

export default class SettingsService extends Service {
  @setHtmlClass
  @inLocalStorage
  appColorScheme = 'dark';

  @action reset() {
    this.appColorScheme = 'dark'
  }
}
