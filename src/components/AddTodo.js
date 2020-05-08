import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="valign-wrapper flex-container">
          <div className="input-field flex-input">
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              placeholder="Add a task"
            />
          </div>
          <input
            type="submit"
            value="Add task"
            className="btn deep-purple flex-btn"
          />
        </div>
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
