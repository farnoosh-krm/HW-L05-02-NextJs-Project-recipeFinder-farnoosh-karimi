import ExplorePageComponent from "@/components/ExplorePage/ExplorePage";
import Layout from "@/components/Layout/Layout";
import React from "react";

const VegetarianFood = () => {
  return (
    <div>
      <Layout>
        <ExplorePageComponent
          recipeNumber={12}
          dietType={"Vegetarian"}
          searchTerm={""}
          titleMatch={""}
          excludeIngredients={""}
          recipeType={""}
        />
      </Layout>
    </div>
  );
};

export default VegetarianFood;
