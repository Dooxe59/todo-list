import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import moment from "moment";
import "moment/locale/fr";

import resources from "./resources.json";

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

moment.locale("fr");

export default i18n;
