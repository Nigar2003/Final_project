import React from "react";
import { Link, useLocation } from "react-router-dom";
import Save from "../images/saved.png";

const Navbar = (props) => {
  const location = useLocation();

  return (
    <div className="flex h-[80px] sm:gap-20 gap-3 items-center px-[20px] sm:px-[50px] text-[20px] border-b border-[#eee]">
      <Link to="/" className="hover:opacity-70 transition">
        <p
          className="font-bold sm:text-[2rem] text-[1rem] text-orange-300"
          style={{ fontFamily: "Rubik Doodle Shadow" }}
        >
          RAMEN.COM
        </p>
      </Link>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-[20px]">
          <Link
            to="/"
            className="h-full leading-[80px] text-[1rem] hover:opacity-60 transition"
            style={{
              borderBottom:
                location.pathname === "/" ? "2px solid orange" : "none",
            }}
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="h-full leading-[80px] text-[1rem] hover:opacity-60 transition"
            style={{
              borderBottom:
                location.pathname === "/recipes" ? "2px solid orange" : "none",
            }}
          >
            Recipes
          </Link>
        </div>
        <Link to="/saved-recipes">
          <button className="sm:px-4 px-2 text-[1rem] sm:text-[1.5rem] rounded-[8px] sm:w-[70px] w-[40px] text-white hover:opacity-80 transition">
            <img src={Save} alt="" className="w-[70px] h-auto" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
