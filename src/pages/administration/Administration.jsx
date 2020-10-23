import React, { useEffect, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useDispatch } from 'react-redux';
import { clearTodos } from "../../store/todosActions";
import Button from "../../components/ui/Button/Button";
import { Popconfirm, message } from 'antd';

import "./administration.scss";

const Administration = () => {
  const dispatch = useDispatch();
  const clearAllTodos = useCallback(() => {
    dispatch(clearTodos());
  }, [dispatch]);

  const LOCAL_STORAGE_LANG_KEY = "todoListAppCulture";

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
    if(!currentLanguage) {
      updateLocalStorageLanguage("en");
    }
  }, []);

  const updateLocalStorageLanguage = (lang) => {
    if(!lang || (lang !== "fr" && lang !== "en")) return;

    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, lang);
  }

  const currentLangLabel = i18n?.language === "en"
    ? t("english") : t("french");

  const changeLanguage = () => {
    const lang = i18n?.language === "en" ? "fr" : "en";
    i18n.changeLanguage(lang);
    moment.locale(lang);
    updateLocalStorageLanguage(lang);
  };

  const confirm = (e) => {
    clearAllTodos();
    message.success(t("allTasksCleared"));
  }
  
  const cancel = (e) => {
    message.error(t("operationCanceled"));
  }

  return (
    <div className="administration">
      <div className="language-section">
        <span className="language-label-info">
          {t("currentLang", {lang: currentLangLabel})}
        </span>
        <div className="change-language-button">
          <Button onClick={changeLanguage} label={t("changeLanguage")}></Button>
        </div>
      </div>
      <hr/>
      <div className="action-section">
        <div className="clear-todos-button">
          <Popconfirm
            title={t("confirmDeleteTasks")}
            onConfirm={confirm}
            onCancel={cancel}
            okText={t("yes")}
            cancelText={t("no")}
          >
            <Button label={t("clearAllTasks")} theme="red"></Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default Administration;