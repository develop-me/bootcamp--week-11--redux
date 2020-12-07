ReactDOM.render(
  <App
    count={ state.count }
    handleIncrement={ () => store.dispatch({ type: "INCREMENT" }) }
  />,
  document.getElementById("root")
);
