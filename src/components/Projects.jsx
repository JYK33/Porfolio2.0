import React from "react";
import ProjectItem from "./ProjectItem";
import tuneinImg from "../assets/tune-in.jpg";
import tuneinImg2 from "../assets/tuneinTest2.jpg";
import susImg from "../assets/sus.jpg";
import quizImg from "../assets/quiz.jpg";
import noteImg from "../assets/note-taker.jpg";
import noteImg2 from "../assets/note-taker2.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black">Projects</h1>
      <p className="text-center py-8 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
        assumenda.{" "}
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={tuneinImg2} title="TuneIn Blog" />
        <ProjectItem img={quizImg} title="Quiz App" />
        <ProjectItem img={susImg} title="Surfs Up Surf-Report" />
        <ProjectItem img={noteImg2} title="Note Taker" />
      </div>
    </div>
  );
};
export default Projects;
