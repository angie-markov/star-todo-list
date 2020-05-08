import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      color: this.props.todo.completed ? "#c5c5c5" : "#858585",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  componentDidMount = (props) => {
    console.log(this.props.todo);
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div className="collection-item valign-wrapper flex-container">
        <label className="flex-input">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />
          <span style={this.getStyle()}>{title}</span>
        </label>
        <a
          href="#!"
          className="btn-flat flex-btn"
          onClick={this.props.delTodo.bind(this, id)}
        >
          <i className="material-icons">close</i>
        </a>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
