var catbee = require('catbee');
var routes = require('./routes');
var renderer = require('./core/renderer');
var { App } = require('./components/layout.jsx');

var cat = catbee.create();

renderer.register(cat.locator, App);

routes.register(cat);
cat.startWhenReady();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/layout.jsx', () => {
    var { App } = require('./components/layout.jsx');
    cat.locator.unregister('rootComponent');
    cat.locator.registerInstance('rootComponent', App);

    cat.locator
      .resolve('documentRenderer')
      .forceRender(cat.locator);
  });
}
