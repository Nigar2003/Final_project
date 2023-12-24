import Navbar from "../components/Navbar";
import React from "react";
import { useParams } from "react-router-dom";

const RecipePage = () => {
  let { label } = useParams();
  const all = JSON.parse(localStorage.getItem("all"));
  const selected = all.filter((item) => item.label === label)[0];

  return (
    <>
      <Navbar />
      <div className="flex gap-7 justify-center flex-col sm:flex-row px-[20px] w-full sm:px-[50px] py-[30px] items-center sm:items-start">
        <img src={selected.image} alt="recipe" className="rounded-[8px]" />
        <div className="flex flex-col gap-3">
          <p className="text-[1.8rem] font-bold">{selected.label}</p>
          <div className="flex flex-col bg-orange-400 text-white p-2 rounded-[8px] gap-5">
            <div>
              <p className="font-bold">Ingredients:</p>
              {selected.ingredientLines.map((line) => (
                <p key={line} className="text-[1rem]">
                  - {line}
                </p>
              ))}
            </div>
            <div>
              <p className="font-bold">Instructions:</p>
              {selected.instructionLines.map((line) => (
                <p key={line} className="text-[1rem]">
                  - {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
