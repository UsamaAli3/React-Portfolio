import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { color } from "../store/colorSlice";
import { delay, motion } from "framer-motion";
function ColorSetting({ className }) {
  const [colorVal, setColorVal] = useState("dark");
  //dispatch = useDispatch(colorVal);
  const dispatch = useDispatch();

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        className={` w-[200px] h-[170px]  flex flex-col justify-center items-center bg-white ${className}`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h1 className=" flex w-[80%] text-hover-color text-lg font-normal border-b-2 ">
          Color Switch
        </h1>
        <ul
          className={`grid grid-cols-4 grid-rows-2 place-content-center place-items-center w-[150px] gap-2 h-[120px] mt-4 bg-white `}
        >
          <motion.li variants={item}>
            <button
              className="w-8 h-8 rounded-full cursor-pointer focus:scale-75 bg-[#00FFFF] "
              onClick={() => dispatch(color("blue"))}
            ></button>
          </motion.li>
          <motion.li variants={item}>
            <button
              className="w-8 h-8 rounded-full cursor-pointer focus:scale-75 bg-[#00FE9C] "
              onClick={() => dispatch(color("light-blue"))}
            ></button>
          </motion.li>
          <motion.li variants={item}>
            <button
              className="w-8 h-8 rounded-full cursor-pointer focus:scale-75 bg-[#ADFF2F] "
              onClick={() => dispatch(color("green"))}
            ></button>
          </motion.li>
          <motion.li variants={item}>
            <button
              className="w-8 h-8 rounded-full cursor-pointer focus:scale-75 bg-[#D6AD17] "
              onClick={() => dispatch(color("yellow"))}
            ></button>
          </motion.li>
          <motion.li variants={item}>
            <button
              className="w-8 h-8 rounded-full cursor-pointer focus:scale-75 bg-[#FF91FB] "
              onClick={() => dispatch(color("pink"))}
            ></button>
          </motion.li>
          <motion.li variants={item}>
            <button
              className="w-8 h-8 rounded-full cursor-pointer focus:scale-75 bg-[#FDBB2E] "
              onClick={() => dispatch(color("orignal"))}
            ></button>
          </motion.li>
          <motion.li variants={item}>
            <button
              className="w-8 h-8 rounded-full cursor-pointer focus:scale-75 bg-[#EEE8AA] "
              onClick={() => dispatch(color("light-pink"))}
            ></button>
          </motion.li>
          <motion.li variants={item}>
            <button
              className="w-8 h-8 rounded-full cursor-pointer focus:scale-75 bg-[#F5DF4E] "
              onClick={() => dispatch(color("light-yellow"))}
            ></button>
          </motion.li>

          <div></div>
        </ul>
      </motion.div>
    </>
  );
}

export default ColorSetting;
