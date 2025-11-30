import React from "react";
import Image1 from "../../assets/shirt/shirt.png";
import Image2 from "../../assets/shirt/shirt2.png";
import Image3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const Shirtlist = [
  {
    id: 1,
    Image: Image1,
    name: "Casual Wear",
  },
  {
    id: 2,
    Image: Image2,
    name: "Printed Shirt",
  },
  {
    id: 3,
    Image: Image3,
    name: "Women Shirt",
  },
];

const BestProdusts = ({handleOrderPopup}) => {
  return (
    <div className="dark:bg-gray-800 w-full dark:text-white">

    <div className="w-[90%] mx-auto ">
      <div data-aos="flip-up">
        <h2 className="font-bold text-[#fea928]">Top Rated Products for you</h2>
        <h1 className="text-3xl font-bold">Best Products</h1>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni
        </p>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 mt-6 place-items-center">
        {Shirtlist.map((data) => (
          <div
            key={data.id}
            className="flex flex-col group justify-end items-center shadow-2xl max-w-2xs h-63 relative rounded-2xl hover:bg-black hover:text-white duration-200 pb-3 mt-36 dark:bg-gray-700"
          data-aos="flip-right"
          >
            <div className="w-[150px] duration-200 absolute -top-30 group-hover:scale-105">
              <img src={data.Image} alt={data.name} />
            </div>
            <div className="flex gap-1 text-yellow-400">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            </div>
            <h1 className="text-2xl group-hover:text-white font-bold">
              {data.name}
            </h1>
            <p className="px-4 text-center group-hover:text-yellow-400 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              in!
            </p>
            <button className="text-white bg-[#fea928] px-4 py-1 mt-2 rounded-2xl cursor-pointer group-hover:bg-white group-hover:text-orange-400 hover:scale-105 duration-200 dark:bg-white dark:text-black font-bold" onClick={handleOrderPopup}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BestProdusts;
