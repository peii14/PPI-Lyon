import * as React from "react";
import { Options } from "react-lottie";
import { Container, LottieWrapper } from "./Animation.styled";
import * as loopAnimation from "../animations/loop.json";
import * as doneAnimation from "../animations/complete.json";

const animationLoopOptions = {
  loop: true,
  autoplay: true,
  animationData: loopAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationCompleteOptions = {
  loop: false,
  autoplay: true,
  animationData: doneAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const useCallback = (callback: any, values: any) => {
  const self = React.useRef({
    values: values,
    handler: (...args) => {
      return callback(...args, self.current.values);
    }
  });
  self.current.values = values;
  return self.current.handler;
};

const Animation = () => {
  const [animationOptions, setAnimationOptions] = React.useState<Options>(
    animationLoopOptions
  );
  const [animationSwap, setAnimationSwap] = React.useState<boolean | null>(
    false
  );

  const handleLoopComplete = useCallback(
    (event, [animationSwap]) => {
      if (animationSwap) {
        setAnimationOptions(animationCompleteOptions);
        setAnimationSwap(null);
      }
    },
    [animationSwap]
  );

  return (
    <Container
      onClick={() => {
        setAnimationSwap(true);
      }}
    >
      <LottieWrapper
        isClickToPauseDisabled
        options={animationOptions}
        height={100}
        width={100}
        eventListeners={[
          {
            eventName: "loopComplete",
            callback: handleLoopComplete
          }
        ]}
      />
    </Container>
  );
};

export default Animation;
