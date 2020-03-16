// call the reducer, passing in a valid version of the state
// and an object literal with a "type" property
console.log(
  // if the previous value is 1, we should get 2 if we increment
  reducer({ count: 1 }, { type: "INCREMENT" }), // { count: 2 }
  // if the previous count is 10, we should get 11 if we increment
  reducer({ count: 10 }, { type: "INCREMENT" }), // { count: 11 }
  // if we pass an action it doesn't recognise, we should get
  // the given state back
  reducer({ count: 10 }, { type: "FISHSTICKS" }) // { count: 10 }
);
