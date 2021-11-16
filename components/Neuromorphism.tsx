import n from "../styles/Neuromorphism.module.css";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import suitcase from "../animations/suitcase.json"
import town from  "../animations/town.json"
import coins from "../animations/coins.json"
import school from "../animations/school.json"

const Neuromorphism: React.FC = (props: any) => {
  return (
    <div className='cursor-pointer'>
      <div className={n.Neuro}>{props.children}</div>
    </div>
  );
};
export default Neuromorphism;
