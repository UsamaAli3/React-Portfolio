import React from "react";
import { IoMdColorPalette, IoMdAnalytics } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { FaPenRuler } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { motion } from "framer-motion";

function WhatIDo() {
  return (
    <>
      <section className="flex flex-col  justify-center items-center  text-textColor-color h-full pt-16 bg-[#F8F9FA]  px-16 ">
        <motion.p
          className="mb-2"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-skin-color text-base px-2">What I Do?</span>
        </motion.p>
        <motion.h2
          className="text-3xl mb-14 font-semibold"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          How I can help your next project
        </motion.h2>

        <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 gap-11 text-center w-full   ">
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center text-5xl text-hover-color mb-4">
              <IoMdColorPalette />
            </div>
            <h6 className="font-semibold text-2xl text-textColor-color">
              Graphic Design
            </h6>
            <p className="text-[#8E9A9D] text-sm leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center text-5xl text-hover-color mb-4">
              <FiMonitor />
            </div>
            <h6 className="font-semibold text-2xl text-textColor-color">
              Web Design
            </h6>
            <p className="text-[#8E9A9D] text-sm leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center text-5xl text-hover-color mb-4">
              <FaPenRuler />
            </div>
            <h6 className="font-semibold text-2xl text-textColor-color">
              UI/UX Design
            </h6>
            <p className="text-[#8E9A9D] text-sm leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center text-5xl text-hover-color mb-4">
              <FaPaintBrush />
            </div>
            <h6 className="font-semibold text-2xl text-textColor-color">
              App Design & Develop
            </h6>
            <p className="text-[#8E9A9D] text-sm leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center text-5xl text-hover-color mb-4">
              <IoMdAnalytics />
            </div>
            <h6 className="font-semibold text-2xl text-textColor-color">
              Business Analysis
            </h6>
            <p className="text-[#8E9A9D] text-sm leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center text-5xl text-hover-color mb-4">
              <TbSpeakerphone />
            </div>
            <h6 className="font-semibold text-2xl text-textColor-color">
              SEO Marketing
            </h6>
            <p className="text-[#8E9A9D] text-sm leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default WhatIDo;
