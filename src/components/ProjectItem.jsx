import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl">
      <img src={img} alt="/" />
      <div>
        <h3>
            {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectItem;
