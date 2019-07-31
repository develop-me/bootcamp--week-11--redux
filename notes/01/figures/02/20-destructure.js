// we only need the amount property at this point
const change = (state, { amount }) => {
  return { ...state, count: state.count + amount };
};
