import Image from "next/image";

const Hero = (props: any): JSX.Element => {
  return (
    <div>
      <Image src={props.img} alt="" className="hero" />
      <div className=""></div>
    </div>
  );
};
export default Hero;
