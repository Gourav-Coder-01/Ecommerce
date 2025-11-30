import React from "react";
import HeroImg from "../../assets/women/women.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/hero/sale.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/women.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, necessitatibus libero non inventore beatae officia tempora sequi dolore optio quam nemo facilis nulla magni at laudantium ipsa voluptatum, provident a.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, necessitatibus libero non inventore beatae officia tempora sequi dolore optio quam nemo facilis nulla magni at laudantium ipsa voluptatum, provident a.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, necessitatibus libero non inventore beatae officia tempora sequi dolore optio quam nemo facilis nulla magni at laudantium ipsa voluptatum, provident a.",
  },
];

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div>
      <div
        className="flex justify-center items-center mx-auto min-h-[450px]
         sm:min-h-[550px] relative overflow-hidden max-wl:flex-col-reverse
       dark:bg-gray-900/90 dark:text-white bg-[#fea928]/10 w-full"
      >
        {/* background pattern */}
        <div
          className="h-[500px] w-[500px] rounded-2xl rotate-45 bg-[#fea928]/40 absolute
               dark:bg-gray-900 max-wl:justify-center -top-60 right-2 -z-10"
        ></div>

        {/* hero section */}

        <div className="w-full">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center z-10 w-[80%] mx-auto">
                <div className="flex max-wl:flex-col-reverse justify-center items-center ">
                <div className=" space-y-4 max-wl:w-[250px] max-sm:px-4 max-sm:space-y-1 w-[500px] mx-auto" data-aos="zoom-out">
                  <h1 className="text-6xl font-bold max-sm:text-2xl">
                    {data.title}
                  </h1>
                  <p className="text-xs max-wl276:hidden block">{data.description}</p>
                  <button
                    className="bg-gradient-to-r from-[#fea928] to-orange-600 text-white 
                relative px-3 py-1 rounded-2xl cursor-pointer before:content-[''] before:absolute
                 before:bg-red-500 before:rounded-2xl before:w-[100%] before:h-[100%] before:top-0 
                 before:left-0 before:-z-1 hover:before:blur"
                 onClick={()=>{handleOrderPopup()
              }}
                  >
                    Order Now
                  </button>
                </div>
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className="w-[450px] max-wl:w-[17rem] max-wl276:w-[240px]"
                    data-aos="zoom-in"
                  />
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
