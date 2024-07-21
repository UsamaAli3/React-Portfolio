import React from "react";
import { motion } from "framer-motion";

function SkillProgressBar() {
  return (
    <>
      <div className="w-full text-start  pt-16 bg-white">
        <motion.h1
          className="text-[28px] mb-4 font-semibold "
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 ">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between my-2">
              <p>HTML/CSS</p>
              <p>95%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[95%] h-2 rounded-full"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between my-2">
              <p>JAVASCRIPT</p>
              <p>80%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[80%] h-2 rounded-full"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between my-2">
              <p>Reactjs</p>
              <p>80%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[80%] h-2 rounded-full"></div>
            </div>
          </motion.div>
          <motion.div
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.5 }}
             viewport={{ once: true }}
          >
            <div className="flex justify-between my-2">
              <p>Tailwind CSS</p>
              <p>90%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[90%] h-2 rounded-full"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between my-2 font-">
              <p>Node js/Express js</p>
              <p>50%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[50%] h-2 rounded-full"></div>
            </div>
          </motion.div>
          <motion.div
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.5 }}
             viewport={{ once: true }}
          >
            <div className="flex justify-between my-2">
              <p>Mongo DB</p>
              <p>65%</p>
            </div>
            <div className="bg-[#E9ECEF] w-full h-2 flex rounded-full  items-center">
              <div className="bg-skin-color w-[65%] h-2 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.button
        className=" shadow-2xl w-44  md:mr-8 bg-transparent border-2 border-skin-color  text-textColor-color hover:bg-hover-color hover:text-white my-16 p-2 hover:ease"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {" "}
        Download CV
      </motion.button>
    </>
  );
}

export default SkillProgressBar;
