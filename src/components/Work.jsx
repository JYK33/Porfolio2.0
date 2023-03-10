import React from "react";
import WorkItem from "./WorkItem"

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

const Work = () => {
  // try to change color of back ground here ?
  return <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    {/* change color of text here */}
    <h1 className="text-black text-4xl font-bold text-center mb-5">WORK</h1>
    {data.map((item, idx) => (
        <WorkItem 
        key ={idx} 
        year ={item.year} 
        title ={item.title} 
        duration = {item.duration} 
        details={item.details} 
        />
    ))}
  </div>;
  
};

export default Work;
