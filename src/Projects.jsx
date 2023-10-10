import React from "react";

const Projects = () => {
  const projectData = [
    {
      name: "food",
      repo: "gg",
    },
    {
      name: "ecom",
      repo: "gg",
    },
    {
      name: "movix",
      repo: "gg",
    },
  ];
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">Projects</h1>

      <div className="flex w-full px-2 justify-start box-border gap-4 mt-10 flex-wrap">

      {projectData.map((item,index)=>(

          <div key={index} className="border-green-400 border-[3px] flex justify-center items-center md:h-24 md:w-60 sm:w-52  h-14 w-24">
            {item.name}
          </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;
