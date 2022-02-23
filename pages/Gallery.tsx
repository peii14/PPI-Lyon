import Image from "next/image";
import Hero from "../components/Hero";
import hero from "../images/gallery/lyon-panorama.jpg";
import sum2 from "../images/gallery/sum2.jpg";
import sum1 from "../images/gallery/sum1.png";
import sum3 from "../images/gallery/sum3.jpg";
import win1 from "../images/gallery/win1.jpg";
import win2 from "../images/gallery/win2.jpg";
import acc1 from "../images/gallery/acc1.jpg";
import acc2 from "../images/gallery/acc2.jpg";
import acc3 from "../images/gallery/acc3.jpg";
import acc4 from "../images/gallery/acc4.jpg";
import peng1 from "../images/gallery/peng1.jpg";
import k2019 from "../images/gallery/2019.jpg";
import k20192 from "../images/gallery/2019-2.jpg";
import tetedor from "../images/gallery/tetedor.jpg";
import win4 from "../images/gallery/win4.jpg";
import acc6 from "../images/gallery/acc6.jpg";
import acc8 from "../images/gallery/acc8.jpg";
import acc9 from "../images/gallery/acc9.jpg";
import winn from "../images/gallery/winn.png";
import winn2 from "../images/gallery/winn2.png";
import winn3 from "../images/gallery/winn3.png";
import acc5 from "../images/gallery/acc5.jpg";
import acc7 from "../images/gallery/acc7.jpg";
import ski from "../images/gallery/ski.jpg";
import nar from "../images/gallery/nar1.jpeg";
import salwa from "../images/gallery/salwa.jpeg";
import naresha from "../images/gallery/naresha.jpeg";
import gilang from "../images/gallery/gilang.jpeg";
import last from "../images/gallery/last.jpeg";
import React, { useState, useEffect } from "react";
const Gallery = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  return (
    <div className="">
      <div className="w-screen overflow-y-hidden">
        <Hero img={hero} title={"Gallery"} isHome={1} />
      </div>
      <div></div>
      <div className="layout grid md:grid-cols-3 grid-cols-1 py-20 px-10 md:px-0 overflow-y-hidden items-center gap-5 ">
        <div className="md:col-span-2 md:row-span-2">
          <Image src={sum1} />
        </div>
        <Image src={sum2} />
        <Image src={sum3} />

        <Image src={win1} />
        <Image src={win2} />
        <Image src={acc2} />

        <div className="md:col-span-2 md:row-span-2">
          <Image src={acc1} />
        </div>
        <Image src={k20192} />

        <Image src={acc3} />
        <Image src={acc4} />
        <div className="md:col-span-2 md:row-span-2">
          <Image src={k2019} />
        </div>
        <Image src={tetedor} />
        <Image src={acc6} />
        <Image src={acc8} />
        <Image src={acc9} />

        <div className="md:row-span-4 md:col-span-2">
          <Image src={winn2} />
        </div>
        <div className="row-span-2">
          <Image src={winn} priority />
        </div>
        <div className="row-span-2">
          <Image src={winn3} />
        </div>
        <Image src={acc5} />
        <Image src={acc7} />
        <Image src={ski} />

        <div className="md:col-span-2 md:row-span-2">
          <Image src={win4} />
        </div>
        <div className="md:row-span-1">
          <Image src={nar} />
        </div>
        <Image src={gilang} />
        
        <div className="md:-mt-10">
          <Image src={naresha} />
        </div>
        <div>
          <Image src={salwa} />
        </div>
        <div>
          <Image src={last} />
        </div>
        {/* <div className="col-span-3 row-span-1">
            <Image src={peng1} layout='responsive'/>
        </div> NGAUR */}
      </div>
    </div>
  );
};
export default Gallery;
