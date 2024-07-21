import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { motion } from "framer-motion";
function ContectMe() {
  return (
    <>
      <section className="flex flex-col md:flex-row px-8 md:px-24 bg-skin-color gap-x-28 text-textColor-color size-full md:text-start  pt-[4rem] ">
        <motion.div
          className="grow "
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-wrap md:text-nowrap text-4xl  mb-12 font-semibold">
            Let's get in touch
          </h1>
          <p className="text-skin-color  leading-loose mb-12 text-[21px]">
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up.
          </p>
          <h3 className="text-[21px] mb-2">Living In:</h3>
          <p className=" mb-4 text-[18px]">Lahore, Pakistan.</p>
          <h3 className="text-[21px] mb-2">Call:</h3>
          <p className=" mb-4 text-[18px]">(+92) 318 7411532</p>
          <div className="w-52 md:mt-12 m-auto p-auto md:m-0 md-p-0 ">
            <ul className="flex gap-5 text-2xl">
              <li className="hover:text-blue-400 hover:scale-110">
                <div className="tooltip" data-tip="Facebook">
                  <a
                    href="https://www.facebook.com/imusamaali7?mibextid=ZbWKwL"
                    target="_blank"
                    data-tooltip-target="tooltip-default"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </li>
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
                    href="https://github.com/"
                    target="_blank"
                    data-tooltip-target="tooltip-default"
                  >
                    <FaGithub />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="grow text-textColor-color w-full pt-16 md:pt-0"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className=" text-4xl text-wrap md:text-nowrap  mb-12 font-semibold">
            Estimate your Project?
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-y-4 text-[16px] md:w-80 text-start w-full text-nowrap"
          >
            <label htmlFor="" className="pt-2">
              What is Your Name:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border-b-2  border-[#ced4da] outline-none"
            />

            <label htmlFor="">Your Email Address:</label>
            <input
              type="email"
              name=""
              id=""
              className="bg-transparent border-b-2  border-[#ced4da] outline-none"
            />
            <label htmlFor="">How can I Help you?:</label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-transparent border-b-2  border-[#ced4da] outline-none h-48 mb-2"
            />
            <button
              type="submit"
              className="flex justify-center items-center  shadow-2xl w-40  my-8 px-4 py-4 bg-hover-color hover:bg-[#363738] text-white"
            >
              <span className="mr-4">Send</span>
              <FaArrowRight />
            </button>
          </form>
          {/* <motion.div
            className="flex md:justify-start justify-center"
            initial={{ y: 90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            
          </motion.div> */}
        </motion.div>
      </section>
    </>
  );
}

export default ContectMe;
