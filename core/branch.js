var { element } = require('deku');
var Baobab = require('baobab');
var type = Baobab.type;

// High ordered function for binding baobab data to components
module.exports = (mapping, Component) => {
  if (!type.watcherMapping(mapping)) {
    throw Error('deku.branch: invalid mapping.');
  }

  return {
    render (model) {
      var context = model.context || {};
      var tree = context.tree;

      if (!(tree instanceof Baobab))
        throw Error('deku.branch/render: could not find the tree in context.');

      var data = tree.project(mapping);
      var props = Object.assign({}, data, model.props);
      return element(Component, props, model.children);
    }
  };
};

