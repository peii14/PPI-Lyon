import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import blur1 from "../images/blur1.png";
import Hero from "../components/Hero";
import bg1 from "../images/home/hero1.png";
import Glassmorphism from "../components/Glassmorphism";
import s from "../styles/Home.module.css";
import ProkerSwiper from "../components/ProkerSwiper";
import Neuromorphism from "../components/Neuromorphism";
import Animation from "../components/Animation";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PPI-Lyon</title>
        <meta name="keywords" content="Perhimpunan Pelajar Indonesia"></meta>
      </Head>
      <div className="w-screen overflow-y-hidden">
        <Hero img={bg1} />
      </div>
      <div className="absolute  z-0 -left-36 max-w-3xl">
        <Image src={blur1} />
      </div>
      <section className="p-20 z-10">
        <div className=" max-w-6xl w-10/12 flex mx-auto ">
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
      <section className="h-screen text-primary z-0">
        <h1 className="text-center">Program Kerja</h1>
        <div className="py-10">
          <ProkerSwiper />
        </div>
        <div className="grid  grid-cols-2 max-w-3xl mx-auto gap-20 self-center text-center  ">
          <Neuromorphism>
            <Animation status="1" />
            <h3 className='font-medium text-primary'>Keberankatran</h3>
          </Neuromorphism>
          <Neuromorphism>
            <Animation status="2" />
            <h3 className='font-medium text-primary'>Tiba di Lyon</h3>
          </Neuromorphism>
          <Neuromorphism>
            <Animation status="3" />
            <h3 className='font-medium text-primary'>Perancis jangka panjang</h3>
          </Neuromorphism><Neuromorphism>
            <Animation status="4" />
            <h3 className='font-medium text-primary'>Contoh BUdgeting</h3>
          </Neuromorphism>
        </div>
      </section>
    </>
  );
};

export default Home;
