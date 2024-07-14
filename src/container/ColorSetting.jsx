import React from "react";
function ColorSetting({ className }) {
  return (
    <>
      <div className=" w-[200px] h-[170px]  flex flex-col justify-center items-center bg-white">
        <h1 className=" flex w-[80%] text-hover-color text-lg font-normal border-b-2 ">
          Color Switch
        </h1>
        <ul
          className={`grid grid-cols-4 grid-rows-2 place-content-center place-items-center w-[150px] h-[120px] bg-white ${className}`}
        >
          <li
            className="w-8 h-8 rounded-full cursor-pointer bg-red-500 "
            vlaue="green"
          ></li>
          <li
            className="w-8 h-8 rounded-full cursor-pointer bg-green-500 "
            vlaue="green"
          ></li>
          <li
            className="w-8 h-8 rounded-full cursor-pointer bg-blue-500 "
            vlaue="green"
          ></li>
          <li
            className="w-8 h-8 rounded-full cursor-pointer bg-pink-500 "
            vlaue="green"
          ></li>
          <li
            className="w-8 h-8 rounded-full cursor-pointer bg-amber-500 "
            vlaue="green"
          ></li>
          <li
            className="w-8 h-8 rounded-full cursor-pointer bg-indigo-500 "
            vlaue="green"
          ></li>
          <li
            className="w-8 h-8 rounded-full cursor-pointer bg-gray-700 "
            vlaue="green"
          ></li>
          <li
            className="w-8 h-8 rounded-full cursor-pointer bg-amber-300 "
            vlaue="green"
          ></li>

          <div></div>
        </ul>
      </div>
    </>
  );
}

export default ColorSetting;
