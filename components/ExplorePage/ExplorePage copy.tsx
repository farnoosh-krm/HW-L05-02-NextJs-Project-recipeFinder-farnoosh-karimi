// "use client";
// import { useEffect, useState } from "react";
// import styled from "./explorePage.module.scss";
// import { GoHeart, GoHeartFill } from "react-icons/go";
// import Image from "next/image";
// import { ExplorePageProps, Recipe } from "@/constant/types";
// import { useRouter } from "next/navigation";
// import { setItem, getItem } from "../Utils/LocalStorage";

// const ExplorePageComponent = ({
//   recipeNumber,
//   dietType,
//   searchTerm,
//   titleMatch,
//   excludeIngredients,
//   recipeType,
// }: ExplorePageProps) => {
//   const [data, setData] = useState([]);

//   const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

//   useEffect(() => {
//     const storedFavorites = localStorage.getItem("favorites");
//     if (storedFavorites) {
//       const parsed = JSON.parse(storedFavorites);
//       const ids = parsed.map((item: Recipe) => item.id);
//       setFavoriteIds(ids);
//     }
//   }, []);

//   //add to favorites
//   const handleFavorite = (recipe: Recipe) => {
//     const storedFavorites = localStorage.getItem("favorites");
//     const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

//     const isAlreadyFavorite = favorites.some(
//       (fav: Recipe) => fav.id === recipe.id
//     );

//     if (!isAlreadyFavorite) {
//       const updatedFavorites = [...favorites, recipe];
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       setFavoriteIds((prev) => [...prev, recipe.id]);
//     }
//   };

//   const handleUnfavorite = (recipeId: number) => {
//     const storedFavorites = localStorage.getItem("favorites");
//     const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

//     const updatedFavorites = favorites.filter(
//       (fav: Recipe) => fav.id !== recipeId
//     );

//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//     setFavoriteIds((prev) => prev.filter((id) => id !== recipeId));
//   };

//   const router = useRouter();

//   useEffect(() => {
//     const getFoodRecipe = async () => {
//       try {
//         const response = await fetch(
//           `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=${recipeNumber}&titleMatch=${titleMatch}&query=${searchTerm}&excludeIngredients=${excludeIngredients}&type=${recipeType}&addRecipeInformation=true&addRecipeNutrition=true&diet=${dietType}`
//         );
//         const result = await response.json();
//         console.log("Fetched:", result);
//         setData(result.results || []);
//       } catch (e) {
//         console.log("Error fetching data:", e);
//       }
//     };

//     getFoodRecipe();
//   }, [
//     recipeNumber,
//     dietType,
//     searchTerm,
//     excludeIngredients,
//     titleMatch,
//     recipeType,
//   ]);

//   return (
//     <div>
//       <div className={styled.mainContainer}>
//         {data.length === 0 && <p>No recipes found.</p>}
//         {data.map((item: Recipe) => {
//           const isFavorite = favoriteIds.includes(item.id);

//           return (
//             <div key={item.id} className={styled.recipeContainer}>
//               <p className={styled.cookTime}>
//                 time for cooking: <strong>{item.readyInMinutes}</strong> minutes
//               </p>
//               <p className={styled.recipeTitle}>{item.title}</p>

//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={250}
//                 height={250}
//                 className={styled.recipeImage}
//               />

//               <div className={styled.recipeDetails}>
//                 <div className={styled.recipeInformationContainer}>
//                   <div className={styled.recipeFavoriteContainer}>
//                     {!isFavorite ? (
//                       <GoHeart
//                         size="2em"
//                         color="red"
//                         className={styled.heart}
//                         onClick={() => handleFavorite(item)}
//                       />
//                     ) : (
//                       <GoHeartFill
//                         size="2em"
//                         color="red"
//                         className={styled.heartFill}
//                         onClick={() => handleUnfavorite(item.id)}
//                       />
//                     )}
//                   </div>
//                   <button
//                     className={styled.recipeButton}
//                     onClick={() => router.push(`/Detail/${item.id}`)}
//                   >
//                     View Recipe
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ExplorePageComponent;
