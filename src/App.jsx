import React, { useState } from "react";

import AddItem from "./AddItem/AddItem";
import TodoList from "./TodoList/TodoList";
import Button from "./Button/Button";

import "./app.scss";

import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

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

  const changeLanguage = () => {
    const lang = i18n?.language === "en" ? "fr" : "en";
    i18n.changeLanguage(lang);
  };

  return (
    <div className="app">
      <div className="application-name">{t("appTitle")}</div>
      <AddItem addNewTodoItem={addNewTodoItem}></AddItem>
      <hr className="separator" />
      <TodoList
        todoListItems={todoListItems}
        deleteTodoItem={deleteTodoItem}
      ></TodoList>
      <footer>
        <Button onClick={changeLanguage} label={t("changeLanguage")}></Button>
      </footer>
    </div>
  );
};

export default App;
