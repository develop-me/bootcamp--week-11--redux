export const saveSettings = (step) => {
  return {
    type: "saveSettings",

    // we can use the action creator to tidy up the data
    // make sure it's definitely a number before it
    // gets to the reducer
    step: +step,
  };
};
