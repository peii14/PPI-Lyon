import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import suitcase from "../animations/suitcase.json"
import town from  "../animations/town.json"
import coins from "../animations/coins.json"
import school from "../animations/school.json"
const Animation=(props)=> {
  const container = useRef(null);
  var animate;
  if(props.status == 1)
    animate = suitcase;
  else if(props.status == 2 )
    animate = town;
  else if(props.status == 3)
    animate = school;
  else if(props.status == 4)
    animate = coins;

    
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animate,
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div>
      <div className='w-8/12 flex m-auto'
        ref={container}
        onMouseEnter={() => {
          lottie.setDirection(1);
          lottie.play();
        }}
        onMouseLeave={() => {
          lottie.setDirection(-1);
          lottie.play();
        }}
      />
    </div>
  );
}

export default Animation;
