import React from "react";
import { IoArrowDownCircleOutline, IoSettings } from "react-icons/io5";
import { IoMdArrowRoundDown } from "react-icons/io";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import ColorSetting from "../container/ColorSetting";

function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row leading-10 p-auto m-auto w-full h-full justify-center items-center md:h-[75vh] md:w-[85%] pt-28 pb-0 text-skin-color">
        <div className="w-96 h-72 md:w-1/2 md:h-[75vh] md:grow  bg-skin-color flex justify-center text-center  md:text-start flex-col z-10 ">
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
            <p className="">based in Lahore, Pakistan.</p>
          </div>
          <div className="flex justify-center md:justify-start ">
            <button className=" shadow-2xl w-44  mr-8 bg-black text-white hover:bg-hover-color">
              View My Work
            </button>
            <a
              className="underline hover:no-underline flex justify-center items-center"
              href=""
            >
              Contect me{" "}
              <span className="ml-2">
                <IoArrowDownCircleOutline />
              </span>
            </a>
          </div>
        </div>

        <div className="w-96 h-96 md:w-1/2 md:h-[75vh] md:grow  bg-skin-color flex justify-center md:justify-end items-center">
          <div className=" shadow-2xl w-[100%] h-[100%] md:w-[20rem] md:h-[20rem] border-[17px]  relative md:absolute  z-10 rounded-full border-white bg-no-repeat bg-cover bg-center bg-[url('https://portfolio-project-ochre.vercel.app/projects-img/web%20profile%20(2).jpg')] "></div>
        </div>
      </div>
      <Link
        className="flex justify-center items-center text-xl  md:mt-16 "
        to=""
      >
        <IoMdArrowRoundDown className="z-10 h-16 animate-[bounce_1s_ease-in-out_infinite]" />
      </Link>
      <div className="flex justify-end fixed top-[40vh] right-0 z-40">
        <Link
          to=""
          className="bg-gray-700 flex justify-center items-center rounded-l-lg h-8 w-8"
        >
          <IoSettings />
        </Link>
        <ColorSetting className={"hidde"} />
      </div>
    </>
  );
}

export default Home;
