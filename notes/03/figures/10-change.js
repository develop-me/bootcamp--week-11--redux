const change = (state, { amount }) => {
  return {
    ...state,
    count: state.count + (amount * state.step),
  };
};
