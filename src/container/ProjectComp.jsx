import React from "react";
import IntroBg from "/images/intro-bg-2.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function ProjectComp({ className }) {
  return (
    <div className={`m-16 ${className}`}>
      <div className="flex justify-end ">
        <MdClose className="text-4xl mr-4 hover:cursor-pointer" />
      </div>

      <h1 className="text-center text-4xl font-semibold mb-4">
        Details Project 1
      </h1>
      <div className="flex md:flex-row flex-col     m-auto p-auto  mb-8">
        <div className="md:w-[60%] p-4 ">
          <img
            className="md:max-w-full max-h-full object-cover "
            src={IntroBg}
            alt=""
          />
        </div>
        <div className="md:w-[40%] m-4 p-18">
          <div>
            <h3 className=" text-xl font-semibold">Project Info:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              placeat ut odit dolores molestiae deleniti nostrum ipsa quas,
              quibusdam veritatis velit natus, voluptate laudantium ab,
              cupiditate voluptatibus quos? Dolores, quidem!
            </p>
          </div>
          <div className="pt-4">
            <h3 className=" text-xl font-semibold">Project Info:</h3>
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">Client:</h3>
              <p>Ruby Clinton</p>
            </div>
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">Technologies:</h3>
              <p>iOS, HTML5, CSS3, PHP, Java</p>
            </div>{" "}
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">Industry:</h3>
              <p>Art & Design</p>
            </div>{" "}
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">Date:</h3>
              <p>July 16, 2019</p>
            </div>{" "}
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">URL:</h3>
              <p className="bg-orange-400 p-2 hover:bg-orange-500 cursor-pointer flex items-center">
                www.example.com <FaExternalLinkAlt className="ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComp;
