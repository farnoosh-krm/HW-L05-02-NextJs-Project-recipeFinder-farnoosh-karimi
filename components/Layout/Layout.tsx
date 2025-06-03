import React from "react";
import styled from "./Layout.module.scss";

const Layout = ({ children }) => {
  return <div className={styled.layout}>{children}</div>;
};

export default Layout;
