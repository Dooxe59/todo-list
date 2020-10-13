import React from "react";
import AddTodoItem from "../../components/addTodoItem/AddTodoItem";
import { TodoListStore } from "../../components/todoList/TodoListStore";

import "./home.scss";

const HomePage = () => {
  // const [todoListItems, dispatch] = useStore();

  return (
    <div className="home">
    <AddTodoItem></AddTodoItem>
      <hr className="separator" />
      {/* <TodoList
        todoListItems={todoListItems}
        updateTodoItemStatus={(itemId, newStatus) => dispatch({type: 'CHANGE_STATUS', itemId: itemId, newStatus: newStatus})}
      ></TodoList> */}
      <TodoListStore></TodoListStore>
      </div>
  );
};

export default HomePage;