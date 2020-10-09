import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem/TodoItem";
import FilterBar from "../FilterBar/FilterBar";

import { ALL } from "../consts.js";

import "./todoList.scss";

const TodoList = ({ todoListItems, updateTodoItemStatus }) => {
  const [filter, setFilter] = useState(ALL);

  const updateCurrentFilter = (filterName) => {
    // TODO: Verify if filterName contains in filter lists
    setFilter(filterName);
  };

  const filteredTodoListItems = () => {
    if(filter === ALL) return todoListItems;
    return todoListItems.filter(item => item.status === filter);
  };

  const renderTodoList = () => {
    return filteredTodoListItems().map((item, index) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          updateTodoItemStatus={(newStatus) => updateTodoItemStatus(item.id, newStatus)}
        ></TodoItem>
      );
    });
  };

  return (
    <div className="todo-list">
      <FilterBar currentFilter={filter} updateFilter={updateCurrentFilter}></FilterBar>
      {renderTodoList()}
    </div>
  );
};

TodoList.propTypes = {
  todoListItems: PropTypes.array.isRequired,
  updateTodoItemStatus: PropTypes.func.isRequired,
};

export default TodoList;
