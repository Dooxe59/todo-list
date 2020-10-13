import React, { useState, useRef } from "react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Button from "../ui/Button/Button";
import { addTodoItem } from "../../store/todosActions";

import "./addTodoItem.scss";

const AddItem = () => {
  const dispatch = useDispatch();
  const addItem = useCallback((todo) => {
    dispatch(addTodoItem(todo));
  }, []);

  const { t } = useTranslation();
  const [newTodoItemValue, setNewTodoItemValue] = useState("");
  const inputRef = useRef(null);

  const handleInputTextChange = (event) => {
    setNewTodoItemValue(event.target.value);
  };

  const isValidNewItem = () => {
    return newTodoItemValue?.trim()?.length > 0;
  };

  const setFocusOnInput = () => {
    inputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      validateAndAddNewTodoItem();
      event.preventDefault();
    }
  };

  const validateAndAddNewTodoItem = () => {
    if (isValidNewItem()) {
      addItem({itemLabel: newTodoItemValue.trim()});
      clearInputText();
      setFocusOnInput();
    }
  };

  const clearInputText = () => {
    setNewTodoItemValue("");
  };

  return (
    <div className="add-todo-item">
      <label className="add-todo-item-input-label">
        <input
          autoFocus
          className="add-todo-item-input"
          name="newTodoItemValue"
          type="text"
          autoComplete="off"
          placeholder=" "
          ref={inputRef}
          value={newTodoItemValue}
          onChange={handleInputTextChange}
          onKeyDown={handleKeyDown}
        />
        <span>
        {t("addNewTodoItem")}
        </span>
      </label>
      <div className="add-todo-item-button">
        <Button
          theme="green"
          label={t("add")}
          isDisabled={!isValidNewItem()}
          onClick={validateAndAddNewTodoItem}
        ></Button>
      </div>
    </div>
  );
};

export default AddItem;
