import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import "./todoItem.scss";

const TodoItem = ({ item, deleteTodoItem }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-value">
        <span className="todo-item-label truncated" title={item.label}>
          {item.label}
        </span>
        <span className="todo-item-date">Add the {item.date} (timestamp)</span>
      </div>
      <div className="delete-todo-item-button">
        <Button onClick={deleteTodoItem} label="Delete" theme="red"></Button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
};

// TODO: validator object item

export default TodoItem;
