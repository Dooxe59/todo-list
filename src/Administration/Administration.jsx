import React from 'react';
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import moment from "moment";

const Administration = () => {
  const { t, i18n } = useTranslation();

  const currentLangLabel = i18n?.language === "en"
    ? t("english") : t("french");

  const changeLanguage = () => {
    const lang = i18n?.language === "en" ? "fr" : "en";
    i18n.changeLanguage(lang);
    moment.locale(lang);
  };

  return (
    <div>
      <span>
        {t("currentLang", {lang: currentLangLabel})}
      </span>
      <Button onClick={changeLanguage} label={t("changeLanguage")}></Button>
    </div>
  );
};

export default Administration;