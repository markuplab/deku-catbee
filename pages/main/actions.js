module.exports = {
  setComponents (args, state) {
    state.set(['page', 'components'], ['header', 'footer'])
  },

  setPage (args, state) {
    state.set(['page', 'name'], 'main');
  }
};
