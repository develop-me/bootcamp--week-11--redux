// a change action creator
// accepts an amount variable so we can change it easily
export const change = (amount) => {
  return {
    type: "CHANGE",
    amount: amount,
  };
};

// a reset action creator
// doesn't need any additional data, so no parameters
export const reset = () => {
  return {
    type: "RESET",
  };
};
