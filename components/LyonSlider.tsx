import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCore, {
    Pagination,
    Keyboard,
    Mousewheel,
  } from "swiper";

  SwiperCore.use([Pagination, Keyboard, Mousewheel]);

const LyonSlider = () => {
  return (
    <>
      <Swiper
        // direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        draggable={true}
        cssMode={true}
        loop={false}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
          <SwiperSlide>
              <h1>dor</h1>
          </SwiperSlide>
          <SwiperSlide>
              <h1>dor</h1>
          </SwiperSlide>
      </Swiper>
      <style>{`
          .swiper-container {
            width: 100%;
            height: 20xp;
            
          }
      `}</style>
    </>
  );
};
export default LyonSlider;
