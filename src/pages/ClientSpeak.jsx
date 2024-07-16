import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientSpeak() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextarrow: <div>|||</div>,
    prevarrow: <div>|||</div>,
  };
  return (
    <>
      <section className="flex flex-col  justify-center items-center  text-textColor-color h-full pt-16 bg-[#F8F9FA]  px-16 ">
        <p className="mb-2">
          <span className="bg-skin-color text-base px-2">Client Speak</span>
        </p>
        <h2 className="text-3xl mb-14 font-semibold">
          What Some of my Clients Say
        </h2>
      </section>
      {/* frtgfg */}
      
        <div className="slider-container m-auto p-auto">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
       
    </>
  );
}

export default ClientSpeak;
