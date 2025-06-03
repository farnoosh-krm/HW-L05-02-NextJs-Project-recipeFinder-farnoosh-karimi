"use client";
import { useEffect, useState } from "react";
import ShowRecipes from "../ShowRecipes/ShowRecipes";
import { Recipe } from "@/constant/types";
import styled from "./FavoriteComponent.module.scss";

const FavoriteComponent = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setFavorites(parsedFavorites);
    }
  }, []);

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h2 className={styled.pageTitle}>Favorite Recipes</h2>

      <div className={styled.mainContainer}>
        {favorites.length === 0 ? (
          <p className={styled.emptyText}>No favorite recipes yet.</p>
        ) : (
          favorites.map((item) => (
            <div className={styled.favoriteContainer} key={item.id}>
              <ShowRecipes item={item} onRemoveFavorite={removeFavorite} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoriteComponent;
