import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Keyboard,
  Mousewheel,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import piknik from "../images/home/pikinik.png";
import leJour from "../images/home/leJour.png";
import "../styles/Home.module.css";
import ProkerContent from "./ProkerContent";

SwiperCore.use([Pagination, Navigation, Keyboard, Mousewheel]);

const ProkerSwiper = () => {
  return (
    <>
      <Swiper
        // pagination={{
        //   type: "progressbar",
        // }}
        cssMode={true}
        navigation={true}
        loop={false}
        mousewheel={true}
        keyboard={true}
        className="mySwiper "
      >
        <SwiperSlide>
          <ProkerContent
            img={piknik}
            t1="Piknik"
            t2="PPI LYON"
            content="1 – 2 bulan berkumpul piknik PPI Lyon. Kegiatan ini bisa diganti ke kegiatan yang lebih memacu adrenalin (seperti Hiking, keluar kota)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProkerContent
            img={leJour}
            t1="Le Jour"
            t2="en français"
            content="Mengajak pelajar PPI Lyon untuk turut aktif berbicara terkait dengan issue di Indonesia dengan menggunakan Bahasa Prancis."
          />
        </SwiperSlide>
      </Swiper>
      <style>{`
        .swiper-container {
          width: 100%;
          height: 100%;
          
        }

        .swiper-slide {
          text-align: center;
          
          font-size: 18px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }

        .swiper-container {
          margin-left: auto;
          margin-right: auto;
        }
        @media screen and (max-width:3000px){
          .swiper-button-next,
          .swiper-button-prev {
            color: black;
            margin: 0px 300px;
        }
        @media screen and (max-width:1441px){
          .swiper-button-next,
          .swiper-button-prev {
            color: black;
            margin: 0px 50px;
          }
        }

        @media screen and (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            margin: 0px;
          }
        }
        .swiper-pagination-progressbar-fill {
          background: #282828 !important;
          height:2px !important;
        }
        .swiper-pagination-progressbar {
            // background: #282828 !important;
        }
        .swiper-horizontal > .swiper-pagination-progressbar,
        .swiper-pagination-progressbar.swiper-pagination-horizontal,
        .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
        .swiper-vertical
          > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
              
        }
      `}</style>
    </>
  );
};
export default ProkerSwiper;
