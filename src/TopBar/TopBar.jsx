import React from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import {ToolOutlined} from '@ant-design/icons';

import "./topBar.scss";

const TopBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="application-top-bar">
      <span className="application-name is-active">{t("appTitle")}</span>
      <div className="empty-area"></div>
      <span className="administration-page-button-icon"><ToolOutlined /></span>
      <span className="administration-page-button-label">{t("administration")}</span>
    </div>
  );
};

TopBar.propTypes = {
  
};

export default TopBar;