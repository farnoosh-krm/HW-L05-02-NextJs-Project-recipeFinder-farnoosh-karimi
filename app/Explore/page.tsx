import Layout from "../../components/Layout/Layout";
import React from "react";
import FilterContainer from "@/components/ExplorePage/FilterContainer";

const ExplorePage = () => {
  return (
    <div>
      <Layout>
        {/* <ExplorePageComponent recipeNumber={12} dietType={"Paleo"} /> */}
        <FilterContainer />
      </Layout>
    </div>
  );
};

export default ExplorePage;
