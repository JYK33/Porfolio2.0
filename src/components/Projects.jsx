import React from "react";
import ProjectItem from "./ProjectItem";
import tuneinImg from "../assets/tune-in.jpg";
import tuneinImg2 from "../assets/tuneinTest2.jpg";
import susImg from "../assets/sus.jpg";
import quizImg from "../assets/quiz.jpg";
import noteImg from "../assets/note-taker.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black">Projects</h1>
      <p className="text-center py-8 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
        assumenda.{" "}
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={tuneinImg2} title="TuneIn" />
        <ProjectItem img={quizImg} title="Quiz" />
        <ProjectItem img={susImg} title="SUS Report" />
        <ProjectItem img={noteImg} title="Note Taker" />
      </div>
    </div>
  );
};
export default Projects;
