import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="pt-28 pb-20 flex flex-col">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className=" flex justify-center text-4xl font-bold text-gray-900 sm:text-5xl lg:pb-[50px]">
              ABOUT ME
            </h1>
          </div>

          <div className="flex flex-wrap -space-x-3 overflow-hidden content-center justify-evenly mb-10">
            <img
              className="inline-block h-40 w-40 rounded-full ring-2 ring-white"
              // src= {imgUrl}
              alt="myphoto"
            />
          </div>

          <h2 className="text-2xl text-center font-bold mb-4">
            Hello, my name is John Kang.
          </h2>

          <p className="text-black mb-9 mx-28 text-base leading-relaxed text-center">
            I am a web developer based in Irvine, California. I
            specialize in creating seamless user experiences that solve complex
            problems and drive results. With proficiency in frameworks and
            programming languages such as [List the frameworks and languages you
            know], I have built several projects that showcase my ability to
            create responsive, dynamic, and interactive web applications. I also
            have a strong eye for design and believe in creating websites that
            are not only aesthetically pleasing but also function intuitively.
            If you're looking for a web developer to bring your website vision
            to life, please take a look at my portfolio and feel free to contact
            me.
          </p>

          <div className="flex justify-center">
            <button className="bg-black hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
              View My Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
