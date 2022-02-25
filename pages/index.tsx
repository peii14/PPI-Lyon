import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import blur1 from "../images/blur1.png";
import Hero from "../components/Hero";
import bg1 from "../images/home/hero1.jpg";
import Glassmorphism from "../components/Glassmorphism";
import s from "../styles/Home.module.css";
import ProkerSwiper from "../components/ProkerSwiper";
import qt from "../images/double-quotes-l.png";
import Link from "next/link";
import GuidelineSection from "../components/GuidelineSection";
import Idham from "../images/member/idham.jpg";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PPI-Lyon</title>
        <meta
          name="keywords"
          content="Perhimpunan Pelajar Indonesia - Lyon. PPI Lyon adalah sebuah platform yang didirikan pada tahun
                    2007 dengan tujuan menghubungkan semua pelajar Indonesia
                    yang sedang menempuh pendidikan di kota Lyon."
        ></meta>
      </Head>
      <div >
        <div className="w-screen overflow-y-hidden">
          <Hero img={bg1} isHome={0} />
        </div>
        <section className=" md:p-14 p-10 max-w-6xl mx-auto">
          <div className=" absolute -left-5 z-0  max-w-xl 2xl:left-52 2xl:max-w-3xl">
            <Image src={blur1} />
          </div>
          {/* data-scroll data-scroll-speed="2" */}

          <div className=" z-10" data-scroll data-scroll-speed="2">
            <Glassmorphism>
              <div className="flex flex-col gap-10 text-primary">
                <h1 className="text-center ">About Us</h1>
                <p className="text-center">
                  PPI Lyon adalah sebuah platform yang didirikan pada tahun 2007
                  dengan tujuan menghubungkan semua pelajar Indonesia yang
                  sedang menempuh pendidikan di kota Lyon.
                </p>
                <div className="grid md:grid-flow-col grid-flow-row gap-20">
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
                        Mengakomodasi seluruh informasi yang dibutuhkan
                        mahasiswa baru di Lyon (administrasi Prancis)
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
        <section className="flex flex-col gap-10 p-20 overflow-hidden mx-auto">
          <h1 className="text-center text-primary">Guideline</h1>
          <div className="grid md:grid-cols-2  max-w-3xl mx-auto gap-20 self-center text-center z-10 ">
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
        <section className="p-10 flex justify-center pb-10 max-w-4xl mx-auto">
          <Glassmorphism>
            <div className="flex flex-col gap-5 items-center justify-center">
              <Image src={qt} height={53} width={60} />
              <div className="flex md:flex-row flex-col gap-10 text-primary">
                <div className="w-11/12 mx-auto">
                  <Image
                    src={Idham}
                    className="rounded-xl"
                    width={500}
                    height={700}
                  />
                </div>
                <div className="max-w4xl md:mt-5 mt--">
                  <h3 className="italic font-medium">Idham Habibie</h3>
                  <h4 className="italic font-normal">Ketua PPI Lyon</h4>
                  <p className="mt-5 text-justify">
                    "Kami ingin PPI Lyon bisa menjadi wadah untuk memaksimalkan
                    potensi dan aspirasi pelajar Indonesia di Lyon, juga
                    membangun ekosistem pelajar yang bersahabat dan
                    berkeluargaan. Goal yang ingin kita capai yaitu PPI Lyon
                    sebagai Role Model bagi perhimpunan pelajar yang lain."
                  </p>
                </div>
              </div>
            </div>
          </Glassmorphism>
        </section>
      </div>
    </>
  );
};

export default Home;
