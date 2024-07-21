import React, { useState, useEffect } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundDown, IoMdSettings } from "react-icons/io";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import ColorSetting from "../container/ColorSetting";


function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isArrow, setIsArrow] = useState(0);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const textColorClass = isArrow >= 250 ? " block" : "hidden";
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsArrow(window.scrollY);
    });
  });
 
  return (
    <>
      <div className="w-full md:h-lvh  bg-skin-color">
        <div className="flex flex-col-reverse md:flex-row leading-10 p-auto m-auto  h-full justify-center items-center md:h-[75vh] md:w-[85%] md:pt-28 pt-20 pb-0 text-skin-color">
          <motion.div
            className="w-full h-72 md:w-1/2 md:h-[75vh] md:grow  bg-skin-color flex justify-center text-center  md:text-start flex-col z-10 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
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
              <Link to="profile" smooth>
                <button className=" shadow-2xl w-44  mr-8 py-2 bg-black text-white hover:bg-hover-color">
                  View My Work
                </button>
              </Link>

              <Link
                className="underline hover:no-underline flex justify-center items-center cursor-pointer"
                to="contect-me"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contect me{" "}
                <span className="ml-2">
                  <IoArrowDownCircleOutline />
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="size-80 md:w-1/2 md:h-[75vh] md:grow  bg-skin-color flex justify-center md:justify-end items-center"
            initial={{ scale: 0, x: 0 }}
            whileInView={{ scale: 1, x: -0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className={` shadow-2xl size-full md:w-[20rem] md:h-[20rem] border-[17px]  relative md:absolute  z-10 rounded-full border-white bg-no-repeat bg-cover bg-center bg-[url('https://github.com/UsamaAli3/React-Portfolio/blob/main/public/images/profile.png?raw=true')]`} ></div>
          </motion.div>
        </div>
        <Link
          className="flex justify-center items-center text-xl cursor-pointer  md:mt-16 "
          to="about-me"
          spy={true}
          smooth={true}
          duration={500}
        >
          <IoMdArrowRoundDown className="z-10 h-16 animate-[bounce_1s_ease-in-out_infinite]" />
        </Link>

        {/*Color Switcher*/}

        <motion.div className="flex justify-end fixed top-[40vh] right-0 z-10 ">
          <button
            to=""
            className="bg-gray-700 flex justify-center items-center rounded-l-lg h-8 w-8"
            onClick={handleToggle}
          >
            <IoMdSettings className="text-white text-xl" />
          </button>
          <motion.div
          >
            <ColorSetting className={` ${isActive ? "block " : "hidden "} `} />
          </motion.div>
        </motion.div>
        
        <div
          className={`tooltip tooltip-left  rounded-l-lg h-8 w-8 fixed bottom-2 right-2 z-10 cursor-pointer ${textColorClass}`}
          data-tip="Back to Top"
        >
          <Link
            to="home"
            smooth
            data-tooltip-target="tooltip-default"
            className="bg-[#00000033] text-white hover:text-textColor-color hover:bg-skin-color flex justify-center items-center rounded-full h-8 w-8 fixed bottom-2 right-2  z-10 transition ease-in-out "
          >
            <FaArrowUp className=" text-xl" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
