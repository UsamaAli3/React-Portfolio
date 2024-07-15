import React from "react";
import { IoMdColorPalette, IoMdAnalytics } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { FaPenRuler } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";

function WhatIDo() {
  return (
    <section className="flex flex-col justify-center items-center  text-textColor-color md:h-[100vh] bg-[#F8F9FA] pt-[6rem] px-16 ">
      <p className="mb-2">
        <span className="bg-skin-color text-base px-2">What I Do?</span>
      </p>
      <h2 className="text-3xl mb-10 font-semibold">
        How I can help your next project
      </h2>

      <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 gap-11 text-center w-full   ">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
