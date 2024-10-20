import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function ContectMe() {
  const formOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "509aed67-2c8a-4245-94e1-5e5f6c613967");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Successfull!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row px-8 md:px-24 bg-skin-color gap-x-28 text-textColor-color size-full md:text-start pt-[4rem]">
        <motion.div
          className="grow"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
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
          <div className="w-52 md:mt-12 md:m-0 md-p-0 ">
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
        </motion.div>

        <motion.div
          className="grow text-textColor-color w-full pt-16 md:pt-0 text-nowrap"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/*There is a problem when we use md:text-nowrap it is effecting on ipod size screen*/}
          <h1 className=" text-4xl text-wrap md:text-nowrap  mb-12 font-semibold">
            Estimate your Project?
          </h1>
          <form
            onSubmit={formOnSubmit}
            className="flex flex-col gap-y-4 text-[16px] md:w-80 text-start w-full text-nowrap"
          >
            <label htmlFor="" className="pt-2">
              What is Your Name:
            </label>
            <input
              type="text"
              name="name"
              required
              id=""
              className="bg-transparent border-b-2  border-[#ced4da] outline-none"
            />

            <label htmlFor="">Your Email Address:</label>
            <input
              type="email"
              name="email"
              required
              id=""
              className="bg-transparent border-b-2  border-[#ced4da] outline-none"
            />
            <label htmlFor="">How can I Help you?:</label>
            <textarea
              type="text"
              name="text"
              required
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
        </motion.div>
      </section>
    </>
  );
}

export default ContectMe;
