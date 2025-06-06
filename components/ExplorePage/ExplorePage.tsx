"use client";
import { useEffect, useState } from "react";
import styled from "./explorePage.module.scss";
import { ExplorePageProps, Recipe } from "@/constant/types";
import ShowRecipes from "../ShowRecipes/ShowRecipes";

const ExplorePageComponent = ({
  recipeNumber,
  dietType,
  searchTerm,
  titleMatch,
  excludeIngredients,
  recipeType,
  sortType,
}: ExplorePageProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getFoodRecipe = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=${recipeNumber}&titleMatch=${titleMatch}&query=${searchTerm}&excludeIngredients=${excludeIngredients}&type=${recipeType}&addRecipeInformation=true&addRecipeNutrition=true&diet=${dietType}&sort=${sortType}`
        );
        const result = await response.json();
        console.log("Fetched:", result);
        setData(result.results || []);
      } catch (e) {
        console.log("Error fetching data:", e);
      }
    };

    getFoodRecipe();
  }, [
    recipeNumber,
    dietType,
    searchTerm,
    excludeIngredients,
    titleMatch,
    recipeType,
    sortType,
  ]);

  return (
    <div>
      <div className={styled.mainContainer}>
        {data.length === 0 && <p>No recipes found.</p>}
        {data.map((item: Recipe) => {
          return (
            <div key={item.id} className={styled.recipeContainer}>
              <ShowRecipes item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorePageComponent;
