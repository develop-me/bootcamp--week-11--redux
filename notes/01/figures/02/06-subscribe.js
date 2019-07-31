// subscribe to any changes
store.subscribe(() => {
  // get the current state using the getState method
  // we can get the state, but not update it
  let state = store.getState();

  // for now, just log the new count
  console.log(state.count);
});
