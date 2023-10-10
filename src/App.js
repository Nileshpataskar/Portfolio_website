import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import Content from "./Content";

const App = () => {
  return (
    <div className="flex flex-col ">
      {/* top */}
      <div className="flex h-16 items-center justify-between px-5 py-5 md:px-14 md:pt-10 ">
        {/*  <h2 className="text-xl md:text-3xl heading">Nilesh Pataskar</h2>*/}

        <button data-text="Awesome" class="button">
          <span class="actual-text">Nilesh_Pataskar </span>
          <span class="hover-text" >
            Nilesh_Pataskar ;
          </span>
        </button>


        <div className="flex gap-2 md:gap-5">
          <FiInstagram className="text-lg md:text-2xl text-cyan-300" />
          <FiGithub className="text-lg md:text-2xl text-cyan-300" />
          <FiLinkedin className="text-lg md:text-2xl text-cyan-300" />
          <FiTwitter className="text-lg md:text-2xl text-cyan-300" />
          <FiMail className="text-lg md:text-2xl text-cyan-300" />
        </div>
      </div>

      <div className=" flex justify-center font-mono mt-6 md:mt-14 ">
        <div className="w-[85%] md:w-[45%]  ">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
