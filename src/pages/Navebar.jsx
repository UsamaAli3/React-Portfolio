import React from "react";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import Hamburger from "hamburger-react";
import Menu from "../container/Menu";

function Navebar() {
  const [isOpen, setOpen] = useState(false);
  const [color, setColor] = useState()
  return (
    <>
      <nav className="flex justify-between items-center px-5 md:px-[4.9rem] h-16 bg-white w-full fixed z-20 text-skin-color " >
        <h1 className="text-3xl font-medium ">USAMA</h1>
        <div className="flex w-60 justify-between items-center">
          <p className="flex justify-center items-baseline">
            <span className="mr-2 ">
              <FaPhone />
            </span>
            +923407955214
          </p>
          <div className=" text-skin-color z-30 ">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <Menu />
      </nav>
    </>
  );
}

export default Navebar;
