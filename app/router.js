import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('title');
  this.route('new');
  this.route('main');

  this.route('map');

  this.route('player');
  this.route('ship');
  this.route('station');

  this.route('stats');
  this.route('settings');
  this.route('gameover');
});

export default Router;
