import React from "react";
import {Outlet} from "react-router";

//styles
import "./index.styles.scss";

//icons
import LogoIcon from "../../src/icons/logo.svg";
import {Header} from "antd/es/layout/layout";
import ContentWrapper from "../components/content-wrapper";
import LayoutHeader from "../components/layout-header";

const LayoutPage = () => {
  return (
    <div className="layout">
      <LayoutHeader />
      <main className="layout__main">
        <Outlet/>
      </main>
      <footer className="layout__footer">
        Heeeeqw
      </footer>
    </div>
  );
};

export default LayoutPage;
