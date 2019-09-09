import { connect } from "react-redux";
import Tasks from "./Tasks";

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps)(Tasks);
