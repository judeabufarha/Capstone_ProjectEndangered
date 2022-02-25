import { useEffect, useRef } from "react";
import { Parallax } from "@react-spring/parallax";
import ScriptTag from "react-script-tag";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
// import Page4 from "./Page4";
// import Page5 from "./Page5";
// import Page6 from "./Page6";
// import Page7 from "./Page7";
// import Page8 from "./Page8";
// import Page9 from "./Page9";



export const Turtle = ({ currentStep, handleStepNavigation }) => {
  const ref = useRef();

  useEffect(()=>{
    ref.current.scrollTo(0);
    handleStepNavigation(0);
  },[]);

  useEffect(() => {
    ref.current.scrollTo(currentStep);
  }, [currentStep]);



  return (
    <>
      <Parallax
        ref={ref}
        className="container"
        pages={9}
        horizontal={true}
        enabled={false} //disable scroll
      >
        <Page1 offset={0} color="orange" />
        <Page2 offset={1} color="page2TurtleBackground" />
        <Page3 offset={2} color="white" />
        <Page4 offset={3} color="white" />
        <Page1 offset={4} color="page5Background" />
        <Page1 offset={5} color="page6Background" />
        <Page1 offset={6} color="page7Background" />
        <Page1 offset={7} color="white" />
        <Page1 offset={8} color="white" />
      </Parallax>
    </>
  );
};
