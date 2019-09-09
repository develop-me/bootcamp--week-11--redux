# Quiz

---

## Rules

- Feel free to vent any frustration with some laughter yoga

---

## Redux

*Use `npm init react-app` to make a new React app called `quiz` for the following challenges.*

Add the Bootstrap CSS file and try to use Bootstrap styling where appropriate.

## Question

To Do List apps are the "Hello, World!" of apps.

Use the `restful.training` [`/tasks`](https://github.com/develop-me/restful.training#tasks) end-point to create an API-driven To Do List app using React + Redux.

The functionality is very simple:

- You can list all the tasks
- You can add a new task
- You can edit the wording of a task
- You can mark a task as completed
- You can delete a task

See [ToDo MVC](http://todomvc.com/examples/react/) for inspiration

[Answers](https://github.com/develop-me/week-11--redux/tree/master/quiz/answers)

---

If you try and do it all in one go without planning anything you're going to get stuck.

- First, do a rough sketch (on paper!) of what you want your app to look like

- Then, create the JSX components. No Redux or API calls necessary. Get it looking right and broken into sensible components.
    - Remember that form components should be controlled components

- Next add Redux and get everything working locally. You should be able to see all the tasks, add a task, mark a task as completed, edit a task, and remove a task.

    - A "task" should have the following structure:

    ```
    {
        task: "Learn Redux",
        completed: true
    }
    ```

- Finally, add the API calls. Don't do this until you've got everything working locally.
    - Now that the tasks are stored in a database, remember to update any `key`s to use the `id` property
