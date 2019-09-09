import axios from "../../axios";

import { setTasks, addTask, updateTask, completeTask, removeTask } from "./state";

export const getTasks = () => dispatch => {
    axios.get("/").then(({ data }) => {
        dispatch(setTasks(data.data));
    });
};

export const postTask = value => dispatch => {
    axios.post("/", { task: value }).then(({ data }) => {
        dispatch(addTask(data.data));
    });
};

export const patchTask = (id, value) => dispatch => {
    axios.patch(`/${id}`, { task: value }).then(({ data }) => {
        dispatch(updateTask(data.data));
    });
};

export const patchComplete = id => dispatch => {
    axios.patch(`/${id}/complete`).then(() => {
        dispatch(completeTask(id));
    });
};

export const deleteTask = id => dispatch => {
    axios.delete(`/${id}`).then(() => {
        dispatch(removeTask(id));
    });
};
