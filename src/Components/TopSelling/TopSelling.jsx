import React from "react";
import Image1 from "../../assets/women/women.png";
import Image2 from "../../assets/women/women2.jpg";
import Image3 from "../../assets/women/women3.jpg";
import Image4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa";

const TopList = [
  {
    id: 4,
    name: "Printed-t-shirt",
    image: Image4,
    color: "Yellow",
    Rating: 4.2,
  },
  {
    id: 1,
    name: "Women Ethnic",
    image: Image1,
    color: "white",
    Rating: 5,
  },
  {
    id: 2,
    name: "Women Western",
    image: Image2,
    color: "Red",
    Rating: 3.5,
  },
  {
    id: 3,
    name: "Goggles",
    image: Image3,
    color: "Brown",
    Rating: 4,
  },
  {
    id: 5,
    name: "Fashion-t-shirt",
    image: Image2,
    color: "Pink",
    Rating: 3,
  },
];

const TopSelling = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white pb-2">

    <div className="w-[90%] mx-auto">
      <div className="text-center" data-aos="fade-up">
        <p className="text-orange-400">Top Selling Products for you</p>
        <h1 className="text-2xl font-bold">Top Selling Products</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, sunt.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 max-wl:place-items-center  wl:grid-cols-3 sm:grid-cols-5 gap-2 mx-auto">
        {TopList.map((data) => (
          <div className="flex flex-col justify-center items-center group max-wl:mt-2" data-aos="flip-left">
            <img
              src={data.image}
              alt="image"
              className="w-[190px] max-wl:w-[270px] h-[200px] rounded-2xl hover:scale-105 duration-200 cursor-pointer hover:shadow-2xl"
            />
            <div className="flex flex-col text-start w-[80%]">
              <h1 className="text-xs font-bold mt-2 group-hover:text-orange-500">
                {data.name}
              </h1>
              <p className="text-gray-600 italic">{data.color}</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <h2>{data.Rating}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button data-aos="fade-up" className="px-4 py-2 bg-[#fea928] rounded-2xl text-white font-bold cursor-pointer outline-0 hover:bg-yellow-700 ">
          View All
        </button>
      </div>
    </div>
    </div>
  );
};

export default TopSelling;
