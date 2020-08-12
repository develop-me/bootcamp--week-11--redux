const App = ({
  // ...etc.
  handleDecrement,
  handleReset,
}) => (
  <React.Fragment>
    { /* ...etc. */ }

    <button
      onClick={ handleDecrement}
      className="btn btn-primary"
    >-</button>

    <button
      onClick={ handleReset }
      className="btn btn-danger"
    >Reset</button>

    { /* ...etc. */ }
  </React.Fragment>
);
