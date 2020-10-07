import React, { useState } from "react";

import AddItem from "./AddItem/AddItem";
import TodoList from "./TodoList/TodoList";

import "./app.scss";

const App = () => {
  const [todoListItems, setTodoListItems] = useState([]);

  const addNewTodoItem = (itemLabel) => {
    if (itemLabel) {
      const newItem = {
        label: itemLabel,
        date: Date.now(),
      };
      setTodoListItems((todoListItems) => [...todoListItems, newItem]);
    }
  };

  const deleteTodoItem = (itemIndex) => {
    const todoListItemsTemp = [...todoListItems];
    todoListItemsTemp.splice(itemIndex, 1);
    setTodoListItems(todoListItemsTemp);
  };

  return (
    <div className="app">
      <div className="application-name">My TodoList</div>
      <AddItem addNewTodoItem={addNewTodoItem}></AddItem>
      <hr className="separator" />
      <TodoList
        todoListItems={todoListItems}
        deleteTodoItem={deleteTodoItem}
      ></TodoList>
    </div>
  );
};

export default App;
