const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": return {
      ...state,
      // change the count by the amount property of the action
      count: state.count + action.amount,
    };
    case "RESET": return initial;
    default: return state;
  }
};
