const setTasks = (state, { tasks }) => ({ ...state, loaded: true, tasks })

const addTask = (state, { task }) => ({ ...state, tasks: [...state.tasks, task] });

const updateTask = (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(item => item.id === task.id ? task : item)
});

const completeTask = (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: true } : task
    )
});

const removeTask = (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
});

const reducer = (state, action) => {
    switch (action.type) {
        case "setTasks": return setTasks(state, action);
        case "addTask": return addTask(state, action);
        case "updateTask": return updateTask(state, action);
        case "completeTask": return completeTask(state, action);
        case "removeTask": return removeTask(state, action);
        default: return state;
    }
};

export default reducer;
