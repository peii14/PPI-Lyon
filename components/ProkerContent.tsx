import Image from "next/image";
import blur1 from "../images/blur1.png";
const ProkerContent = (props) => {
  return (
    <div className="grid md:grid-flow-col md:grid-cols-4 grid-cols-1 grid-flow-row grid-row-4 items-center py-10 md:px-20 px-10 md:gap-0 gap-7 w-10/12 overflow-hidden">
      <div className="text-left select-none">
        <h1 className="font-normal">
          {props.t1} <br />
          <span className="font-light">{props.t2}</span>
        </h1>
        <div className="absolute top-10 w-5/12 z-0 max-w-3xl">
          <Image src={blur1} alt="" width={500} height={500} />
        </div>
      </div>
      <div className="col-span-2 select-none">
        <div className="block" data-scroll data-scroll-speed="1">
          <Image src={props.img} alt="" />
        </div>
      </div>
      <div>
        <p className="text-left select-none">{props.content}</p>
      </div>
    </div>
  );
};
export default ProkerContent;
