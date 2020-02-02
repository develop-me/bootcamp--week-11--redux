// the change code pulled out into its own function
const change = (state, action) => {
  return { ...state, count: state.count + action.amount };
};

const reducer = (state, action) => {
  switch (action.type) {
    // call the change function and pass it the state and the action
    case "CHANGE": return change(state, action);
    case "RESET": return initial;
    default: return state;
  }
};
