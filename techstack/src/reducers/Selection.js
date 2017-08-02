export default (state = null, action) => {
  switch (action.type) {
    case 'currentSelection':
      return action.payload;
    default:
      return state;
  }
};
