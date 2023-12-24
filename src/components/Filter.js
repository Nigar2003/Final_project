import Arrow from "../images/arrow-down.png";
import Diet from "../images/diet.png";
import Globe from "../images/globe.png";
import Meal from "../images/meal.png";
import Dish from "../images/dish.png";
import { useState } from "react";

const Filter = ({ setSearchQuery, selectedFilters, setFilters }) => {
  const [expandedTabs, setExpandedTabs] = useState([]);

  const tabsHandler = (tabName) => {
    setExpandedTabs((prevState) => {
      if (prevState.includes(tabName))
        return prevState.filter((tab) => tab !== tabName);
      const newTabs = [...prevState];
      newTabs.push(tabName);
      return newTabs;
    });
  };

  // Filter tabları
  const filters = [
    {
      name: "diet",
      label: "Diet",
      icon: Diet,
      children: [
        "balanced",
        "high-fiber",
        "high-protein",
        "low-carb",
        "low-fat",
        "low-sodium",
      ],
    },
    {
      name: "cuisineType",
      label: "Cuisine type",
      icon: Globe,
      children: [
        "Chinese",
        "French",
        "Indian",
        "Italian",
        "Japanese",
        "Mexican",
      ],
    },
    {
      name: "mealType",
      label: "Meal type",
      icon: Meal,
      children: ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"],
    },
    {
      name: "dishType",
      label: "Dish type",
      icon: Dish,
      children: [
        "Biscuits and cookies",
        "Bread",
        "Cereals",
        "Condiments and sauces",
        "Deserts",
        "Drinks",
        "Main course",
        "Pancake",
        "Preps",
        "Preserve",
        "Salad",
        "Sandwiches",
        "Side dish",
        "Soup",
        "Starter",
        "Sweets",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        type="search"
        placeholder="Search for a recipe"
        className="h-[50px] sm:w-[350px] p-[20px] rounded-[8px] border border-gray-300 w-full"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex flex-col items-start gap-5">
        {filters.map((filter) => (
          <div key={filter.name} className="flex flex-col w-full gap-3">
            <button
              className="w-full flex justify-between items-center hover:opacity-70 transition"
              onClick={() => tabsHandler(filter.name)}
            >
              <div className="flex gap-2 items-center">
                <img src={filter.icon} alt="icon" className="w-5 h-full" />
                <p className="text-gray-600 text-[1.2rem]">{filter.label}</p>
              </div>
              <img
                alt="arrow"
                src={Arrow}
                className="w-[22px] h-[22px]"
                style={{
                  transform: expandedTabs.includes(filter.name)
                    ? "rotate(180deg)"
                    : "unset",
                }}
              />
            </button>
            {expandedTabs.includes(filter.name) && (
              <div className="flex flex-wrap gap-3 items-start">
                {filter.children.map((tag) => (
                  <button
                    key={tag}
                    className="border border-gray-300 p-2 rounded-[8px] text-gray-600 hover:opacity-80 transition"
                    style={{
                      backgroundColor:
                        selectedFilters[filter.name] === tag
                          ? "orange"
                          : "#fff",
                      color:
                        selectedFilters[filter.name] === tag
                          ? "#fff"
                          : "rgb(75 85 99)",
                    }}
                    onClick={() =>
                      setFilters((prevState) => ({
                        ...prevState,
                        [filter.name]: tag,
                      }))
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
