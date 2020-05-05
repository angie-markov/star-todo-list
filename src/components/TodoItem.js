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
      <div className="collection-item">
        <label>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />
          <span style={this.getStyle()}>{title}</span>
        </label>
        <a
          className="btn-floating waves-effect waves-light deep-purple btn-small right"
          onClick={this.props.delTodo.bind(this, id)}
        >
          <i className="material-icons">remove</i>
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
