import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { motion } from "framer-motion";

function Menu({ className, handel }) {
  return (
    <>
      <div className={`absolute top-0 left-0  ${className} `}>
        <ul className="flex flex-col w-[100%] h-[100vh] leading-relaxed text-2xl text-white bg-black fixed z-20 justify-center items-center bg-opacity-90">
          <li className="text-hover-color focus:text-hover-color hover:text-hover-color cursor-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-hover-color"
              onClick={handel}
            >
              {" "}
              Home
            </Link>
          </li>
          <li className="focus:text-textColor-color">
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              activeClass="text-hover-color"
              duration={500}
              onClick={handel}
              className=" focus:text-hover-color hover:text-hover-color cursor-pointer"
            >
              {" "}
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="what-i-do"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handel}
              activeClass="text-hover-color"
              className="cursor-pointer hover:text-hover-color"
            >
              {" "}
              What I Do
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handel}
              activeClass="text-hover-color"
              className="cursor-pointer hover:text-hover-color"
            >
              {" "}
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              activeClass="text-hover-color"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handel}
              className="cursor-pointer hover:text-hover-color"
            >
              {" "}
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="client-speak"
              activeClass="text-hover-color"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handel}
              className="cursor-pointer hover:text-hover-color"
            >
              {" "}
              Client Speak
            </Link>
          </li>
          <li>
            <Link
              to="contect-me"
              activeClass="text-hover-color"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handel}
              className="cursor-pointer hover:text-hover-color"
            >
              {" "}
              Contect Me
            </Link>
          </li>
          <div>
            <ul className="flex gap-5 mt-10 font-semibold">
              <motion.li
                animate={{}}
                className="hover:text-blue-400 hover:scale-110"
              >
                <div className="tooltip" data-tip="Facebook">
                  <a
                    href="https://www.facebook.com/imusamaali7?mibextid=ZbWKwL"
                    target="_blank"
                    data-tooltip-target="tooltip-default"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </motion.li>
              <li className="hover:text-red-400 hover:scale-110">
                <div className="tooltip" data-tip="Instagram">
                  <a
                    href="https://www.instagram.com/iamusamali/?utm_source=qr&igsh=enUwaXVjbjlmMWR6"
                    target="_blank"
                    data-tooltip-target="tooltip-default"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </li>
              <li className="hover:text-blue-500 hover:scale-110">
                <div className="tooltip" data-tip="LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/usama-ali-71300423a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    data-tooltip-target="tooltip-default"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </li>
              <li className="hover:text-black hover:scale-110">
                <div className="tooltip" data-tip="Github">
                  <a
                    href="https://github.com/UsamaAli3"
                    target="_blank"
                    data-tooltip-target="tooltip-default"
                  >
                    <FaGithub />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Menu;
