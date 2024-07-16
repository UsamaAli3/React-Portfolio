import React from "react";
import { Link } from "react-scroll";

function Menu({ className }) {
  return (
    <div className={`absolute top-0 left-0  ${className}`}>
      <ul className="flex flex-col w-[100%] h-[100vh] leading-relaxed text-2xl text-white bg-black fixed z-20 justify-center items-center bg-opacity-65">
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
        <li>
          <Link
            to="resume"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="focus:text-hover-color hover:text-hover-color"
          >
            {" "}
            Resume
          </Link>
        </li><li>
          <Link
            to="profile"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="focus:text-hover-color hover:text-hover-color"
          >
            {" "}
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="client-speak"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="focus:text-hover-color hover:text-hover-color"
          >
            {" "}
            Client Speak
          </Link>
        </li>
        <li>
          <Link
            to="contect-me"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="focus:text-hover-color hover:text-hover-color"
          >
            {" "}
            Contect Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
