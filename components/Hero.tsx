import Image from "next/image";
import logo from "../images/logo.png";

const Hero = (props: any): JSX.Element => {
  return (
    <section className="w-screen h-screen  ">
      <div className='block  '>
        <Image src={props.img} alt="" className="hero" layout='fill'  />
      </div>
      <div className="flex justify-center items-center h-screen">
        <Image src={logo} alt="" className="z-0" />
      </div>
    </section>
  );
};
export default Hero;
