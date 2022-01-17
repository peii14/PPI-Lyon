import blur1 from "../images/blur1.png";
import Image from "next/image";
const Blur = (props) => {
  if (props.pos == 0) {
    return (
      <div className="absolute bottom-0 left-3/4 w-3/4">
        <Image src={blur1} />
      </div>
    );
  } else if(props.pos == 1) {
    return (
      <div className="w-3/4 -left-2/4 bottom-0 absolute align-bottom ">
        <Image src={blur1} layout="intrinsic" />
      </div>
    );
  }
  else{
      return(
        <div className="w-10/12 absolute">
            <Image src={blur1} layout="intrinsic" />
      </div>
      )
  }
};
export default Blur;
