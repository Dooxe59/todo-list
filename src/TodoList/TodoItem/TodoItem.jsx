import React from "react";
import PropTypes from "prop-types";

import Button from "../../Button/Button";

import moment from "moment";
import { ABORTED, FINISHED, NEW } from "../../consts.js";

import { useTranslation } from "react-i18next";

import "./todoItem.scss";
import Tag from "../../Tag/Tag";

const TodoItem = ({ item, abortTodoItem, finishTodoItem }) => {
  const { t } = useTranslation();

  const getItemStatusTag = () => {
    switch (item.status) {
      case ABORTED:
        return "pink";
      case FINISHED:
        return "green";
      default:
        return "default";
    }
  };

  const renderTodoButton = () => {
    if(item.status !== NEW) return;
    return (
      <>
      <div className="finish-todo-item-button">
        <Button
          onClick={finishTodoItem}
          label={t("finish")}
          theme="green"
        >
        </Button>
      </div>
      <div className="abort-todo-item-button">
        <Button
          onClick={abortTodoItem}
          label={t("abort")}
          theme="red"
        >
        </Button>
      </div>
      </>
    )
  };

  const todoItemClass = () => {
    const status = item.status.toLowerCase();
    return `${status}-todo-item`;
  }

  return (
    <div className={`todo-item ${todoItemClass()}`}>
      <div className="todo-item-status">
        <Tag label={t(item.status)} theme={getItemStatusTag()}></Tag>
      </div>
      <div className="todo-item-value">
        <span className="todo-item-label truncated" title={item.label}>
          {item.label}
        </span>
        <span className="todo-item-date">
          {t("addedTodoItemDate", {
            date: moment(item.timestamp).fromNow(),
          })}
        </span>
      </div>
      {renderTodoButton()}
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    status: PropTypes.oneOf([ABORTED, FINISHED, NEW]),
  }),
  abortTodoItem: PropTypes.func.isRequired,
  finishTodoItem: PropTypes.func.isRequired,
};

export default TodoItem;
