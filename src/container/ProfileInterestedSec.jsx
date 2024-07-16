import React from "react";

export default function ProfileInterestedSec() {
  return (
    <>
      <div className="w-full md:h-[75vh] bg-skin-color">
        <div className=" w-[100%] h-[100%] bg-fixed  bg-no-repeat bg-cover bg-center bg-[url('https://harnishdesign.net/demo/react/callum/demo/images/intro-bg-2.jpg')] ">
          <div className="w-full h-full bg-slate-900 bg-opacity-75 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold text-white">
              Interested in working with me?
            </h1>
            <button className=" shadow-2xl w-44  mr-8 bg-skin-color border-2 border-skin-color  text-textColor-color  text-white my-16 p-2 ">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
