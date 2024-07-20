import "../styles/globals.scss";
import "../styles/variables.scss";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { Livvic } from "next/font/google";
import Header from "@/components/global/header/Header";
import Hamburger from "@/components/global/hamburger/Hamburger";
import Footer from "@/components/global/footer/Footer";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        * {
          font-family: ${livvic.style.fontFamily};
        }
      `}</style>
      <ParallaxProvider>
        <Header />
        <Hamburger />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </>
  );
}
