import Image from "next/image";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faYoutube,
  faGooglePlusG,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="absolute w-screen bg-primary md:p-20 p-16 px-20">
      <div className="flex md:flex-row flex-col justify-around">
        <Image src={logo} width={250} height={120} />
        <div className="text-sec flex flex-col gap-3">
          <h4 className="tracking-widest">Contact Us</h4>
          <div className="flex flex-row space-x-20  ">
            <div className="flex-col flex gap-2">
              <div className="flex flex-row gap-3">
                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                <p >LinkedIn</p>
              </div>
              <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faFacebookF} size="lg"/>
                <p>FaceBook</p>
              </div>
              <div className="flex flex-row gap-3">
                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                <p>Instagram</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faYoutube} size="lg"/>
                <p>Youtube</p>
              </div>
              <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faGooglePlusG} size="lg"/>
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
