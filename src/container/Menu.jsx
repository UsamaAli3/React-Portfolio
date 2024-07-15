import React from "react";
import { Link } from "react-scroll";

function Menu({ className }) {
  return (
    <div className={`absolute top-0 left-0  ${className}`}>
      <ul className="flex flex-col w-[100%] h-[100vh] leading-relaxed text-3xl text-white bg-gray-800 fixed z-20 justify-center items-center bg-opacity-65">
        <li>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="focus:text-hover-color hover:text-hover-color"
          >
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-me"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="focus:text-hover-color hover:text-hover-color"
          >
            {" "}
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="what-i-do"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="focus:text-hover-color hover:text-hover-color"
          >
            {" "}
            What I Do
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
