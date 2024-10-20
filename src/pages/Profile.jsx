import React, { useState, useEffect, createContext, useContext } from "react";
import ProfileInterestedSec from "../container/ProfileInterestedSec";
import FilterProjects from "../container/FilterProjects";
import { motion } from "framer-motion";
import ProjectComp from "../container/ProjectComp";
import UserSender from "./UserContext";

function Profile() {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState("");

  return (
    <>
      <section className="flex flex-col  justify-center items-center  text-textColor-color h-full pt-16 bg-[#F8F9FA] px-16 relative">
        <motion.p
          className="mb-2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-skin-color text-base px-2">Portfolio</span>
        </motion.p>
        <motion.h2
          className="text-3xl mb-14 font-semibold text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Some of my most recent projects
        </motion.h2>
        <FilterProjects UserSender={UserSender} />
        <ProjectComp />
      </section>
      <ProfileInterestedSec />
    </>
  );
}

export default Profile;
