import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem/TodoItem";

import "./todoList.scss";

const TodoList = ({ todoListItems, deleteTodoItem }) => {
  const renderTodoList = () => {
    return todoListItems.map((item, index) => {
      return (
        <TodoItem
          key={`${item}-${index}`}
          item={item}
          deleteTodoItem={() => deleteTodoItem(index)}
        ></TodoItem>
      );
    });
  };

  return <div className="todo-list">{renderTodoList()}</div>;
};

TodoList.propTypes = {
  todoListItems: PropTypes.array.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
};

export default TodoList;
