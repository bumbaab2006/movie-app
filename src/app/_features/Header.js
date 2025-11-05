"use client";

import Vector from "../_icons/VectorIcon";
import Search from "../_icons/SearchIcon";
import Moon from "../_icons/MoonIcon";
import Genre from "../_components/Genresec/Genre";
import React from "react";
function Header() {
  return (
    <div className="w-[1440px] h-[59px] top-[80px] flex border-b border-gray-200 items-center justify-center bg-white">
      <div className="w-[1280px] h-[36px] max-w-[1280px] flex justify-between items-center">
        <button
          className="w-[92px] h-[20px] flex gap-2"
          onClick={() => (window.location.href = "/")}
        >
          <Vector />
        </button>

        <div className="w-[488px] h-[36px] flex gap-3 relative">
          <Genre />

          <div className="w-[379px] h-[36px] pr-3 pl-3 flex items-center border rounded-lg border-gray-200">
            <Search />
            <input
              type="text"
              className="w-[54px] h-[36px] pt-2 pb-2"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="w-[36px] h-[36px] flex justify-center items-center border rounded-md border-gray-200">
          <Moon />
        </div>
      </div>
    </div>
  );
}

export default Header;
