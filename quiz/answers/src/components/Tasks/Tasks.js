import React from "react";

import Task from "./Task";

const Tasks = ({ tasks }) => tasks.length === 0 ? <p>No tasks</p> : (
    <ul className="list-group">
        {
            tasks.map(task => (
                <Task key={ task.id } task={ task } />
            ))
        }
    </ul>
);

export default Tasks;
