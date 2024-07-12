import React from "react";
import Typewriter from "typewriter-effect";

function Home({ backgroundColor }) {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row leading-10 p-auto m-auto w-[50%] h-full justify-center items-center md:h-[75vh] md:w-[85%]">
        <div className="w-96 h-96 md:w-1/2 md:h-[75vh] md:grow  bg-[#fdbb2e] flex justify-center text-center  md:text-start flex-col z-10">
          <div className="leading-snug mb-8">
            <h1 className="text-4xl font-light">HI, I'M A FREELANCER</h1>
            <span className="text-[3.5rem] md:text-[5.95rem] font-semibold md:font-medium ">
              <Typewriter
                options={{
                  strings: ["USAMA", "DEVELOPER", "DESIGNER"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <p>based in Lahore, Pakistan.</p>
          </div>
          <div>
            <button
              className=" shadow-2xl w-44 mr-10 bg-black text-white hover:bg-gray-950"
              
            >
              View My Work
            </button>
            <a className="underline hover:no-underline" href="">Contect me</a>
          </div>
        </div>

        <div className="w-96 h-96 md:w-1/2 md:h-[75vh] md:grow  bg-[#fdbb2e] flex justify-center md:justify-end items-center">
          <div className=" shadow-2xl w-[100%] h-[100%] md:w-[20rem] md:h-[20rem] border-[17px]  relative md:absolute  z-10 rounded-full border-white bg-no-repeat bg-cover bg-center bg-[url('https://portfolio-project-ochre.vercel.app/projects-img/web%20profile%20(2).jpg')] "></div>
        </div>
      </div>
    </>
  );
}

export default Home;
