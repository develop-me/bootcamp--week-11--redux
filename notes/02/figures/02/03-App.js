import Value from "./Value";
import Buttons from "./Buttons";

const App = ({
  value,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => (
  <>
    <h1>iCounter</h1>

    <Value value={ value } />

    <Buttons
      handleIncrement={ handleIncrement }
      handleDecrement={ handleDecrement }
      handleReset={ handleReset }
    />
  </>
);

export default App;
