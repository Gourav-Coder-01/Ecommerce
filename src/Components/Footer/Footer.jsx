import React from "react";
import BannerImg from "../../assets/website/footer-pattern.jpg";
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMap,
  FaMobileAlt,
} from "react-icons/fa";

const MenuList = [
  {
    id: 1,
    name1: "home",
    name2: "Career",
  },
  {
    id: 2,
    name1: "About",
    name2: "Your Order",
  },
  {
    id: 3,
    name1: "Contact",
    name2: "recently viewed",
  },
  {
    id: 4,
    name1: "Blog",
    name2: "affiliate",
  },
];

const Banner = {
  backgroundImage: `url(${BannerImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  height: "100%",
  weidth: "100%",
};

const Footer = () => {
  return (
    <div className="mt-8 w-full text-white pb-36" style={Banner} data-aos="fade-up">
      <div className="flex justify-evenly pt-12 max-sm:flex-col max-sm:text-center">
        <div className="w-[400px] max-sm:w-[200px] max-sm:mx-auto space-y-5">
          <div className="flex items-center">
            <img src={Logo} alt="img" className="w-[50px]" />
            <h1 className="text-2xl font-bold">Shopsy</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nam atque illum culpa possimus enim?
          </p>
        </div>
        <div className=" space-y-4 max-sm:mt-8">
          <h1 className="text-2xl font-bold">Important Links</h1>
          <ul className="space-y-4">
            {MenuList.map((data) => (
              <div key={data.id}>
                <li>{data.name1}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="space-y-4 max-sm:mt-8">
          <h1 className="text-2xl font-bold">Important Links</h1>
          <ul className="space-y-4">
            {MenuList.map((data) => (
              <div key={data.id}>
                <li>{data.name2}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="space-y-4 max-sm:flex max-sm:flex-col justify-center items-center max-sm:mt-12">
          <div className="flex gap-3 items-center">
            <FaInstagram className="text-4xl" />
            <FaFacebook className="text-4xl" />
            <FaLinkedin className="text-4xl" />
          </div>
          <div className="flex gap-3">
            <FaLocationArrow />
            <h2>Noida, Uttar Pradesh</h2>
          </div>
          <div className="flex items-center gap-3">
            <FaMobileAlt />
            <h2>+91 987654321</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
