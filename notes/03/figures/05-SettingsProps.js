import { connect } from "react-redux";

import Settings from "./Settings";

const mapStateToProps = state => {
  return {
    step: state.step,
  };
};

export default connect(mapStateToProps)(Settings);
