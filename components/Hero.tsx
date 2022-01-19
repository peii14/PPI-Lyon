import Image from "next/image";
import logo from "../images/logo.png";

const Hero = (props: any): JSX.Element => {
  return (
    <section className="relative w-screen md:h-screen">
      <div className='z-0'>
        <Image src={props.img} alt="" className="hero" layout="responsive" />
      </div>
      <div className=" z-10 flex justify-center items-center px-20 md:py-20 py-10 ">
        <Image src={logo} alt="" layout="intrinsic" />
      </div>
    </section>
  );
};
export default Hero;
