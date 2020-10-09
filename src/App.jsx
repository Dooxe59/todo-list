import React, { useState } from "react";

import AddItem from "./AddItem/AddItem";
import TodoList from "./TodoList/TodoList";
import Button from "./Button/Button";

import moment from "moment";
import { useTranslation } from "react-i18next";

import { ABORTED, FINISHED, NEW } from "./consts.js";

import "./app.scss";

const defaultTodoItem = {
  label: "Default task",
  timestamp: 1602148900000,
  status: FINISHED,
};

const App = () => {
  const [todoListItems, setTodoListItems] = useState([defaultTodoItem]);
  const { t, i18n } = useTranslation();

  const addNewTodoItem = (itemLabel) => {
    if (itemLabel) {
      const newItem = {
        label: itemLabel,
        timestamp: Date.now(),
        status: NEW,
      };
      setTodoListItems((todoListItems) => [...todoListItems, newItem]);
    }
  };

  // TODO/ refactor methods to change state
  const abortTodoItem = (itemIndex) => {
    const todoListItemsTemp = [...todoListItems];
    todoListItemsTemp[itemIndex].status = ABORTED;
    setTodoListItems(todoListItemsTemp);
  };

  const finishTodoItem = (itemIndex) => {
    const todoListItemsTemp = [...todoListItems];
    todoListItemsTemp[itemIndex].status = FINISHED;
    setTodoListItems(todoListItemsTemp);
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
        abortTodoItem={abortTodoItem}
        finishTodoItem={finishTodoItem}
      ></TodoList>
      <footer>
        <Button onClick={changeLanguage} label={t("changeLanguage")}></Button>
      </footer>
    </div>
  );
};

export default App;
