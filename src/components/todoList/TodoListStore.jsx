import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../store/todosSelectors";
import { changeStatus } from "../../store/todosActions";
import TodoList from "./TodoList";

export const TodoListStore = () => {
  const todoListItems = useSelector(todosSelector);
  const dispatch = useDispatch();
  const updateTodoItemStatus = useCallback(todo => {
    dispatch(changeStatus(todo));
  }, []);

  return (<TodoList todoListItems={todoListItems} updateTodoItemStatus={updateTodoItemStatus}></TodoList>)
};
