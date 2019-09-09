import React, { Component } from "react";

import Input from "../../Input";

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleEdit() {
        this.setState({ editing: true });
    }

    handleSave(value) {
        this.props.onEdit(value);
        this.setState({ editing: false });
    }

    render() {
        let { task, onComplete, onDelete } = this.props;
        let { editing } = this.state;

        return (
            <li className={ `list-group-item checkbox ${ task.completed ? "disabled" : "" }` }>
                <label className="checkbox-inline">
                    <input className="col-md-1" disabled={ task.completed } onChange={ onComplete } type="checkbox" checked={ task.completed } />
                </label>

                {
                    editing ?
                        <Input label="Save" value={ task.task } handleSubmit={ this.handleSave } /> :
                        <span className="task-text" onClick={ this.handleEdit }>
                            { task.task }
                        </span>
                }

                <button onClick={ onDelete } className="task-rm btn btn-danger btn-sm">
                    &times;
                </button>
            </li>
        );
    }
}

export default Task;
