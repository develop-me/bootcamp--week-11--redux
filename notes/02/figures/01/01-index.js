// wrap Router with Provider
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root"),
);
