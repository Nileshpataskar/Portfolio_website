import React from "react";
import Projects from "./Projects";

const Content = () => {
  return (
    <div className="h-auto  text-xl md:text-3xl flex-col gap-4 flex">
      <h1>
        Hey there, I'm <span className="text-pink-300">Nilesh Pataskar</span>{" "}
      </h1>
      <p className="text-lg md:text-xl">
        I write code, Mostly in{" "}
        <span className="text-purple-200">Javascript and Python. </span> I've
        been doing / learning
        <span className="text-blue-300"> Fullstack Development</span> for a
        better part of Year.{" "}
      </p>
      <p className="text-lg md:text-xl">
        For more Information, Please refer to my{" "}
        <span className="bg-transparent  text-green-300 border-green-300 rounded-lg box-border pb-1 px-2 border-[3px] ">
          <a
            href="https://drive.google.com/file/d/1DhqgB1piJEieTSEhKfiO9kmyMu07m_WJ/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
        </span>
      </p>

      <p className="text-xl mt-10">
        Worked as a
        <span className="text-green-300"> Python Developer Intern </span>in{" "}
        <span className="text-red-200"> Pitney Bowes</span>{" "}
      </p>

      <p className="text-xl">
        Completed <span className="text-amber-100"> Computer Engineering</span>{" "}
        from <span className="text-gray-400"> D.Y.Patil College</span>
      </p>

      <div className="mt-10">
        <Projects />
      </div>

      <p className="text-xl mt-8">
        During my Academic Years, published two{" "}
        <span className="text-rose-200"> research paper's </span>related to
        project
      </p>
      <span className="flex gap-10 justify-center">
        <span className="bg-transparent  text-green-200 border-green-300 rounded-lg box-border pb-1 px-2 border-[3px] text-sm md:text-lg ">
        
        <a href="https://ijsrd.com/Article.php?manuscript=IJSRDV7I10446" target="_blank" rel="noreferrer" >
        Smart Parking System
        </a>
        </span>

        <span className="bg-transparent  text-green-200 border-green-300 rounded-lg box-border pb-1 px-2 border-[3px] text-sm md:text-lg">

        <a href="https://ijarcce.com/papers/a-review-on-health-care-information-system/" target="_blank" rel="noreferrer" >
        HealthCard Info System
        </a>
        </span>
      </span>
    </div>
  );
};

export default Content;
