import React from "react";
import MainImg from "../assets/space.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={MainImg}
        alt="main-page-img"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div className=" text-white max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-5xl font-bold">
            Welcome To My Portfolio
          </h1>
          <h2 className="flex sm:text-4xl test-2xl pt-4">
            Learn More About
            <TypeAnimation
              sequence={[
                "Me",
                2500,
                "My Work Experience",
                2500,
                "My Projects",
                2500,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://github.com/JYK33">
              <FaGithub
                href="https://github.com/JYK33"
                className="cursor-pointer"
                size={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/john-kang-382122161/">
              <FaLinkedin
                href="https://www.linkedin.com/in/john-kang-382122161/"
                className="cursor-pointer"
                size={30}
              />
            </a>
            <a href="https://www.instagram.com/johnkangg/?hl=en">
              {" "}
              <FaInstagram
                href="https://www.instagram.com/johnkangg/?hl=en"
                className="cursor-pointer"
                size={30}
              />{" "}
            </a>
            {/* <a href=""> <FaFacebookF className="cursor-pointer" size={30} /> </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
