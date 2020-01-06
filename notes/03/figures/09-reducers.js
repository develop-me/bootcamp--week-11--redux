const saveSettings = (state, { step }) => ({ ...state, step: step });

const reducer = (state, action) => {
  switch (action.type) {
    // ...etc.
    case "saveSettings": return saveSettings(state, action);
    default: return state;
  }
};
