import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
      <div className="bg-primary-color flex flex-col md:flex-row   text-center md:justify-around text-white py-16">
        <div>
          Copyright © 2023{" "}
          <Link to="home" smooth>
            <span className="underline hover:no-underline text-hover-color cursor-pointer">
              Usama
            </span>
          </Link>
          . All Rights Reserved.
        </div>
        <div>
          Designed by
          <span className="underline hover:no-underline text-hover-color">
            {" "}
            Harnish Design
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
