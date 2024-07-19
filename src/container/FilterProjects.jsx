import React, { useState } from "react";
import { GoProjectSymlink } from "react-icons/go";

const FilterableDivs = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const filterSelection = (c) => {
    const divs = document.getElementsByClassName("filterDiv");
    for (let i = 0; i < divs.length; i++) {
      const classNames = divs[i].className.split(" ");
      if (c === "all" || classNames.indexOf(c) > -1) {
        divs[i].classList.add("block");
        divs[i].classList.remove("hidden");
      } else {
        divs[i].classList.add("hidden");
        divs[i].classList.remove("block");
      }
    }
  };

  // Execute filterSelection whenever filter changes
  React.useEffect(() => {
    filterSelection(filter);
  }, [filter]);

  return (
    <div className="p-4 flex flex-col justify-center items-center ">
      <div className="flex md:space-x-2 mb-4 flex-wrap md:flex-nowrap justify-center w-80 md:w-ful">
        <button
          className={` ${
            filter === "all" ? "active" : ""
          } hover:bg-[#F8F9FA] text-gray-400 px-4 py-2 bg-[#F8F9FA] hover:text-skin-color rounded-none focus:border-skin-color focus:border-b-2 shadow-none font-semibold ease-in-out `}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "cars" ? "active" : ""
          } text-gray-400 px-4 py-2 bg-[#F8F9FA] hover:text-skin-color rounded-none focus:border-skin-color focus:border-b-2 shadow-none font-semibold ease-in-out `}
          onClick={() => handleFilterClick("cars")}
        >
          Project
        </button>
        <button
          className={` ${
            filter === "animals" ? "active" : ""
          } text-gray-400 px-4 py-2 bg-[#F8F9FA] hover:text-skin-color rounded-none focus:border-skin-color focus:border-b-2 shadow-none font-semibold ease-in-out `}
          onClick={() => handleFilterClick("animals")}
        >
          Project
        </button>
        <button
          className={` ${
            filter === "fruits" ? "active" : ""
          } text-gray-400 px-4 py-2 bg-[#F8F9FA] hover:text-skin-color rounded-none focus:border-skin-color focus:border-b-2 shadow-none font-semibold ease-in-out `}
          onClick={() => handleFilterClick("fruits")}
        >
          Project
        </button>
        <button
          className={` ${
            filter === "colors" ? "active" : ""
          } text-gray-400 px-4 py-2 bg-[#F8F9FA] hover:text-skin-color rounded-none focus:border-skin-color focus:border-b-2 shadow-none font-semibold ease-in-out `}
          onClick={() => handleFilterClick("colors")}
        >
          Project
        </button>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  place-content-center place-items-center">
        <div
          className={`filterDiv cars ${
            filter === "cars" || filter === "all" ? "block" : "hidden"
          } border-4 overflow-hidden relative`}
        >
          <div className="size-72 bg-cover hover:scale-110 ease-in-out text-white  bg-[url('https://images.unsplash.com/photo-1721265250302-c02ea398a73c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D')]">
            {/* <div className="hover:bg-skin-color size-full flex items-center hover:opacity-80 text-4xl font-semibold justify-center absolute top-0 text-white ">
              <GoProjectSymlink />
            </div> */}
          </div>

          {/* <img className="size-[300px] object-cover hover:scale-110 ease-in-out " src="" alt="" /> */}
        </div>

        <div
          className={`filterDiv cars ${
            filter === "cars" || filter === "all" ? "block" : "hidden"
          } bg-[rgba(0, 255, 0, 0.3)] overflow-hidden`}
        >
          <img
            className="size-[300px] object-cover hover:scale-110 "
            src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div
          className={`filterDiv colors ${
            filter === "colors" || filter === "all" ? "block" : "hidden"
          } overflow-hidden`}
        >
          <img
            className="size-[300px] object-cover hover:scale-110"
            src="https://images.unsplash.com/photo-1721205834757-c69d5def190a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div
          className={`filterDiv colors ${
            filter === "colors" || filter === "all" ? "block" : "hidden"
          } overflow-hidden`}
        >
          <img
            className="size-[300px] object-cover hover:scale-110"
            src="https://images.unsplash.com/photo-1700915181126-1f49f6bb2c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHllbGxvdyUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div
          className={`filterDiv animals ${
            filter === "animals" || filter === "all" ? "block" : "hidden"
          } overflow-hidden`}
        >
          <img
            className="size-[300px] object-cover hover:scale-110"
            src="https://images.unsplash.com/photo-1660224319990-8b2633ebc50c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHllbGxvdyUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>

        <div
          className={`filterDiv fruits ${
            filter === "fruits" || filter === "all" ? "block" : "hidden"
          } overflow-hidden`}
        >
          <img
            className="size-[300px] object-cover hover:scale-110"
            src="https://plus.unsplash.com/premium_photo-1670375648728-329e60fb8191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHx5ZWxsb3clMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FilterableDivs;
