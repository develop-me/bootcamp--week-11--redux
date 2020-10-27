import { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.currentTarget.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.value)
        this.setState({ value: "" });
    }

    render() {
        let { value } = this.state;
        let { label } = this.props;

        return (
            <form onSubmit={ this.handleSubmit } className="form-inline">
                <input className="form-control" onChange={ this.handleChange } value={ value } />
                <button className="btn btn-primary">{ label }</button>
            </form>
        );
    }
};

Input.defaultProps = {
    value: "",
};

export default Input;
