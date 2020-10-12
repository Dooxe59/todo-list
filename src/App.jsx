import React from "react";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home/Home";
import Administration from "./Administration/Administration";
import {ToolOutlined} from '@ant-design/icons';


import "./app.scss";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="app">
        <Router>
          <div className="application-top-bar">
            <Link to="/">
              <span className="application-name is-active">{t("appTitle")}</span>
            </Link>
            <div className="empty-area"></div>
            <Link to="/administration">
              <span className="administration-page-button-icon"><ToolOutlined /></span>
            </Link>
            <Link to="/administration">
              <span className="administration-page-button-label">{t("administration")}</span>
            </Link>
          </div>
          <Switch>
            <Route path="/administration">
              <Administration />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
};

export default App;
