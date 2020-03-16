export const saveSettings = (step) => {
  return {
    type: "SAVE_SETTINGS",

    // we can use the action creator to tidy up the data
    // make sure it's definitely a number before it
    // gets to the reducer
    step: +step,
  };
};
