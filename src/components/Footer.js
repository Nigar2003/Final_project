import React from "react";
import Edamam from "../images/Edamam_logo_full_RGB.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="flex py-4 gap-3 sm:flex-row flex-col items-center justify-between px-[20px] sm:px-[50px] h-[100px] w-full border-t border-[#eee]">
    <p className="text-[10px] sm:text-lg text-gray-400">Copyright 2023</p>
    <Link to="/" className="hover:opacity-80 transition">
      <p
        className="font-bold sm:text-[2rem] text-[1rem] text-orange-300"
        style={{ fontFamily: "Rubik Doodle Shadow" }}
      >
        RAMEN.COM
      </p>
    </Link>
    <div className="flex sm:flex-row flex-col items-center sm:gap-3">
      <p className="text-gray-400 text-[12px]">Powered by</p>
      <Link
        to="https://www.edamam.com/"
        target="_blank"
        className="hover:opacity-80 transition"
      >
        <img src={Edamam} className="w-[80px] sm:w-[130px]" alt="" />
      </Link>
    </div>
  </div>
);

export default Footer;
