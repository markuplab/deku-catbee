var Baobab = require('baobab');
var { create } = require('appstate');
var { string, element } = require('deku');

class DocumentRenderer {
  render (routingContext) {
    return Promise.resolve()
      .then(() => runSignal(routingContext))
      .then((tree) => sendHtml(routingContext, tree))
      .catch((e) => console.log(e))
  }
}

function runSignal ({ args, locator }) {
  var signal = create('SERVER_SIGNAL', args.signal);
  var tree = new Baobab();

  return signal(tree, { locator }, args)
    .then(() => tree);
}

function sendHtml (routingContext, tree) {
  var Root = routingContext.locator.resolve('rootComponent');
  var html = string.render(element(Root), { tree });

  routingContext.middleware.response.send(`<!DOCTYPE html>${html}`);
}

module.exports = DocumentRenderer;
