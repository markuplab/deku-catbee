var Baobab = require('baobab');
var { create } = require('appstate');
var { createApp, element } = require('deku');

class DocumentRenderer {
  constructor (locator) {
    this._locator = locator;
  }

  initWithState (routingContext) {
    this._routingContext = routingContext;
    var Root = routingContext.locator.resolve('rootComponent');

    this.render = createApp(
      document.getElementById('app'),
      this.dispatchSignal.bind(this)
    );

    return Promise.resolve()
      .then(() => this.runInitialSignal(this._routingContext))
      .then(() => this.render(element(Root), { tree: this._tree }));
  }

  forceRender (locator) {
    var Root = locator.resolve('rootComponent');
    this.render(element(Root), { tree: this._tree });
  }

  runInitialSignal ({ args }) {
    this._tree = new Baobab();
    var signal = create('BROWSER_SIGNAL', args.signal);
    return signal(this._tree, { locator: this._locator }, args);
  }

  dispatchSignal (actions = [], args = {}) {
    var signal = create('DISPATCHER_SIGNAL', actions);
    return signal(this._tree, { locator: this._locator }, args);
  }
}


module.exports = DocumentRenderer;
