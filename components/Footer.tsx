import Image from "next/image";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faYoutube,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="w-screen bg-primary text-sec md:p-20 py-14 px-16"
      
    >
      <div className="flex max-w-4xl md:flex-row flex-col justify-between mx-auto">
        <div className="flex flex-col md:mt-0 -mt-5 md:w-1/4 w-full md:mx-0 mx-auto md:px-0 px-5 ">
          <Image src={logo} width={250} height={120} priority />
        </div>
        <div className=" flex flex-col gap-3">
          <h4 className="tracking-widest">Contact Us</h4>
          <div className="flex flex-row space-x-20  ">
            <div className="flex-col flex gap-2">
              <div className="flex flex-row gap-3">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <p>LinkedIn</p>
              </div>
              <div className="flex flex-row gap-3">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                <p>FaceBook</p>
              </div>
              <div className="flex flex-row gap-3">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <p>Instagram</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
                <p>Youtube</p>
              </div>
              <div className="flex flex-row gap-3">
                <FontAwesomeIcon icon={faGoogle} size="lg" />
                <p>Gmail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto md:mt-0 mt-5">
        <small className="">
          &copy; Copyright 2022, Perhimpunan Pelajar Indonesia-Lyon. <br />
          All Right Reserved
        </small>
      </div>
    </footer>
  );
};
export default Footer;
