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
            I'm a web developer specializing in HTML, CSS, Javascript, MySQL,
            and React. As a former UX and motion graphic designer, I have a
            strong understanding of user experience and how to capture user's
            attention. In my past experience, I have collaborated with a team of
            developers as well as strategists to create a interactive engagement
            unit for various brands' ad campaigns. I've also managed a team of
            designers and have worked in the tech industry for over 6 years.
            Now, as a passionate student, I'm currently looking for new
            opportunities to grow in the tech industry as a developer.
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
