import Image from "next/image";
import logo from "../images/logo.png";
// pastiin footer
const Footer = () => {
  return (
    <section className="absolute w-screen bg-primary p-20">
      <div className="flex flex-row justify-around">
        <Image src={logo} width={250} height={100} />
        <div className="text-sec flex flex-col gap-3">
          <h4 className="tracking-widest">Contact Us</h4>
          <div className="flex flex-row space-x-20  ">
            <div className="flex-col flex gap-2">
              <div>
                <p>FaceBook</p>
              </div>
              <div>
                <p>FaceBook</p>
              </div>
              <div>
                <p>Instagram</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div>
                <p>Twitter</p>
              </div>
              <div>
                <p>Gmail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
