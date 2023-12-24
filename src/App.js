import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeItem from "./components/RecipeItem";
import BgImage from "./images/bg.jpeg";
import Footer from "./components/Footer";

function App() {
  if (!localStorage.getItem("savedRecipes"))
    localStorage.setItem("savedRecipes", JSON.stringify([]));

  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("food");

  const APP_ID = "fce67391";
  const APP_key = "c05e29817350e45aefdded0494ab0a82";

  async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    setResults(data.hits);
    localStorage.setItem(
      "all",
      JSON.stringify(data.hits.map(({ recipe }) => recipe)),
    );
  } //neticeni elde elemek ucundu

  useEffect(() => {
    fetchAPI().catch((error) => console.error(error));
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center py-4 gap-7">
        <div
          className="flex justify-center items-center h-[400px] w-full sm:w-[70%] px:[20px]"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <input
            type="search"
            placeholder="What would you like to cook today?"
            className="border border-black h-[50px] sm:w-[350px] p-[20px] rounded-[10px]"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <p className="text-3xl font-bold italic text-gray-600 text-center">
          Here are some suggestions:
        </p>
        <div className="flex gap-[10px] flex-wrap justify-center">
          {results.map(
            ({ recipe }, index) =>
              index < 10 && <RecipeItem key={recipe.url} recipe={recipe} />,
          )}
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            className="w-[150px] h-[40px] bg-orange-400 text-white rounded-[8px] hover:opacity-80 transition"
            onClick={() => navigate("/recipes")}
          >
            Show more
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
