import Image from "next/image";
import logo from "../images/logo.png";
import g from "../styles/Glassmorphism.module.css";

const Hero = (props: any): JSX.Element => {
  if (props.isHome == 0) {
    return (
      <section className="relative w-screen md:h-screen">
        <div className="z-0 md:absolute">
          <Image src={props.img} alt="" className={`${g.hero}`} />
        </div>
        <div
          className={`${g.glassHeader} z-10 absolute  bottom-10 left-1/2 transform -translate-x-1/2 backdrop-blur-2xl bg-white p-5 mx-auto max-w-2xl`}
        >
          <Image src={logo} alt="" />
        </div>
      </section>
    );
  } else {
    return (
      <section className="relative w-screen md:h-screen">
        <div className="z-0 md:absolute">
          <Image src={props.img} alt="" className={`${g.hero}`} />
        </div>
        <div className="left-1/2 transform -translate-x-1/2 absolute md:w-1/5 w-1/4 md:top-20 top-5">
          <Image src={logo} alt="" />
        </div>
        <div className="z-10 absolute md:bottom-32 bottom-10 left-1/2 transform -translate-x-1/2 max-w-2xl">
          <h1 className="text-sec font-light text-center">{props.title}</h1>
        </div>
      </section>
    );
  }
};
export default Hero;
