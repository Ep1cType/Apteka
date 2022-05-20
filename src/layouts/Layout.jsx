import React from "react";
import {Outlet} from "react-router";

//styles
import "./index.styles.scss";

//icons
import LayoutHeader from "../components/layout-header";
import LayoutFooter from "../components/layout-footer";

const LayoutPage = () => {
  return (
    <div className="layout">
      <LayoutHeader />
      <main className="layout__main">
        <Outlet/>
      </main>
      <LayoutFooter />
    </div>
  );
};

export default LayoutPage;
