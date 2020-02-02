const saveSettings = (state, { step }) => ({ ...state, step: step });

const reducer = (state, action) => {
  switch (action.type) {
    // ...etc.
    case "SAVE_SETTINGS": return saveSettings(state, action);
    default: return state;
  }
};
