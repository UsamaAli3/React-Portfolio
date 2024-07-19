import React from "react";

function SkillProgressBar() {
  return (
    <>
      <div className="w-full text-start  py-10 bg-white">
        <h1 className="text-[28px] mb-4 font-semibold ">My Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 ">
          <div>
            <div className="flex justify-between my-2">
              <p>HTML/CSS</p>
              <p>95%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[95%] h-2 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between my-2">
              <p>JAVASCRIPT</p>
              <p>80%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[80%] h-2 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between my-2">
              <p>Reactjs</p>
              <p>80%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[80%] h-2 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between my-2">
              <p>Tailwind CSS</p>
              <p>90%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[90%] h-2 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between my-2 font-">
              <p>Node js/Express js</p>
              <p>50%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[50%] h-2 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between my-2">
              <p>Mongo DB</p>
              <p>65%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[65%] h-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <button className=" shadow-2xl w-44  mr-8 bg-transparent border-2 border-skin-color  text-textColor-color hover:bg-hover-color hover:text-white my-16 p-2 hover:ease">
        Download CV
      </button>
    </>
  );
}

export default SkillProgressBar;
