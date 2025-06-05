"use client";
import React from "react";
import searchPic from "../../assets/images/mic2.jpg";
import Image from "next/image";
import { useState } from "react";
import styled from "./explorePage.module.scss";
import styles from "../LandingPage/LandingPage.module.scss";
import ExplorePageComponent from "./ExplorePage";
import Slider from "@mui/material/Slider";
import { styled as muiStyled } from "@mui/material/styles";
import { CiSearch } from "react-icons/ci";

const FilterContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dietType, setDietType] = useState("Paleo");
  const [recipeNumber, setRecipeNumber] = useState(4);
  const [excludeIngredients, setExcludeIngredients] = useState("");
  const [titleMatch, setTitleMatch] = useState("");
  const [recipeType, setRecipeType] = useState("main course");

  const PrettoSlider = muiStyled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setRecipeNumber(newValue[0]);
    }
  };

  return (
    <div>
      <div className={styled.wholeContainer}>
        <div className={styles.mainImageContainer}>
          <Image src={searchPic} alt="aa pic" width={1800} height={400} />
          <div className={styles.textContainer}>
            <p className={styles.text1Container}>Explore in Recipes</p>
          </div>
        </div>
        <div className={styled.filterContainer}>
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
            <label>Enter Ingredient Include in Recipe Title</label>
            <input
              type="text"
              value={titleMatch}
              onChange={(e) => setTitleMatch(e.target.value)}
            />
          </div>

          <div className={styled.filterPart}>
            <label>Enter Exclude Ingredient</label>
            <input
              type="text"
              value={excludeIngredients}
              onChange={(e) => setExcludeIngredients(e.target.value)}
            />
          </div>

          <div className={styled.filterPart}>
            <label>Recipe Number</label>
            <input
              type="number"
              value={recipeNumber}
              onChange={(e) => setRecipeNumber(Number(e.target.value))}
            />
            {/* <PrettoSlider
              value={recipeNumber}
              onChange={handleChange}
              min={1}
              max={200}
              valueLabelDisplay="on"
            /> */}
          </div>

          <div className={styled.filterPart}>
            <label>Diet</label>
            <select
              value={dietType}
              onChange={(e) => setDietType(e.target.value)}
            >
              <option selected value="Paleo">
                Paleo
              </option>
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
              <option value="main course">main course</option>
              <option value="dessert">dessert</option>
              <option value="salad">salad</option>
              <option value="bread">bread</option>
              <option value="breakfast">breakfast</option>
              <option value="soup">soup</option>
              <option value="fingerfood">fingerfood</option>
              <option value="snack">snack</option>
              <option value="drink">drink</option>
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
      />
    </div>
  );
};

export default FilterContainer;
