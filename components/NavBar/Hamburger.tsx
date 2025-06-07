import React from "react";
import { MdMenu } from "react-icons/md";
import styled from "./NavBar.module.scss";

type HamburgerProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <div className={styled.hamburger} onClick={onClick}>
      <MdMenu size={24} />
    </div>
  );
};

export default Hamburger;
