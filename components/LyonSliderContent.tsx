import Image from "next/image";
const LyonSliderContent = (props) => {
  return (
    <div className="flex md:flex-row flex-col z-0 md:p-16">
      <div className="">
        <Image src={props.img} />
      </div>
      <div className="md:w-2/3 md:p-5 py-5 relative flex">
        <h2 className="bg-sec absolute md:-left-20 text-left p-1">{props.title}</h2>
        <p className="md:mt-16 mt-12">
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default LyonSliderContent;
