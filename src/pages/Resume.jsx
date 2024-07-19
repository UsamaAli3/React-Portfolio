import React from "react";
import SkillProgressBar from "../container/SkillProgressBar";

function Resume() {
  return (
    <>
      <section className="flex flex-col  justify-center items-center  text-textColor-color  h-full pt-16  bg-white  px-14 ">
        <p className="mb-2">
          <span className="bg-skin-color text-base px-2">Resume</span>
        </p>
        <h2 className="text-3xl mb-14 font-semibold">A summary of My Resume
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className=" grow flex-col md:mx-10 md:flex text-start md:text-start ">
            {/* Education Section */}

            <h1 className="text-[28px] mb-4 font-semibold">My Education</h1>
            <div className=" border-l-2 border-skin-color  pl-4">
              <div className="border-b-[1px] border-[#aeafaf]">
                <h3 className="text-[21px] my-2">Web Development Course</h3>
                <p className=" my-2 ">Youtube / 2022 - 2024</p>
                <p className="text-[#8E9A9D] my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </p>
              </div>
              <div className="border-b-[1px] border-[#aeafaf]">
                <h3 className="text-[21px] my-2">
                  Intermediate in Computer Science
                </h3>
                <p className=" my-2 ">Quaid-e-Azam College / 2016 - 2017</p>
                <p className="text-[#8E9A9D] my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </p>
              </div>{" "}
              <div className="border-b-[1px] border-[#aeafaf]">
                <h3 className="text-[21px] my-2">
                  Secondary School Certificate (SSC)
                </h3>
                <p className=" my-2 ">Government Islamia High School / 2015</p>
                <p className="text-[#8E9A9D] my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </p>
              </div>
            </div>
          </div>
          {/* Experience Section */}
          <div className=" grow flex-col pt-10  md:mx-10 md:flex text-start md:text-start ">
            <h1 className="text-[28px] mb-4 font-semibold">My Experiance</h1>
            <div className=" border-l-2 border-skin-color  pl-4">
              <div className="border-b-[1px] border-[#aeafaf]">
                <h3 className="text-[21px] my-2">Font End Developer</h3>
                <p className=" my-2 ">Freelancing / 2024 - current</p>
                <p className="text-[#8E9A9D] my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </p>
              </div>
              <div className="border-b-[1px] border-[#aeafaf]">
                <h3 className="text-[21px] my-2">Jr. Font End Developer</h3>
                <p className=" my-2 ">TriVA / 2023 - 2024</p>
                <p className="text-[#8E9A9D] my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </p>
              </div>{" "}
              <div className="border-b-[1px] border-[#aeafaf]">
                <h3 className="text-[21px] my-2">HTML Developer</h3>
                <p className=" my-2 ">Azan Internetional / 2023 - 2023</p>
                <p className="text-[#8E9A9D] my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Skill Progress bar */}

        <SkillProgressBar />
      </section>
    </>
  );
}

export default Resume;
