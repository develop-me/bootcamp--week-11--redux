export const step = (amount) => {
  return {
    type: "step",

    // we can use the action creator to tidy up the data
    // make sure it's definitely a number before it
    // gets to the reducer
    amount: +amount,
  };
};
