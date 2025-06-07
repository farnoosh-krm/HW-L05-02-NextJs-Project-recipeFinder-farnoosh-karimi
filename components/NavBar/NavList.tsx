"use client";

import React from "react";
import Link from "next/link";
// import { useSession, signIn, signOut } from "next-auth/react";
import styled from "./NavBar.module.scss";

const NavList = () => {
  // const { data: session, status } = useSession();
  // const isLoggedIn = status === "authenticated";

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

        {/* <li className={[styled.navItem, styled.profile].join("")}>
          {isLoggedIn ? (
            <div className={styled.profileContainer}>
              <span>hi {session.user?.name?.split(" ")[0] || "user"} 🌸</span>
              <button onClick={() => signOut()} className={styled.navButton}>
                sign out
              </button>
            </div>
          ) : (
            <button onClick={() => signIn()} className={styled.navButton}>
              sign in
            </button>
          )}
        </li> */}
      </ul>
    </div>
  );
};

export default NavList;
