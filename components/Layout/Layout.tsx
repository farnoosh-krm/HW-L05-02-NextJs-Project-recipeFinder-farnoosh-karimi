import React from "react";
import styled from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styled.layout}>{children}</div>;
};

export default Layout;
