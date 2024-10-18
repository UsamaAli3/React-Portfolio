import React, { useEffect, useState } from "react";
import IntroBg from "/images/intro-bg-2.jpg";
import Amazon from "/images/amazon.png"
import { FaExternalLinkAlt, FaIndustry } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Profile from "../Profile.json";
import { useContext } from "react";
import UserSender from "../pages/UserContext";

function ProjectComp() {
  const { index, setIndex } = useContext(UserSender);
  const [arrs, setArrs] = useState(Profile);
  const [info, setInfo] = useState([]);
  const [string, setString] = useState("hidden");

  
  useEffect(() => {
    function dataHandel() {
      arrs.map((arr) => {
        if (arr.id === index) {
          setInfo(arr);
          console.log(arr.id);
          setString("fixed");

          setIndex(0);
        }
      });
    }
    dataHandel();
  }, [setString, index]);

  console.log(index);

  return (
    <div
      className={`m-16 bg-white border rounded-md shadow-lg  ${string} z-40 top-0 right-0 md:top-[-50px] md:right-0 md:h-[95%]`}
    >
      <div className="flex justify-end w-full">
        <button onClick={() => setString("hidden")}>
          <MdClose className="text-2xl md:text-4xl mr-2 md:mr-4 hover:cursor-pointer " />
        </button>
      </div>

      <h1 className="text-center text-2xl md:text-4xl font-semibold md:mb-4">
        {info.ProjectDetails}
      </h1>
      <div className="flex md:flex-row flex-col m-auto p-auto mb-4 md:mb-8">
        <div className="w-[80%] m-auto  md:w-[60%] p-2 md:p-4 ">
          <img
            className="md:max-w-full max-h-full object-cover "
            src={info.image}
            alt=""
          />
        </div>
        <div className="md:w-[40%] m-4 p-18">
          <div>
            <h3 className=" text-xl font-semibold">Project Info:</h3>
            <p>{info.ProjectInfo}</p>
          </div>
          <div className="pt-4">
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">Client:</h3>
              <p>{info.Client}</p>
            </div>
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">Technologies:</h3>
              <p>{info.Technologies}</p>
            </div>{" "}
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">Industry:</h3>
              <p>{info.Industry}</p>
            </div>{" "}
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">Date:</h3>
              <p>{info.Date}</p>
            </div>{" "}
            <div className=" flex border-b-[1px] border-gray-500 py-2 place-items-center">
              <h3 className=" text-lg font-semibold mr-2">URL:</h3>
              <a href={info.URL} target="_blank">
              <p className="bg-orange-400 p-2 hover:bg-orange-500 cursor-pointer flex items-center">
                {info.Web} <FaExternalLinkAlt className="ml-2" />
              </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComp;
