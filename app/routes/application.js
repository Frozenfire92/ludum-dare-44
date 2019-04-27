import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service data;

  beforeModel(transition){
    // Call this initially to set the dark class on the html element
    this.data.settings.appColorScheme;

    if (transition.targetName === 'index' || !this.data.player.name) {
      this.transitionTo('title');
    }
  }
}
