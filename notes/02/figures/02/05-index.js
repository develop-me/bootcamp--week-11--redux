ReactDOM.render(
  <Provider store={ store }>
    <App
      handleIncrement={ () => store.dispatch(/* ...etc. */) }
      handleDecrement={ () => store.dispatch(/* ...etc. */) }
      handleReset={ () => store.dispatch(/* ...etc. */) }
    />
  </Provider>,
  document.getElementById("root")
);
