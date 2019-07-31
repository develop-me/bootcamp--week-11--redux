const step = (state, { amount }) => ({ ...state, step: amount });

const reducer = (state, action) => {
  switch (action.type) {
    // ...etc.
    case "step": return step(state, action);
    default: return state;
  }
};
