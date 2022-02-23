import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { config as cfg, dom } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";

cfg.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout data-scroll-container>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
