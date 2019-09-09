import { connect } from "react-redux";
import Task from "./Task";

import { patchComplete, patchTask, deleteTask } from "../../../data/actions/api";

const mapDispatchToProps = (dispatch, { task }) => ({
    onComplete: () => dispatch(patchComplete(task.id)),
    onDelete: () => dispatch(deleteTask(task.id)),
    onEdit: value => dispatch(patchTask(task.id, value)),
});

export default connect(null, mapDispatchToProps)(Task);
