var DocumentRenderer = require('./server/DocumentRenderer');

module.exports = {
  register (locator, component) {
    locator.register('documentRenderer', DocumentRenderer, true);
    locator.registerInstance('rootComponent', component);
  }
};
