import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "xxxx ",
    title: "yyyy ",
    duration: "x years",
    details: "1---lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
  {
    year: "xxxx ",
    title: "yyyy ",
    duration: "x years",
    details: "2---lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
  {
    year: "xxxx ",
    title: "yyyy ",
    duration: "x years",
    details: "3---lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
  {
    year: "xxxx ",
    title: "yyyy ",
    duration: "x years",
    details: "4---lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
  {
    year: "xxxx ",
    title: "yyyy ",
    duration: "x years",
    details: "5---lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
];

// try to change color of back ground here ? md:pl-20
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto p-4 py-16">
      {/* change color of text here */}
      <h1 className="text-black text-4xl font-bold flex flex-col text-center mb-20 ">EXPERIENCE</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
