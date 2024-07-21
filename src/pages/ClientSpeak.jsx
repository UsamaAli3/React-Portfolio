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
      <motion.section className="flex flex-col  justify-center items-center bg-[#939597] h-full pt-16   px-16  ">
        <motion.p
          className="mb-2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-skin-color text-base px-2  text-textColor-color">
            Client Speak
          </span>
        </motion.p>
        <motion.h2
          className="text-3xl mb-14 font-semibold text-white"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Some of my Clients Say
        </motion.h2>
        {/* frtgfg */}
        <motion.div
          className="slider-container m-auto p-auto h-full text-white w-full md:w-[50%]  mb-28"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            <div className="flex flex-col justify-center items-center h-full  text-center ">
              <p className="text-xl mb-4">
                I want to commend for his exceptional work as a frontend
                developer on our project. His dedication and skill have truly
                made a significant impact. Thank you for your hard work and
                commitment!
              </p>
              <div className="shadow-2xl  w-16 h-16 m-auto p-auto rounded-full  bg-no-repeat bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UGQ-dN2dF5ZRRMIvJ4CgfUM4IZ2rld5JOw&s')] "></div>
              <p className="text-4 font-semibold mt-4 ">Awais Ariya</p>
              <p className="text-4  "> Freelance from Pakistan</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full  text-center ">
              <p className="text-xl mb-4">
                I'd like to recognize the outstanding work done on our project.
                The dedication and attention to detail shown have been crucial
                to its success. Thank you for consistently delivering
                high-quality work!
              </p>
              <div className="shadow-2xl  w-16 h-16 m-auto p-auto rounded-full  bg-no-repeat bg-cover bg-center bg-['url(./images/abdul-mateen.jpg')] "></div>
              <p className="text-4 font-semibold mt-4 ">Abdul Mateen</p>
              <p className="text-4  "> Freelance from Pakistan</p>
            </div>
          </Slider>
        </motion.div>
      </motion.section>
    </>
  );
}

export default ClientSpeak;
