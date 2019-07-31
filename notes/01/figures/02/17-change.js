const reducer = (state, action) => {
  switch (action.type) {
    case "change": return {
      ...state,
      // change the count by the amount property of the action
      count: state.count + action.amount,
    };
    case "reset": return initial;
    default: return state;
  }
};
