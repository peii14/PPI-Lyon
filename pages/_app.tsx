import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { config as cfg, dom } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
cfg.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("UPDATE");
    window.dispatchEvent(new Event("resize"));
  }, [Component]);

  useEffect(() => {
    let scroll;
    if (typeof window === "undefined") {
      return;
    }
    import("locomotive-scroll").then((LocomotiveScroll) => {
      scroll = new LocomotiveScroll.default(
        {
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
          smoothMobile: false,
          inertia: 0.65,
        },
        2000
      );
    });
    return () => scroll.destroy();
  }, []);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <title>PPI-Lyon</title>
        <meta
          name="keywords"
          content="Perhimpunan Pelajar Indonesia - Lyon. PPI Lyon adalah sebuah platform yang didirikan pada tahun
                    2007 dengan tujuan menghubungkan semua pelajar Indonesia
                    yang sedang menempuh pendidikan di kota Lyon."
        ></meta>
      </Head>

      <Navbar />
      <main data-scroll-container>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default MyApp;
