import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-primary-color flex flex-col md:flex-row   text-center md:justify-around text-white py-16">
        <div>
          Copyright © 2023{" "}
          <span className="underline hover:no-underline text-hover-color">
            Usama
          </span>
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
