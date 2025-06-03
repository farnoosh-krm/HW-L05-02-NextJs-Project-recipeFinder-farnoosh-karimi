import React from "react";
import styled from "./LandingPage.module.scss";
import ff from "../../assets/images/ff.png";
import noodlePic from "../../assets/images/fffff.png";
import mainPic from "../../assets/images/mic2.jpg";

import Image from "next/image";
import ExplorePageComponent from "../ExplorePage/ExplorePage";

const LandingPage = () => {
  return (
    <div className={styled.mainContainer}>
      <div className={styled.mainImageContainer}>
        <Image src={mainPic} alt="aa pic" width={1800} height={400} />
        <div className={styled.textContainer}>
          <p className={styled.text1Container}>Recipe Finder</p>
        </div>
      </div>

      <div className={styled.descriptionContainer}>
        <div className={styled.textContainer}>
          <p className={styled.text2Container}>
            You Are Looking For Special Recipe ??
          </p>
          <p className={styled.text2Container}>We Can Help You to Find That.</p>
        </div>
        <Image
          src={ff}
          alt="food picture"
          width={500}
          height={500}
          className={styled.imageContainer}
        />
      </div>

      <div className={styled.descriptionContainer}>
        <Image
          src={noodlePic}
          alt="food2"
          width={500}
          height={500}
          className={styled.imageContainer2}
        />
        <div className={styled.textContainer}>
          <p className={styled.text2Container}>
            You Can Search for Recipes Based on the Following Criteria:
          </p>
          <ul className={styled.text2Container}>
            <li>Search by Title</li>
            <li>Search by Ingredients</li>
            <li>Dietary Restrictions Filter (Vegetarian, Keto, Paleo,...)</li>
            <li>Search by Recipe Type</li>
            <li>Search by Diet Type</li>
            <li>Add Recipe to Favorites</li>
          </ul>
        </div>
      </div>

      <div className={styled.trendRecipeContainer}>
        <p className={styled.text3Container}>Random Recipe</p>
        <ExplorePageComponent
          recipeNumber={4}
          dietType={"Paleo"}
          searchTerm={""}
          excludeIngredients={""}
          titleMatch={""}
          recipeType={""}
        />
      </div>
    </div>
  );
};

export default LandingPage;
