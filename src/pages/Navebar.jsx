import React from "react";

function Navebar() {
  return (
    <>
      <nav className="flex justify-between items-center px-5 md:px-[4.9rem] h-16 bg-white ">
        <h1 className="text-3xl font-medium">USAMA</h1>
        <div className="flex w-60 justify-between">
          <p>
            <span>||</span>+923407955214
          </p>
          <div>|||</div>
        </div>
      </nav>
    </>
  );
}

export default Navebar;
