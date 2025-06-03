import React from "react";
import styled from "./Footer.module.scss";
import logoFood from "../../assets/images/japanese-food.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styled.footer}>
      <div>
        <ul>
          <li>
            <Link href="/#">FAQ</Link>
          </li>

          <li>
            <Link href="/#">Terms & Privacy</Link>
          </li>
          <li>
            <Link href="https://spoonacular.com/" target="_blank">
              spoonacular
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Image src={logoFood} alt="salad pic" width={150} height={150} />
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">Home Page</Link>
          </li>
          <li>
            <Link href="/Favorite">Favorite Page</Link>
          </li>
          <li>
            <Link href="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/vegetarian">Vegetarian Food</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
