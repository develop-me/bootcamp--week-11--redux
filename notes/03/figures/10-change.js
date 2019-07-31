const change = (state, action) => {
  return {
    ...state,
    count: state.count + (action.amount * state.step),
  };
};
