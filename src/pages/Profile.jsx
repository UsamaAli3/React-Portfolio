import React from "react";
import ProfileInterestedSec from "../container/ProfileInterestedSec";

function Profile() {
  return (
    <>
      <section className="flex flex-col  justify-center items-center  text-textColor-color h-full pt-16 bg-[#F8F9FA]  px-16 ">
        <p className="mb-2">
          <span className="bg-skin-color text-base px-2">Profile</span>
        </p>
        <h2 className="text-3xl mb-14 font-semibold">
          Some of my most recent projects
        </h2>
      </section>
      <ProfileInterestedSec />
    </>
  );
}

export default Profile;
