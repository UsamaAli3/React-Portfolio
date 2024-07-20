import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function ClientSpeak() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextarrow: <div>|||</div>,
    prevarrow: <div>|||</div>,
  };
  return (
    <>
      <motion.section
        className="flex flex-col  justify-center items-center bg-[#939597] h-full pt-16 bg-skin-color  px-16 "
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="mb-2">
          <span className="bg-skin-color text-base px-2  text-textColor-color">
            Client Speak
          </span>
        </p>
        <h2 className="text-3xl mb-14 font-semibold text-white">
          What Some of my Clients Say
        </h2>
        {/* frtgfg */}
        <div className="slider-container m-auto p-auto h-full text-white w-full md:w-[50%]  mb-28">
          <Slider {...settings}>
            <div className="flex flex-col justify-center items-center h-full  text-center ">
              <p className="text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus similique mollitia recusandae pariatur magnam! Quod
                facere excepturi id, animi minima facilis magni illum nisi
                ratione nihil saepe eligendi rerum accusantium?
              </p>
              <div className="shadow-2xl  w-16 h-16 m-auto p-auto rounded-full  bg-no-repeat bg-cover bg-center bg-[url('https://portfolio-project-ochre.vercel.app/projects-img/web%20profile%20(2).jpg')] "></div>
              <p className="text-4 font-semibold mt-4 ">USAMA ALI</p>
              <p className="text-4  "> Freelance from USA</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full  text-center ">
              <p className="text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus similique mollitia recusandae pariatur magnam! Quod
                facere excepturi id, animi minima facilis magni illum nisi
                ratione nihil saepe eligendi rerum accusantium?
              </p>
              <div className="shadow-2xl  w-16 h-16 m-auto p-auto rounded-full  bg-no-repeat bg-cover bg-center bg-[url('https://portfolio-project-ochre.vercel.app/projects-img/web%20profile%20(2).jpg')] "></div>
              <p className="text-4 font-semibold mt-4 ">USAMA ALI</p>
              <p className="text-4  "> Freelance from USA</p>
            </div>
          </Slider>
        </div>
      </motion.section>
    </>
  );
}

export default ClientSpeak;
