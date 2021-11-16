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

import "../styles/Home.module.css";
import Image from "next/image";
import piknik from "../images/home/pikinik.png";

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
          <div className="grid grid-flow-col grid-cols-4 items-center p-10 gap-0 w-10/12 max-w-6xl">
            <div className="text-left">
              <h1 className="font-normal">
                Piknik <br />
                <span className="font-light">PPI LYON</span>
              </h1>
            </div>
            <div className="col-span-2">
              <Image src={piknik} alt="" />
            </div>
            <div>
              <p className="text-left">
                1 – 2 bulan berkumpul piknik PPI Lyon. Kegiatan ini bisa diganti
                ke kegiatan yang lebih memacu adrenalin (seperti Hiking, keluar
                kota)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-flow-row">
            <div>
              <h1>DUARR2R</h1>
            </div>
          </div>
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
        .swiper-button-next,
        .swiper-button-prev {
          color: black;
          margin: 0px 100px;
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
