import Route from '@ember/routing/route';

export default class TitleRoute extends Route {
  resetController(controller) {
    controller.showIntroStory = false;
  }
}
