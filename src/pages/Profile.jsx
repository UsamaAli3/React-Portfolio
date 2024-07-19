import React from "react";
import ProfileInterestedSec from "../container/ProfileInterestedSec";
import FilterProjects from "../container/FilterProjects"

function Profile() {
  return (
    <>
      <section className="flex flex-col  justify-center items-center  text-textColor-color h-full pt-16 bg-[#F8F9FA]  px-16 ">
        <p className="mb-2">
          <span className="bg-skin-color text-base px-2">Portfolio</span>
        </p>
        <h2 className="text-3xl mb-14 font-semibold text-center">
          Some of my most recent projects
        </h2>
        <FilterProjects />
      </section>
      <ProfileInterestedSec />
    </>
  );
}

export default Profile;
