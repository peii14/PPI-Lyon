import Image from "next/image";
import Line from "./Line";
import idham from "../images/member/idham.jpg";
import Neuromorphism from "./Neuromorphism";

const OrgCard = (props: any): JSX.Element=> {
  return (
    <section className="p-5 max-w-sm">
      <Neuromorphism isMember = {1} >
        <div className="w-8/12 mx-auto rounded-full">
          <Image src={props.image} alt='' className="rounded-xl" />
        </div>
        <div className="mt-5 flex flex-col gap-3">
            <h4 className="font-thin">{props.name}</h4>
            <div className="">
            <Line color={"#771011"} />
            </div>
            <h3 className="font-thin">{props.title}</h3>
        </div>
      </Neuromorphism>
    </section>
  );
};
export default OrgCard;
