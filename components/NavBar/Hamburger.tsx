import React from "react";
import { MdMenu } from "react-icons/md";
import styled from "./NavBar.module.scss";

const Hamburger = ({ onClick }) => {
  return (
    <div className={styled.hamburger} onClick={onClick}>
      <MdMenu size={24} />
    </div>
  );
};

export default Hamburger;
