import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import "./todoItem.scss";

const TodoItem = ({ item, deleteTodoItem }) => {
  return (
    <div className="todo-item">
      <span className="todo-item-label truncated" title={item}>
        {item}
      </span>
      {/* <button className="delete-todo-item-button" onClick={deleteTodoItem}>
        Delete
      </button> */}
      <div className="delete-todo-item-button">
        <Button onClick={deleteTodoItem} label="Delete" theme="red"></Button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
};

export default TodoItem;
