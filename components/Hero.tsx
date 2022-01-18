import Image from "next/image";
import logo from "../images/logo.png";

const Hero = (props: any): JSX.Element => {
  return (
    <section className="w-screen md:h-screen relative">
      <div className='absolute '>
        <Image src={props.img} alt="" className="hero" layout='intrinsic'  />
      </div>
      <div className="flex justify-center items-center md:h-screen">
        <Image src={logo} alt="" className="z-0 md:w-full"  />
      </div>
    </section>
  );
};
export default Hero;
