import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RecipeItem from "../components/RecipeItem";
import Filter from "../components/Filter";

const Recipes = (props) => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("food");
  const [filters, setFilters] = useState({});

  const APP_ID = "3fd085f6";
  const APP_key = "9dfcf313ed03afcf595cb6bcf1b81017";

  async function fetchAPI() {
    const baseURL =
      `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20&` +
      new URLSearchParams(filters);

    const response = await fetch(baseURL, {});
    const data = await response.json();
    setResults(data.hits);
    localStorage.setItem(
      "all",
      JSON.stringify(data.hits.map(({ recipe }) => recipe)),
    );
  }

  useEffect(() => {
    fetchAPI().catch((error) => console.error(error));
  }, [searchQuery, filters]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row px-[20px] sm:px-[50px] py-[30px] items-center sm:items-start">
        <Filter
          setSearchQuery={setSearchQuery}
          selectedFilters={filters}
          setFilters={setFilters}
        />
        <div className="flex gap-[20px] flex-wrap justify-center mt-4">
          {results.map(({ recipe }) => (
            <RecipeItem key={recipe.url} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
