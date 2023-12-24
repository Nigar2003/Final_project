import Saved from "../images/saved.png";
import Unsaved from "../images/unsaved.png";
import { useNavigate, useLocation, Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));

  const saveRecipe = (recipeItem) => {
    if (savedRecipes.some((recipe) => recipe.label === recipeItem.label)) {
      localStorage.setItem(
        "savedRecipes",
        JSON.stringify(
          savedRecipes.filter((item) => item.label !== recipeItem.label),
        ),
      );
    } else {
      savedRecipes.push(recipeItem);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    }
    // varsa silir yoxdusa elave edir
    navigate(location.pathname);
  };

  return (
    <Link
      to={`/${recipe.label}`}
      className="flex flex-col p-[10px] gap-2 w-[300px] h-[450px] rounded-[10px] border border-gray-200 shadow-xl sm:hover:shadow transition cursor-pointer"
    >
      <img alt="recipe" src={recipe.image} className="w-full" />
      <div className="flex flex-col h-full justify-between">
        <p className="text-gray-600 text-[20px]">{recipe.label}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-[15px]">
            {Math.round(recipe.calories)} calories
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              saveRecipe(recipe);
            }}
            className="z-40"
          >
            <img
              src={
                savedRecipes.some((item) => item.label === recipe.label)
                  ? Saved
                  : Unsaved
              }
              alt="saved"
              className="w-[30px]"
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RecipeItem;
