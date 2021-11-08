import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import bg1 from '../images/home/hero1.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PPI-Lyon</title>
        <meta name="keywords" content="Perhimpunan Pelajar Indonesia"></meta>
      </Head>
      <div className="flex w-screen">
        <div className='h-screen'>
          <img src={bg1} alt='' />
        </div>
      </div>
    </>
  );
};

export default Home;
