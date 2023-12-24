import Navbar from "../components/Navbar";
import RecipeItem from "../components/RecipeItem";
import React from "react";

const SavedRecipes = (props) => {
  const saved = JSON.parse(localStorage.getItem("savedRecipes"));

  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row px-[20px] sm:px-[50px] py-[30px] items-center sm:items-start">
        <div className="flex gap-[20px] flex-wrap justify-center mt-4">
          {saved.map((recipe) => (
            <RecipeItem key={recipe.url} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SavedRecipes;
