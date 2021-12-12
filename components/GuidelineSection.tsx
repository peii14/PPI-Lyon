import n from "../styles/Neuromorphism.module.css";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import suitcase from "../animations/suitcase.json";
import town from "../animations/town.json";
import coins from "../animations/coins.json";
import school from "../animations/school.json";

const GuidelineSection = (props) => {
  const container = useRef(null);
  var animate = [];
  var content;
  if (props.status == 1) {
    animate.push(suitcase);
    content = "Keberangkatan";
  } else if (props.status == 2) {
    animate.push(town);
    content = "Tiba di Lyon";
  } else if (props.status == 3) {
    animate.push(school);
    content = "Perancis jangka panjang";
  } else if (props.status == 4) {
    animate.push(coins);
    content = "Contoh Budgeting";
  }

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animate[0],
    });
    return () => {
      lottie.destroy();
    };
  }, [animate]);
  return (
    <div
      className="cursor-pointer h-full"
      onMouseEnter={() => {
        lottie.setDirection(1);
        lottie.play();
      }}
      onMouseLeave={() => {
        lottie.setDirection(-1);
        lottie.play();
      }}
    >
      <div className={n.Neuro}>
        <div className="w-8/12 flex m-auto " ref={container} />
        <div>
          <h3 className="font-medium text-primary ">{content}</h3>
        </div>
      </div>
    </div>
  );
};
export default GuidelineSection;
