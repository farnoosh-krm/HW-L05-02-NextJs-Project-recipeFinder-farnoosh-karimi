import FavoriteComponent from "@/components/Favorites/FavoriteComponent";
import Layout from "@/components/Layout/Layout";
import React from "react";

const FavoritePage = () => {
  return (
    <div>
      <Layout>
        <FavoriteComponent />
      </Layout>
    </div>
  );
};

export default FavoritePage;
