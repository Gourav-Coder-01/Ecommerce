import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/Cricketers/dhoni.jpg";
import Img2 from "../../assets/Cricketers/kohli.jpg";
import Img3 from "../../assets/Cricketers/rohit.jpg";
import Img4 from "../../assets/Cricketers/sachin.jpg";
import Img5 from "../../assets/Cricketers/sidhu.jpg";
const ReviewList = [
  {
    id: 1,
    image: Img1,
    name: "Sidhu",
  },
  {
    id: 2,
    image: Img2,
    name: "dhoni",
  },
  {
    id: 3,
    image: Img3,
    name: "sachin",
  },
  {
    id: 4,
    image: Img4,
    name: "kohli",
  },
  {
    id: 5,
    image: Img5,
    name: "rohit",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" dark:bg-gray-950">
      <div className="text-center dark:text-white" data-aos="zoom-in">
        <p className="text-orange-500 font-bold dark:text-yellow-700">
          What our customers are saying ?
        </p>
        <h1 className="text-2xl font-bold dark:text-white">Testimonials</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          repudiandae.
        </p>
      </div>
      <div className="space-y-6">
        <Slider {...settings}>
          {ReviewList.map((data) => (
            <div className="mx-4 dark:text-white outline-0" data-aos="flip-left">
            <div
              key={data.id}
              className="bg-[#fea928]/30 space-y-6 cursor-pointer hover:scale-101 mt-8 p-10 dark:bg-gray-950"
            >
              <div className="flex justify-between items-center px-6 w-fit">
                <img
                  src={data.image}
                  alt="image"
                  className=" w-10 h-20 rounded-full"
                />
                <h1 className="text-gray-600 text-6xl italic">,,</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus ducimus voluptate vitae ipsam commodi repellat
                  suscipit fuga facilis inventore molestiae.
                </p>
                <h1 className="font-bold">{data.name}</h1>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
