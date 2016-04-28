// Run signal from dispatcher, it's especially for component usage
module.exports = (dispatch, actions, args) => {
  return () => {
    dispatch(actions, args);
  }
};
