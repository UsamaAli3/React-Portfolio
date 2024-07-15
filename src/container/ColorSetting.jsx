import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { color } from "../store/colorSlice";
function ColorSetting({ className }) {
  const [colorVal, setColorVal] = useState("dark");
  //dispatch = useDispatch(colorVal);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={` w-[200px] h-[170px]  flex flex-col justify-center items-center bg-white ${className}`}
      >
        <h1 className=" flex w-[80%] text-hover-color text-lg font-normal border-b-2 ">
          Color Switch
        </h1>
        <ul
          className={`grid grid-cols-4 grid-rows-2 place-content-center place-items-center w-[150px] gap-2 h-[120px] mt-4 bg-white `}
        >
          <li>
            <button
              className="w-8 h-8 rounded-full cursor-pointer bg-green-500 "
              onClick={() => dispatch(color("green"))}
            ></button>
          </li>
          <li>
            <button
              className="w-8 h-8 rounded-full cursor-pointer bg-gray-500 "
              onClick={() => dispatch(color("dark"))}
            ></button>
          </li>

          <div></div>
        </ul>
      </div>
    </>
  );
}

export default ColorSetting;
