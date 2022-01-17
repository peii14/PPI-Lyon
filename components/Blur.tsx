import blur1 from "../images/blur1.png";
import Image from "next/image";
const Blur = () => {
  return (
    <div className="absolute bottom-0 left-3/4 w-3/4">
      <Image src={blur1} />
    </div>
  );
};
export default Blur;
