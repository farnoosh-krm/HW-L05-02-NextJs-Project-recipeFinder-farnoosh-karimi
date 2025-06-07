"use client";

import React from "react";
import Link from "next/link";
import styled from "./NavBar.module.scss";

const NavList = () => {
  return (
    <div>
      <ul className={styled.navList}>
        <li className={styled.navItem}>
          <Link href="/Explore">Explore</Link>
        </li>
        <li className={styled.navItem}>
          <Link href="/Favorite">Favorites</Link>
        </li>
        <li className={styled.navItem}>
          <Link href="/AboutUs">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
