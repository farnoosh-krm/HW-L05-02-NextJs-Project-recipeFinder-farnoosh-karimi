"use client";
import React from "react";
import searchPic from "../../assets/images/mic2.jpg";
import Image from "next/image";
import { useState } from "react";
import styled from "./explorePage.module.scss";
import styles from "../LandingPage/LandingPage.module.scss";
import ExplorePageComponent from "./ExplorePage";

const FilterContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dietType, setDietType] = useState("");
  const [recipeNumber, setRecipeNumber] = useState(4);
  const [excludeIngredients, setExcludeIngredients] = useState("");
  const [titleMatch, setTitleMatch] = useState("");
  const [recipeType, setRecipeType] = useState("");
  const [sortType, setSortType] = useState("");

  return (
    <div>
      <div className={styled.wholeContainer}>
        <div className={styles.mainImageContainer}>
          <Image src={searchPic} alt="aa pic" width={1800} height={400} />
          <div className={styles.textContainer}>
            <p className={styles.text1Container}>Explore Recipes</p>
          </div>
        </div>
        <div className={styled.filterContainer}>
          <div className={styled.filterPart}>
            <label>Enter an Ingredient to Search For in Recipe Titles</label>
            <input
              type="text"
              placeholder="enter title ..."
              value={titleMatch}
              onChange={(e) => setTitleMatch(e.target.value)}
            />
          </div>

          <div className={styled.filterPart}>
            <label>Enter Title or Ingredient </label>
            <input
              type="text"
              placeholder="enter title or ingredient ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={styled.filterPart}>
            <label>Enter an Ingredient to Exclude</label>
            <input
              type="text"
              placeholder="enter exclude ingredient ..."
              value={excludeIngredients}
              onChange={(e) => setExcludeIngredients(e.target.value)}
            />
          </div>

          <div className={styled.filterPart}>
            <label>Number of Recipes</label>
            <input
              type="number"
              value={recipeNumber}
              onChange={(e) => setRecipeNumber(Number(e.target.value))}
            />
          </div>

          <div className={styled.filterPart}>
            <label>Diet</label>
            <select
              value={dietType}
              onChange={(e) => setDietType(e.target.value)}
            >
              <option selected value="">
                all
              </option>
              <option value="Paleo">Paleo</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Ketogenic">Ketogenic</option>
            </select>
          </div>

          <div className={styled.filterPart}>
            <label>Recipe Type</label>
            <select
              value={recipeType}
              onChange={(e) => setRecipeType(e.target.value)}
            >
              <option value="">all</option>
              <option value="main course">main course</option>
              <option value="dessert">dessert</option>
              <option value="salad">salad</option>
              <option value="bread">bread</option>
              <option value="breakfast">breakfast</option>
              <option value="soup">soup</option>
              <option value="finger food">finger food</option>
              <option value="snack">snack</option>
              <option value="drink">drink</option>
            </select>
          </div>

          <div className={styled.filterPart}>
            <label>Sort</label>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">no score</option>
              <option value="popularity">popularity</option>
              <option value="healthiness">healthiness</option>
              <option value="price">price</option>
              <option value="calories">calories</option>
              <option value="carbohydrates">carbohydrates</option>
              <option value="protein">protein</option>
              <option value="total-fat">total-fat</option>
            </select>
          </div>
        </div>
      </div>
      <ExplorePageComponent
        recipeNumber={recipeNumber}
        dietType={dietType}
        searchTerm={searchTerm}
        excludeIngredients={excludeIngredients}
        titleMatch={titleMatch}
        recipeType={recipeType}
        sortType={sortType}
      />
    </div>
  );
};

export default FilterContainer;
