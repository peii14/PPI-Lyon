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
import penyambutan from "../images/home/penyambutan.png";
import hobby from "../images/home/hobby.png";
import festival from "../images/home/festival.png";
import "../styles/Home.module.css";
import ProkerContent from "./ProkerContent";

SwiperCore.use([Pagination, Navigation, Keyboard, Mousewheel]);

const ProkerSwiper = () => {
  return (
    <>
      <Swiper
        draggable={true}
        cssMode={true}
        navigation={true}
        loop={false}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
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
        <SwiperSlide>
          <ProkerContent
            img={penyambutan}
            t1="Penyambutan"
            t2="Mahasiswa Baru"
            content="Pengenalan kota Lyon, administrasi Lyon, dan perkuliahan-perkuliahan Lyon agar kita bisa survive di Lyon Bersama-sama."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProkerContent
            img={hobby}
            t1="Penyaluran"
            t2="Hobby"
            content="Bermain bulu tangkis, basket, tennis, dan futsal bersama anggota lainnya untuk melepas penat."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProkerContent
            img={festival}
            t1="Festival Budaya"
            t2="Indonesia"
            content="Memperkenalkan warisan leluhur budaya Indonesia ke warga Lyon (1 tahun sekali)"
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
            margin: 0px 100px;
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
