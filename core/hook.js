var { hook } = require('node-hook');
var { fromString } = require('jsx-transform');

module.exports = {
  install () {
    hook('.jsx', (source) => fromString(source, {
        factory: 'element',
        passUnknownTagsToFactory: true
      })
    )
  }
};

