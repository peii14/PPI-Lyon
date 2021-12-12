import Image from "next/image";
import blur1 from "../images/blur1.png";
const ProkerContent = (props) => {
  return (
    <div className="grid grid-flow-col grid-cols-4 items-center p-10 gap-0 w-10/12 max-w-6xl overflow-hidden">
      <div className="text-left select-none">
        <h1 className="font-normal">
          {props.t1} <br />
          <span className="font-light">{props.t2}</span>
        </h1>
        
        <div className="absolute top-10 w-5/12 z-0 max-w-2xl">
          <Image src={blur1} alt="" width={500} height={500} />
        </div>
      </div>
      <div className="col-span-2 select-none">
        <div className="block">
          <Image src={props.img} alt="" />
        </div>
      </div>
      <div>
        <p className="text-left select-none">
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default ProkerContent;
