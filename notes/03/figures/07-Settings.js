// import in the action
import { saveSettings } from "../../data/actions";

// as before
const mapStateToProps = state => { /* ...etc. */ };

// pass in a function that accepts a value
// pass the value along to the action creator
const mapDispatchToProps = dispatch => {
  return {
    handleSave: value => dispatch(saveSettings(value)),
  };
};

// make sure you pass in mapDispatchToProps as the second argument
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
