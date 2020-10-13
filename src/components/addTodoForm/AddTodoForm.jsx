import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button/Button";

import "./addTodoForm.scss";

const AddTodoForm = ({ addItem }) => {
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

AddTodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddTodoForm;
