import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import blur1 from "../images/blur1.png";
import Hero from "../components/Hero";
import bg1 from "../images/home/hero1.png";
import Glassmorphism from "../components/Glassmorphism";
import s from "../styles/Home.module.css";
import ProkerSwiper from "../components/ProkerSwiper";
import qt from "../images/double-quotes-l.png";
import Footer from "../components/Footer";
import Link from "next/link";
import GuidelineSection from "../components/GuidelineSection";

const Home: NextPage = () => {
  const [isHover, setHover] = useState(false);

  return (
    <>
      <Head>
        <title>PPI-Lyon</title>
        <meta name="keywords" content="Perhimpunan Pelajar Indonesia"></meta>
      </Head>
      <div className="w-screen overflow-y-hidden">
        <Hero img={bg1} />
      </div>

      <section className="p-20  max-w-6xl mx-auto ">
        <div className=" absolute -left-5 z-0  max-w-xl 2xl:left-52 2xl:max-w-3xl">
          <Image src={blur1} />
        </div>
        <div className=" z-10 ">
          <Glassmorphism>
            <div className="flex flex-col gap-10 text-primary">
              <h1 className="text-center ">About Us</h1>
              <p className="text-center">
                PPI Lyon adalah sebuah platform yang didirikan pada tahun 2007
                dengan tujuan menghubungkan semua pelajar Indonesia yang sedang
                menempuh pendidikan di kota Lyon.
              </p>
              <div className="grid grid-flow-col gap-20">
                <div className="">
                  <h3 className="text-center">Visi</h3>
                  <ul className={s.listed}>
                    <li>
                      Mewujudkan Perhimpunan Pelajar Indonesia Lyon (PPI Lyon)
                      sebagai wadah untuk memaksimalkan potensi dan aspirasi
                      pelajar Indonesia di Lyon
                    </li>
                    <li>
                      Membangun ekosistem pelajar yang bersahabat dan
                      kekeluargaan
                    </li>
                    <li>
                      Menjadikan PPI Lyon menjadi role model bagi perhimpunan
                      yang lain
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-center">Misi</h3>
                  <ul className={s.listed}>
                    <li>
                      Mengakomodasi seluruh informasi yang dibutuhkan mahasiswa
                      baru di Lyon (administrasi Prancis)
                    </li>
                    <li>
                      Memfasilitasi mahasiswa untuk saling memotivasi demi
                      keberlangsungan hidup di Lyon
                    </li>
                    <li>
                      Memperkenalkan kota Lyon ke Indonesia sebagai kota ke-3
                      terbesar di Prancis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Glassmorphism>
        </div>
      </section>
      <section className=" text-primary z-0">
        <h1 className="text-center">Program Kerja</h1>
        <div className="">
          <ProkerSwiper />
        </div>
      </section>
      <section className="flex flex-col gap-10 p-20 overflow-hidden  mx-auto">
        <h1 className="text-center text-primary">Guideline</h1>
        <div className="grid  grid-cols-2 max-w-3xl mx-auto gap-20 self-center text-center z-10 ">
          <Link href="/Keberangkatan">
            <a>
              <GuidelineSection status="1" />
            </a>
          </Link>
          <Link href="/TibadiLyon">
            <a>
              <GuidelineSection status="2" />
            </a>
          </Link>
          <Link href="/PerancisJangkaPanjang">
            <a>
              <GuidelineSection status="3" />
            </a>
          </Link>
          <Link href="/Budgeting">
            <a>
              <GuidelineSection status="4" />
            </a>
          </Link>
        </div>
        <div className=" absolute z-0 overflow-hidden md:right-14 2xl:right-52 3xl:mr-20 mr-0">
          <Image src={blur1} alt="" width={600} height={700} />
        </div>
      </section>
      <section className=" flex justify-center p-10">
        <Glassmorphism>
          <div className="flex flex-col gap-10 items-center justify-center">
            <Image src={qt} />
            <div className="flex flex-row gap-5 text-primary">
              <h3 className="italic font-normal">Idham Habibie</h3>
            </div>
          </div>
        </Glassmorphism>
      </section>
      <Footer />
    </>
  );
};

export default Home;
