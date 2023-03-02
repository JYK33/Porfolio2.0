import React from "react";
import MainImg from "../assets/space.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF} from "react-icons/fa"

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={MainImg}
        alt="main-page-img"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        
        {/* Type Animation for introduction */}
        <div className=" text-white max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold">I'm John Kang</h1>
          <h2 className="flex sm:text-3xl test-2xl pt-4">
            I'm a
            <TypeAnimation
              sequence={[
                "Coder", // Types 'One'
                2000, // Waits 1s
                "Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: '5px' }}
            />
          </h2>
          {/* incons for my social media */}
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaGithub className="cursor-pointer" size={20}/>
            <FaLinkedin className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20}/>
            <FaFacebookF className="cursor-pointer" size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
