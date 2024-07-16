import React from "react";
import { Link } from "react-router-dom";
function ContectMe() {
  return (
    <>
      <section className="flex flex-col md:flex-row px-24 gap-x-28 text-textColor-color text-center md:text-start   ">
        <div className="grow ">
          <h1 className="text-nowrap text-4xl  mb-12 font-semibold">
            Let's get in touch
          </h1>
          <p className="text-skin-color  leading-loose mb-12 text-[21px]">
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up.
          </p>
          <h3 className="text-[21px] mb-2">Living In:</h3>
          <p className=" mb-4 text-[18px]">
            30 Shacham street, Los Angeles, USA.
          </p>
          <h3 className="text-[21px] mb-2">Call:</h3>
          <p className=" mb-4 text-[18px]">(+060) 444 434 444</p>
          <div className="w-52 md:mt-12 m-auto p-auto md:m-0 md-p-0 ">
            <ul className="flex justify-between ">
              <li>
                <Link>|||</Link>
              </li>
              <li>
                <Link>|||</Link>
              </li>
              <li>
                <Link>|||</Link>
              </li>
              <li>
                <Link>|||</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grow text-textColor-color w-full text-nowrap ">
          <h1 className=" text-4xl  mb-12 font-semibold">
            Estimate your Project?
          </h1>
          <div className="flex flex-col gap-y-6 text-[16px] md:w-80 text-start w-full text-nowrap">
            <label htmlFor="" className="pt-12">
              What is Your Name:
            </label>
            <input type="text" name="" id="" className="bg-transparent border-b-2  border- outline-none" />

            <label htmlFor="">Your Email Address:</label>
            <input type="email" name="" id="" className="bg-transparent border-b-2  border- outline-none"/>
            <label htmlFor="">How can I Help you?:</label>
            <input type="text" name="" id="" className="bg-transparent border-b-2  border- outline-none h-48 mb-2" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContectMe;
