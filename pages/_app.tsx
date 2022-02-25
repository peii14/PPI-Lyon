import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { config as cfg, dom } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
import { useEffect } from "react";
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
      scroll = new LocomotiveScroll.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
      },2000);
    });
    return () => scroll.destroy();
  }, []);
  return (
    <Layout>
      <main data-scroll-container>
        <GlobalStyles />
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
