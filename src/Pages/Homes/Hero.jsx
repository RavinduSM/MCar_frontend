import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} className="max-h-xl overflow-hidden" alt="" />
      </div>
      <div>
        <img src={img2} alt="" className="h-2xl" />
      </div>
      <div>
        <img src={img3} alt="" className="h-2xl" />
      </div>
    </Slider>
  );
};

export default Hero;
