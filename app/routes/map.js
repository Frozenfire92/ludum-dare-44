import Route from '@ember/routing/route';

export default class MapRoute extends Route {
  resetController(controller) {
    controller.encounter = null;
    controller.encounterCB = null;
  }
}
