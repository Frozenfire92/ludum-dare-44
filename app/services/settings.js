import Service from '@ember/service';

import { inLocalStorage, setHtmlClass } from 'ld-44/utils/decorators';

export default class SettingsService extends Service {
  @setHtmlClass
  @inLocalStorage
  appColorScheme = 'light';
}
