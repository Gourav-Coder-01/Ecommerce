import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const LowerNav = () => {
  const TopDropdown = [
    {
      id: 1,
      name: "Trending Books",
    },
    {
      id: 2,
      name: "Best Selling",
    },
    {
      id: 3,
      name: "Authors",
    },
  ];

  const DropdwonList = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Top Rated",
    },
    {
      id: 3,
      name: "Kids Wear",
    },
    {
      id: 4,
      name: "Mens Wear",
    },
    {
      id: 5,
      name: "Electronics",
    },
  ];
  return (
    <div className="shadow-md dark:text-white dark:bg-gray-700 w-full" data-aos="zoom-in">
      <ul className="flex w-[80%] mx-auto justify-evenly max-wl:hidden ">
        {DropdwonList.map((data) => (
          <div key={data.id}>
            <li className="cursor-pointer hover:text-[#fea928] sm:text-[16px] text-[10px]">
              {data.name}
            </li>
          </div>
        ))}
        <li className="relative group cursor-pointer">
            <div className="flex items-center sm:text-[16px] text-[10px]">
                  <span>
            Trending products
                  </span>
            <IoMdArrowDropdown className="group-hover:rotate-180 duration-300"/>
            <ul className="absolute group-hover:block hidden shadow-2xl top-6 z-[999]">
                  {TopDropdown.map((data)=>(
                        <li className='p-2 duration-50 hover:bg-[#fea928]/30 z-[999]' >{data.name}</li>
                  ))}
            </ul>
            </div>
        </li>
        
      </ul>
    </div>
  );
};

export default LowerNav;
