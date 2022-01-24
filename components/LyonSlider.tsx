import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCore, {
  Pagination,
  Navigation,
  Keyboard,
  Mousewheel,
} from "swiper";

SwiperCore.use([Pagination, Navigation, Keyboard, Mousewheel]);

import bellecour from "../images/PerancisJangkaPanjang/bellecour.png";
import hoteldeville from "../images/PerancisJangkaPanjang/hoteldeville.png";
import fouviere from "../images/PerancisJangkaPanjang/fouviere.png";
import lestraboules from "../images/PerancisJangkaPanjang/lestraboules.png";
import vieuxlyon from "../images/PerancisJangkaPanjang/vieuxlyon.png";
import romain from "../images/PerancisJangkaPanjang/romain.png";
import bouchon from "../images/PerancisJangkaPanjang/bouchon.png";
import quaiderhone from "../images/PerancisJangkaPanjang/quaiderhone.png";
import parc from "../images/PerancisJangkaPanjang/parc.png";
import ilebarbe from "../images/PerancisJangkaPanjang/ilebarbe.png";
import rue from '../images/PerancisJangkaPanjang/rue.png'
import partdieu from "../images/PerancisJangkaPanjang/partdieu.png";
import centre from "../images/PerancisJangkaPanjang/centre.png";
import confluences from "../images/PerancisJangkaPanjang/confluences.png";
import beauxart from "../images/PerancisJangkaPanjang/beauxart.png";
import LyonSliderContent from "./LyonSliderContent";

const LyonSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        draggable={true}
        cssMode={true}
        loop={false}
        mousewheel={true}
        keyboard={true}
        spaceBetween={100}
        className="mySwiper"
      >
        <SwiperSlide>
          <LyonSliderContent
            img={bellecour}
            title={"La Place Bellecour"}
            content={`Lahan besar di tengah kota
              Lyon yang berada di antara
              stasiun Perrache dan Hôtel
              de Ville di mana kamu bisa
              melihat patung Louis XIV
              dan duduk-duduk untuk
              menikmati pemandangan
              pusat kota dan bangunan
              kuno Lyon.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={hoteldeville}
            title={"Hôtel de Ville"}
            content={`Kantor pusat pemerintah Lyon yang dikelilingi banyak pilihan restoran, bar, kafe dan diskotik. Ada air mancur besar di depan Hôtel de Ville untuk duduk santai. Bersampingan juga dengan seni kuno Musée des Beaux-Arts.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={fouviere}
            title={"Basilique de Fourvière"}
            content={`Gereja Katolik di atas bukit Fourvière yang dibangun di 1872. Menawarkan interior mewah dan arsitektur gereja kuno. Dapat diakses dengan funikular dari Vieux Lyon dan menawarkan pemandangan Lyon dari atas bukit.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={lestraboules}
            title={"Les Traboules"}
            content={`Jaringan lorong-lorong kuno satu Lyon yang dibangun di antara banyak bangunan-bangunan tua. Dulunya digunakan untuk akses cepat dari satu jalan ke jalan yang lain. Alamat dapat diakses di: patrimoine-lyon.org/accueil/traboules`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={vieuxlyon}
            title={"Vieux Lyon"}
            content={`Kota tua Lyon di kaki bukit Fourvière. Terdapat jalan kuno, toko cindermata dan restoran khas Lyon yang disebut Boouchon Lyonnais. Vieux Lyon dapat diakses dengan métro dari Bellecour dan tempat pemberhentian funikular ke Fourvière.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={romain}
            title={"Théâtres-Romain"}
            content={`Teater kuno dengan gaya Romawi di atas Fourvière. Ada museum sejarah budaya Romawii dengan peninggalan antik yang terletak di bawah tanah. Kadang digunakan untuk konser kecil. Diakses dengan Funikular dari Vieux Lyon.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={bouchon}
            title={"Bouchon Lyonnais"}
            content={`Restoran khas Lyon yang menawarkan masakan lokal
            Lyon. Biasanya di Vieux Lyon. Situs resmi dengan
            daftar restoran diakses di:
            lesbouchonslyonnais.org`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={rue}
            title={"Rue de la République"}
            content={`Jalan besar utama yang
            menghubungkan Hôtel de Ville dan Bellecour. Terdapat
            banyak restoran, kafe, toko
            untuk belanja dan bioskop.
            Cocok untuk bersantai.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={quaiderhone}
            title={"Quai du Rhône"}
            content={`Pesisir sungai Rhône yang
            dapat diakses dari
            Bellecour. Tempat untuk
            piknik, santai dan jogging. Ada kolam renang outdoor
            dibuka untuk umum.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={parc}
            title={"Parc de la Tête d'Or"}
            content={`Taman besar di Lyon yang
            buka sepanjang tahun di arrondissement 6. Ada
            kebun binatang kecil berisi
            jerapah, burung dsb. Cocok
            untuk piknik dan olah raga.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={ilebarbe}
            title={"Île Barbe"}
            content={`Pulau kecil di sungai Saône
            yang menawarkan tempat
            santai dan piknik yang sepi
            di Lyon karena cukup jauh
            dari pusat kota. Banyak olahraga air di musim panas.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={partdieu}
            title={"La Part-Dieu"}
            content={`Pusat perbelanjaan dengan banyak toko. Berhadapan
            dengan stasiun Part-Dieu
            dan perpustakaan umum Bibliothèque Municipale
            Lyon. `}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={centre}
            title={`Centre Commercial Confluence `}
            content={`Pusat perbelanjaan dengan
            suasana outdoor. Dapat
            bersantai di tepi sungai
            Saône. Dekat dengan Musée
            de Confluences dan diakses
            dengan tram T1.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={confluences}
            title={`Musée des Confluences`}
            content={`Museum dengan arsitektur modern. Terdapat seni kuno sampai modern, serta sejarah Lyon.
            Ada tempat untuk santai di ujung Saône. Gratis untuk mahasiswa.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LyonSliderContent
            img={beauxart}
            title={`Musée des Beaux-Art`}
            content={`Museum seni kuno di
            samping Hôtel de Ville.
            Menyimpan banyak tipe
            lukisan dan patung kuno
            dari Prancis dan sekitarnya.
            Harga tiket dari 4€.`}
          />
        </SwiperSlide>
      </Swiper>
      <style>{`
          .swiper-container {
            width: 100%;
            height: 100%;
            
          }
          .swiper-slide {
            font-size: 16px;
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

          @media screen and (min-width:1441px){
            .swiper-button-next,
            .swiper-button-prev {
              color: #282828;
              margin: 0px 0px;
            }
          }
  
          @media screen and (min-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              margin: 0px;
              color: #282828;
            }
          }
          @media screen and (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              visibility:hidden;
              margin: -20px;
              color: #282828;
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
          .swiper-pagination-bullet-active{
            background-color: #282828;
          }
      `}</style>
    </>
  );
};
export default LyonSlider;
