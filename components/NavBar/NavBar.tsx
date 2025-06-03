"use client";
import Link from "next/link";
import React, { useState } from "react";
import styled from "./NavBar.module.scss";
import Hamburger from "./Hamburger";
import NavList from "./NavList";
import Image from "next/image";
import logoPic from "../../assets/images/logo.png";
import logoFood from "../../assets/images/japanese-food.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styled.headerContainer}>
      <div>
        <Link href={"/"} className={styled.logo}>
          <Image src={logoFood} alt="Logo" width={50} height={50} />
          <p className={styled.navItem}>Home Page</p>
        </Link>
      </div>

      <nav className={styled.navigationBigScreen}>
        <NavList />
      </nav>

      <nav className={styled.navigation}>
        <div>
          <Hamburger onClick={handleMenuToggle} />
        </div>

        {menuOpen && <NavList />}
      </nav>
    </header>
  );
};

export default NavBar;
