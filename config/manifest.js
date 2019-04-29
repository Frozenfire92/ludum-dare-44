'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/zonkyio/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Earth External Station 4",
    short_name: "EES4",
    description: "A small prototype game made for ludum dare 44",
    start_url: "/ludum-dare-44/",
    display: "standalone",
    background_color: "#313131",
    theme_color: "#313131",
    icons: [
      {
        src: '/ludum-dare-44/assets/images/icon-192.png',
        sizes: '192x192'
      },
      {
        src: '/ludum-dare-44/assets/images/icon-512.png',
        sizes: '512x512'
      }
    ],
    ms: {
      tileColor: '#313131'
    }
  };
}
