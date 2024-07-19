import React from "react";

function AboutMe() {
  return (
    <>
      <section className="flex flex-col  justify-center items-center  text-textColor-color  h-full pt-16 bg-white  px-16 pb-8 selection:bg-skin-color ">
        <p className="mb-2">
          <span className="bg-skin-color text-base px-2 text-textColor-color">
            About Me
          </span>
        </p>
        <h2 className="text-3xl mb-14 font-semibold">Know Me More</h2>
        <div className=" text-textColor-color">
          <div className=" grow md:flex text-center md:text-start ">
            <div className="">
              <h1 className="text-3xl mb-4">
                Hi, I'm{" "}
                <span className="font-bold border-b-4 border-skin-color">
                  Usama Ali
                </span>
              </h1>
              <p className="w-[90%] text-base mb-4 leading-loose">
                I'm a Web Developer specializing in front end development.
                Experienced with all stages of the development cycle for dynamic
                web projects. Well-versed in numerous programming languages
                including HTML5, JavaScript, CSS, React JS. Strong background in
                project management and customer relations .
              </p>
            </div>
            <div className="grow my-8">
              <div className="w-24 h-24 rounded-full bg-skin-color mb-4 relative m-auto p-auto ">
                <span className="absolute text-[100px] top-[-30px] right-[20px] md:top-[-55px] md:left-2  md:text-[140px]  ">
                  2
                </span>
              </div>
              <div className="text-2xl text-nowrap">
                Years of <span className="font-semibold">Experiance</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full   ">
          <div>
            <h6 className="text-[#8E9A9D]">Name:</h6>
            <p className="font-semibold text-textColor-color">Usama Ali</p>
          </div>
          <div>
            <h6 className="text-[#8E9A9D]">Email:</h6>
            <p className="underline hover:no-underline font-semibold md:flex  text-textColor-color ">
              imusamaali7 <span> @gmail.com</span>
            </p>
          </div>
          <div>
            <h6 className="text-[#8E9A9D]">Date of Birth:</h6>
            <p className="font-semibold text-textColor-color">
              25 August, 1998
            </p>
          </div>
          <div>
            <h6 className="text-[#8E9A9D]">From:</h6>
            <p className="font-semibold text-textColor-color">
              Lahore, Pakistan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
