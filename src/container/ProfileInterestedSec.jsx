import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export default function ProfileInterestedSec() {
  return (
    <>
      <div className="w-full md:h-[75vh] bg-skin-color">
        <div className="  size-full  bg-fixed bg-no-repeat bg-cover bg-center bg-[url(./images/intro-bg-2.jpg)] ">
          <div className="w-full h-full bg-slate-900 bg-opacity-75 flex flex-col justify-center items-center">
            <motion.h1
              className="text-3xl font-semibold text-white text-center pt-16 md:pt-0"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Interested in working with me?
            </motion.h1>
            <Link to="contect-me" smooth>
              <motion.button
                className=" shadow-2xl w-44  md:mr-8 bg-skin-color border-2 border-skin-color  text-textColor-color  text-white my-16 p-2 "
                initial={{ y: 50, opacity: 0, scale: 1.5 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: 0.4,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                Hire Me
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
