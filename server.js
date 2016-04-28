require('./core/hook').install();

var express = require('express');
var catbee = require('catbee');
var compression = require('compression');
var renderer = require('./core/renderer');
var routes = require('./routes');
var { Document } = require('./components/layout.jsx');

var app = express();
var cat = catbee.create();

renderer.register(cat.locator, Document);
routes.register(cat);

app.use(cat.getMiddleware());
app.use(express.static('build'));
app.use(compression());

app.listen(3000, () => {
  console.log('Server started');
});
