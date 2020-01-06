import React from "react";

const App = () => (
  <React.Fragment>
    <h1>iCounter</h1>

    <p className="card card-body" />

    <div>
      <button className="btn btn-primary">+</button>
      <button className="btn btn-primary">-</button>
      <button className="btn btn-danger">Reset</button>
    </div>
  </React.Fragment>
);

export default App;
