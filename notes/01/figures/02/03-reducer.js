// the reducer gets given the current version of the state
// and the action that called it, which has a "type" property
const reducer = (state, action) => {
  // depending on what the action's type property is
  // we can do different things
  switch (action.type) {
    // using object spread to create a new object
    // with the same properties
    case "INCREMENT": return { ...state, value: state.value + 1 };
    default: return state;
  }
};
