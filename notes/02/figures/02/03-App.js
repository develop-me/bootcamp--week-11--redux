import Value from "./Value";
import Buttons from "./Buttons";

const App = ({
  value,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => (
  <React.Fragment>
    <h1>iCounter</h1>

    <Value value={ value } />

    <Buttons
      handleIncrement={ handleIncrement }
      handleDecrement={ handleDecrement }
      handleReset={ handleReset }
    />
  </React.Fragment>
);

export default App;
