var { element } = require('deku');
var branch = require('../core/branch');

var Main = require('../pages/main/component.jsx');

const PAGES = {
  main: Main
};

// Main component for render on server
var Document = {
  render () {
    return (
      <html>
        <Head />
        <body>
          <div id="app">
            <App />
          </div>

          <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
};

// Head component for server rendering
var Head = {
  render () {
    return (
      <head>
        <meta charset="UTF-8" />
        <title>Virtual DOM integration with Catbee</title>
      </head>
    )
  }
};

// Browser entry component
var App = branch({
    page: ['page', 'name']
  }, {
  render ({ props }) {
    var Page = PAGES[props.page];

    return (
      <Page/>
    )
  }
});

module.exports = {
  Document, Head, App
};
