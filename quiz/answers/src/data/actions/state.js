export const setTasks = tasks => ({ type: "setTasks", tasks });

export const addTask = task => ({ type: "addTask", task });

export const updateTask = task => ({ type: "updateTask", task });

export const completeTask = id => ({ type: "completeTask", id });

export const removeTask = id => ({ type: "removeTask", id });
