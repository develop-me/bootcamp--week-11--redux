import { connect } from "react-redux";
import Loading from "./Loading";

import { getTasks } from "../../data/actions/api";

const mapStateToProps = ({ loaded }) => ({ loaded });

const mapDispatchToProps = dispatch => ({
    handleLoad: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
