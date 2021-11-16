import Image from "next/image";
import blur1 from "../images/blur1.png";
const ProkerContent = (props) => {
  return (
    <div className="grid grid-flow-col grid-cols-4 items-center p-10 gap-0 w-10/12 max-w-6xl">
      <div className="text-left">
        <h1 className="font-normal">
          {props.t1} <br />
          <span className="font-light">{props.t2}</span>
        </h1>
        <div className="absolute  top-0 w-5/12 z-0 max-w-2xl">
          <Image src={blur1} alt="" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="block">
          <Image src={props.img} alt="" />
        </div>
      </div>
      <div>
        <p className="text-left">
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default ProkerContent;
