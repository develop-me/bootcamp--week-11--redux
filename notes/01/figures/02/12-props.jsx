ReactDOM.render(
  <App
    count={ state.count }
    handleIncrement={ () => store.dispatch({ type: "increment" }) }
  />,
  document.getElementById("root")
);
