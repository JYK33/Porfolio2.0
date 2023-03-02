import React from "react";
import WorkItem from "./WorkItem"

const data = [
  {
    year: "xxxx",
    title: "xxxx",
    duration: "x years",
    deatils: "lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
  {
    year: "xxxx",
    title: "xxxx",
    duration: "x years",
    details: "lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
  {
    year: "xxxx",
    title: "xxxx",
    duration: "x years",
    details: "lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
  {
    year: "xxxx",
    title: "xxxx",
    duration: "x years",
    details: "lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
  {
    year: "xxxx",
    title: "xxxx",
    duration: "x years",
    details: "lorem Ipsum, dolor sit amet consectetur adipiscing elit.",
  },
];

const Work = () => {
  return <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-black/50">
    <h1 className="text-white text-4xl font-bold text-center">Work</h1>
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
