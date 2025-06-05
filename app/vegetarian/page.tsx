import ExplorePageComponent from "@/components/ExplorePage/ExplorePage";
import Layout from "@/components/Layout/Layout";
import React from "react";

const VegetarianFood = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[60px]">
          <ExplorePageComponent
            recipeNumber={12}
            dietType={"Vegetarian"}
            searchTerm={""}
            titleMatch={""}
            excludeIngredients={""}
            recipeType={""}
          />
        </div>
      </Layout>
    </div>
  );
};

export default VegetarianFood;
