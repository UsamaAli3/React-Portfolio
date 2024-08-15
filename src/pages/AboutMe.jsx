import React, { useEffect } from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <>
      <motion.section className="flex flex-col  justify-center items-center  text-textColor-color  pt-16 bg-white px-8 md:px-16 pb-8 selection:bg-skin-color md:h-lvh ">
        <motion.p
          className="mb-2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-skin-color text-base px-2 text-textColor-color">
            About Me
          </span>
        </motion.p>
        <motion.h2
          className="text-3xl mb-14 font-semibold"
          initial={{ y: 50, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Know Me More
        </motion.h2>
        <div className=" text-textColor-color mb-16">
          <div className=" grow md:flex text-center md:text-start ">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl mb-4 ">
                Hi, I'm
                <span className="font-bold border-b-4 border-skin-color ml-2">
                  Usama Ali
                </span>
              </h1>
              <p className="w-[90%] text-base mb-4 leading-loose pl-6 md:pl-0">
                I'm a Web Developer specializing in front end development.
                Experienced with all stages of the development cycle for dynamic
                web projects. Well-versed in numerous programming languages
                including HTML5, JavaScript, CSS, React JS. Strong background in
                project management and customer relations .
              </p>
            </motion.div>
            <motion.div
              className="grow my-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div className="w-24 h-24 rounded-full bg-skin-color mb-4 relative m-auto p-auto ">
                <motion.span
                  className="absolute inset-0 flex items-center justify-center "
                  initial={{ scale: 1.3 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,

                    delay: 2,
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-[100px]  md:text-[140px]"> 2</p>
                </motion.span>
              </motion.div>
              <motion.div
                className="text-2xl text-nowrap"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: 2.5,
                  duration: 2.5,
                }}
                viewport={{ once: true }}
              >
                Years of <span className="font-semibold">Experiance</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full   ">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="text-[#8E9A9D]">Name:</h6>
            <p className="font-semibold text-textColor-color">Usama Ali</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="text-[#8E9A9D]">Email:</h6>
            <p className="underline hover:no-underline font-semibold md:flex  text-textColor-color ">
              imusamaali7 <span> @gmail.com</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="text-[#8E9A9D]">Date of Birth:</h6>
            <p className="font-semibold text-textColor-color">
              25 August, 1998
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="text-[#8E9A9D]">From:</h6>
            <p className="font-semibold text-textColor-color">
              Lahore, Pakistan.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default AboutMe;
