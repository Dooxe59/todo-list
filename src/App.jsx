import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import AddItem from "./AddTodoItem/AddTodoItem";
import TodoList from "./TodoList/TodoList";
import Button from "./Button/Button";
import { createGuid } from "./utils.js";
import { FINISHED, NEW } from "./consts.js";

import "./app.scss";

const App = () => {
  const defaultTodoItem = {
    label: "Default task",
    timestamp: 1602148900000,
    status: FINISHED,
    id: createGuid(),
  };

  const [todoListItems, setTodoListItems] = useState([defaultTodoItem]);
  const { t, i18n } = useTranslation();

  const addNewTodoItem = (itemLabel) => {
    if (itemLabel) {
      const newItem = {
        label: itemLabel,
        timestamp: Date.now(),
        status: NEW,
        id: createGuid(),
      };
      setTodoListItems((todoListItems) => [...todoListItems, newItem]);
    }
  };

  const updateTodoItemStatus = (itemId, newStatus) => {
    const itemIndex = todoListItems.findIndex(item => item.id === itemId);
    if(itemIndex > -1) {
      const todoListItemsTemp = [...todoListItems];
      todoListItemsTemp[itemIndex].status = newStatus;
      setTodoListItems(todoListItemsTemp);
    }
  };

  const changeLanguage = () => {
    const lang = i18n?.language === "en" ? "fr" : "en";
    i18n.changeLanguage(lang);
    moment.locale(lang);
  };

  return (
    <div className="app">
      <div className="application-name">{t("appTitle")}</div>
      <AddItem addNewTodoItem={addNewTodoItem}></AddItem>
      <hr className="separator" />
      <TodoList
        todoListItems={todoListItems}
        updateTodoItemStatus={updateTodoItemStatus}
      ></TodoList>
      <footer>
        <Button onClick={changeLanguage} label={t("changeLanguage")}></Button>
      </footer>
    </div>
  );
};

export default App;
