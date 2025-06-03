import React, { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import Image from "next/image";
import styled from "./ShowRecipes.module.scss";
import { Recipe } from "@/constant/types";
import { useRouter } from "next/navigation";

interface ShowRecipesProps {
  item: Recipe;
  onRemoveFavorite?: (id: number) => void; // اضافه شده
}

const ShowRecipes = ({ item, onRemoveFavorite }: ShowRecipesProps) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsed = JSON.parse(storedFavorites);
      const ids = parsed.map((item: Recipe) => item.id);
      setFavoriteIds(ids);
    }
  }, []);

  const handleFavorite = (recipe: Recipe) => {
    const storedFavorites = localStorage.getItem("favorites");
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    const isAlreadyFavorite = favorites.some(
      (fav: Recipe) => fav.id === recipe.id
    );

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...favorites, recipe];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoriteIds((prev) => [...prev, recipe.id]);
    }
  };

  const handleUnfavorite = (recipeId: number) => {
    const storedFavorites = localStorage.getItem("favorites");
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    const updatedFavorites = favorites.filter(
      (fav: Recipe) => fav.id !== recipeId
    );

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteIds((prev) => prev.filter((id) => id !== recipeId));

    // Notify parent component (FavoriteComponent)
    if (onRemoveFavorite) {
      onRemoveFavorite(recipeId);
    }
  };

  const isFavorite = favoriteIds.includes(item.id);
  const router = useRouter();

  return (
    <div>
      <p className={styled.cookTime}>
        time for cooking: <strong>{item.readyInMinutes}</strong> minutes
      </p>
      <p className={styled.recipeTitle}>{item.title}</p>

      <Image
        src={item.image}
        alt={item.title}
        width={250}
        height={250}
        className={styled.recipeImage}
      />

      <div className={styled.recipeDetails}>
        <div className={styled.recipeInformationContainer}>
          <div className={styled.recipeFavoriteContainer}>
            {!isFavorite ? (
              <GoHeart
                size="2em"
                color="red"
                className={styled.heart}
                onClick={() => handleFavorite(item)}
              />
            ) : (
              <GoHeartFill
                size="2em"
                color="red"
                className={styled.heartFill}
                onClick={() => handleUnfavorite(item.id)}
              />
            )}
          </div>
          <button
            className={styled.recipeButton}
            onClick={() => router.push(`/Detail/${item.id}`)}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowRecipes;
