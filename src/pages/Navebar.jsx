import React from "react";
import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import Hamburger from "hamburger-react";
import Menu from "../container/Menu";
import { Link } from "react-scroll";

function Navebar() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [pageOffY, setPageOffY] = useState(0);
  const [color, setColor] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    setColor(!color);
    setOpen(!isOpen);
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
        <Link to="home" smooth className="text-3xl font-medium cursor-pointer ">
          USAMA
        </Link>
        <div className="flex w-60 justify-end md:justify-between items-center">
          <p className="flex justify-center items-baseline ">
            <span className="mr-2 ">
              <FaPhone />
            </span>
            +923187411532
          </p>

          <button
            className={` z-30 pl-6 md:pl-0 ${
              color ? "text-white" : "text-skin-color"
            }`}
            onClick={handleToggle}
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <Menu
          className={isActive ? "block" : "hidden "}
          handel={handleToggle}
        /> 
      </nav>
    </>
  );
}

export default Navebar;
