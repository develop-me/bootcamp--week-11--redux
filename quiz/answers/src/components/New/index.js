import { connect } from "react-redux";
import Input from "../Input";

import { postTask } from "../../data/actions/api";

const mapDispatchToProps = dispatch => ({
    handleSubmit: value => dispatch(postTask(value)),
});

export default connect(null, mapDispatchToProps)(Input);
