const ROUTES = [
  {
    expression: '/',
    args: {
      signal: require('./pages/main/signal')
    }
  }
];

module.exports = {
  register (cat) {
    ROUTES.forEach((route) => cat.registerRoute(route))
  }
};
