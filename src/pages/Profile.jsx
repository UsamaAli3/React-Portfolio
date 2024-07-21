import React from "react";
import ProfileInterestedSec from "../container/ProfileInterestedSec";
import FilterProjects from "../container/FilterProjects";
import { motion } from "framer-motion";

function Profile() {
  return (
    <>
      <section className="flex flex-col  justify-center items-center  text-textColor-color h-full pt-16 bg-[#F8F9FA]  px-16 ">
        <motion.p
          className="mb-2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-skin-color text-base px-2">Portfolio</span>
        </motion.p>
        <motion.h2
          className="text-3xl mb-14 font-semibold text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Some of my most recent projects
        </motion.h2>
        <FilterProjects />
      </section>
      <ProfileInterestedSec />
    </>
  );
}

export default Profile;
