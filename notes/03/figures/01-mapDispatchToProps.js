// import connect from React Redux
// this will talk to the Provider component, which has
// wrapped the entire app, so that it can access the store
import { connect } from "react-redux";

// import the React component that we want to wrap
// in the same directory, so path is short
import Buttons from "./Buttons";

// mapDispatchToProps: passes in the store.dispatch method
// we can then create anonymous functions to call it with the
// correct actions - these get merged in to any other props being passed in
const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch({ type: "CHANGE", amount: 1 }),
    handleDecrement: () => dispatch({ type: "CHANGE", amount: -1 }),
    handleReset: () => dispatch({ type: "RESET" }),
  };
};

// use the connect function to connect mapDispatchToProps
// to the React component we want to wrap
// note that we pass null for the first argument (mapStateToProps)
// returns a new React component
export default connect(null, mapDispatchToProps)(Buttons);
