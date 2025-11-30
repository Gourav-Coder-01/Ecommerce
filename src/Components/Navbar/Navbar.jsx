import React, { useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import DarkMode from "../../assets/website/dark-mode-button.png";
import LightMode from "../../assets/website/light-mode-button.png";
import { IoMdSearch } from "react-icons/io";
import Dmode from '../DarkMode/Dmode'
import { FaShoppingCart } from "react-icons/fa";
import LowerNav from "./LowerNav";

const Navbar = ({handleOrderPopup}) => {
const inpurRef = useRef();

  return (
    <div>
      <div className="bg-[#fea928]/30 dark:bg-black dark:text-white py-2">
        <div className="flex justify-between sm:w-[80%] sm:m-auto sm:px-2">
          {/* left side */}
          <div className="flex justify-center items-center max-wl276:flex-col-reverse ">
            <img src={Logo} alt="logo" className="h-[35px] "/>
            <h1 className="text-2xl font-bold max-wl276:text-xs">Shopsy</h1>
          </div>

          {/* right side */}

          <div className="flex justify-center items-center max-wl276:gap-0 gap-x-3 w-100vw">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search"
                ref={inpurRef}
                className="bg-[#fea928]/20 max-wl540:group-hover:w-[200px] max-wl:hidden rounded-full p-1.5 w-[5rem] sm:w-[200px] group-hover:w-[300px] duration-200 transition-all hover:border-amber-500 border border-gray-300"
              />
              <IoMdSearch className="cursor-pointer absolute top-2 max-wl:-top-3 duration-300 right-2 text-2xl text-[#fea928] max-wl:bg-white rounded-2xl max-wl:text-3xl"
              onClick={()=>inpurRef.current.focus()} />
            </div>
            <div className="bg-orange-400 dark:bg-[#fea928]/20 px-3 py-1 rounded-2xl group gap-2 text-white flex cursor-pointer duration-200">
              <FaShoppingCart className="text-2xl" />
              <p className="group-hover:block hidden group-hover:max-wl:hidden" onClick={()=>{handleOrderPopup()
              }}>Your Cart</p>
            </div>
            <Dmode/>
          </div>
        </div>
      </div>
      {/* lowerSection */}
          <LowerNav/>
    </div>
  );
};

export default Navbar;
