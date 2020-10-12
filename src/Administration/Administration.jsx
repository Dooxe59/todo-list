import React, { useEffect } from 'react';
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import moment from "moment";

import "./administration.scss";

const Administration = () => {
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

  const clearTodos = () => {
    alert('clear todos');
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
          <Button onClick={clearTodos} label={t("clearAllTasks")} theme="red"></Button>
        </div>
      </div>
    </div>
  );
};

export default Administration;