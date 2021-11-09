import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from '../components/Hero'
import bg1 from '../images/home/hero1.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PPI-Lyon</title>
        <meta name="keywords" content="Perhimpunan Pelajar Indonesia"></meta>
      </Head>
      <div className="w-screen">
        <Hero img={bg1} />
       
      </div>
      <div className='text-black'>
        <h1>duar</h1>
        <h1>duar</h1>
        <h1>duar</h1>
        <h1>duar</h1>
        <h1>duar</h1>

      </div>
      
      
    </>
  );
};

export default Home;
