import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeTodoStatus } from "../../store/todosActions";
import { todosSelector } from "../../store/todosSelectors";
import AddTodoItem from "../../components/addTodoForm/AddTodoForm";

import "./home.scss";
import TodoList from "../../components/todoList/TodoList";

const Home = () => {
  const todoListItems = useSelector(todosSelector);
  const dispatch = useDispatch();
  const updateTodoItemStatus = useCallback(todo => {
    dispatch(changeTodoStatus(todo));
  }, []);
  const addItem = useCallback((todo) => {
    dispatch(addTodo(todo));
  }, []);

  return (
    <div className="home">
      <AddTodoItem addItem={addItem}></AddTodoItem>
      <hr className="separator" />
      <TodoList todoListItems={todoListItems} updateTodoItemStatus={updateTodoItemStatus}></TodoList>
    </div>
  );
};

export default Home;