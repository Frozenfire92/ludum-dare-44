import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('title');
  this.route('settings');
  this.route('stats');
  this.route('settlement');
  this.route('battle');
  this.route('main');
});

export default Router;
