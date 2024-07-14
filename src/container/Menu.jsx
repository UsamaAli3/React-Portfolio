import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="absolute top-0 left-0 hidden">
      <ul className="flex flex-col w-[100%] h-[100vh] leading-relaxed text-3xl text-white bg-gray-800 fixed z-20 justify-center items-center bg-opacity-65">
        <li>
          {" "}
          <Link
            className="focus:text-hover-color hover:text-hover-color"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="focus:text-hover-color hover:text-hover-color"
            to="/about-me"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            className="focus:text-hover-color hover:text-hover-color"
            to="/what-i-do"
          >
            What I Do
          </Link>
        </li>
        <li>
          <Link
            className="focus:text-hover-color hover:text-hover-color"
            to="/resume"
          >
            resume
          </Link>
        </li>
        <li>
          <Link
            className="focus:text-hover-color hover:text-hover-color"
            to="/profile"
          >
            profile
          </Link>
        </li>
        <li>
          <Link
            className="focus:text-hover-color hover:text-hover-color"
            to="/client-speak"
          >
            client-speak
          </Link>
        </li>
        <li>
          <Link
            className="focus:text-hover-color hover:text-hover-color"
            to="/contect-me"
          >
            contect-me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
