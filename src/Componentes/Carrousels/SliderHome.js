import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// import img
import Carouselimg from "../../assets/img/Sliderhome.jpg";

export default function SliderHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full -mt-1 md:mt-2  h-52 md:h-full  "
      >
        <SwiperSlide>
       
          <img 
            src="https://res.cloudinary.com/dqaqts0kn/image/upload/v1665502005/PAGINA%20WEB/fbmivdbdv2p5sixxmsre.jpg"
            alt="banner"
            className="w-full h-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dqaqts0kn/image/upload/v1665501998/PAGINA%20WEB/wuyqgzx6t2lql3sbontk.jpg"
            alt="banner"
            className="w-full h-full "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
