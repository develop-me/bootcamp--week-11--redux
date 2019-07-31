// we update subscribe to call the ReactDOM.render
// method whenever the state changes
const render = () => {
  let state = store.getState();

  // pass in state.value as a value prop
  ReactDOM.render(
    <App count={ state.count } />,
    document.getElementById("root")
  );
};

store.subscribe(render); // render when state changes
render(); // render when page loads using initial state
