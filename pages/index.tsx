import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import blur1 from "../images/blur1.png"
import Hero from "../components/Hero";
import bg1 from "../images/home/hero1.png";
import Glassmorphism from "../components/Glassmorphism";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PPI-Lyon</title>
        <meta name="keywords" content="Perhimpunan Pelajar Indonesia"></meta>
      </Head>
      <div className="w-screen overflow-y-hidden">
        <Hero img={bg1} />
        <div className='absolute'>
          <Image src={blur1} />
        </div>
        <div className="w-2/3 flex mx-auto ">
          <Glassmorphism>
            <div className='flex flex-col gap-10'>  
              <h1 className='text-center'>About Us</h1>
              <p className='text-center'>PPI Lyon adalah sebuah platform yang didirikan pada tahun 2007 dengan tujuan menghubungkan semua pelajar Indonesia yang sedang menempuh pendidikan di kota Lyon.</p>
            </div>
          </Glassmorphism>
        </div>
      </div>
    </>
  );
};


export default Home;
