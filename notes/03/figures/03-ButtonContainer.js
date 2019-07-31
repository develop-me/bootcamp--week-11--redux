import { change, reset } from "../../data/actions";

const mapDispatchToProps = dispatch => {
  return {
    handleDecrement: () => dispatch(change(-1)),
    handleIncrement: () => dispatch(change(1)),
    handleReset: () => dispatch(reset()),
  };
};
