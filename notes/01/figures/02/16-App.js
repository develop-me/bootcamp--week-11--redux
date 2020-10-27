const App = ({
  // ...etc.
  handleDecrement,
  handleReset,
}) => (
  <>
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
  </>
);
