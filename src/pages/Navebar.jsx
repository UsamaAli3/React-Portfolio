import React from "react";
import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import Hamburger from "hamburger-react";
import Menu from "../container/Menu";

function Navebar() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [pageOffY, setPageOffY] = useState(0);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const textColorClass = pageOffY >= 40 ? "bg-white" : "bg-transparent";
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageOffY(window.scrollY);
    });
  });

  return (
    <>
      <nav
        className={`flex justify-between items-center px-5 md:px-[4.9rem] h-[8.72] w-full fixed z-20 text-skin-color ${textColorClass}`}
      >
        <h1 className="text-3xl font-medium ">USAMA</h1>
        <div className="flex w-60 justify-between items-center">
          <p className="flex justify-center items-baseline">
            <span className="mr-2 ">
              <FaPhone />
            </span>
            +923407955214
          </p>

          <button className=" text-skin-color z-30 " onClick={handleToggle}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <Menu className={isActive ? "block" : "hidden "} />
      </nav>
    </>
  );
}

export default Navebar;
