import React, { useState } from "react";
import AddItem from "./AddItem/AddItem";
import "./app.scss";
import TodoList from "./TodoList/TodoList";

const App = () => {
  const [todoListItems, setTodoListItems] = useState(["totooo", "tata"]);

  const addNewTodoItem = (item) => {
    if (item) {
      setTodoListItems((todoListItems) => [...todoListItems, item]);
    }
  };

  const deleteTodoItem = (itemIndex) => {
    const todoListItemsTemp = [...todoListItems];
    todoListItemsTemp.splice(itemIndex, 1);
    setTodoListItems(todoListItemsTemp);
  };

  return (
    <div className="app">
      <div className="application-name">My React TodoList</div>
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
