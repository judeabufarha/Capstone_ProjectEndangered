import { useEffect, useRef } from "react";
import { Parallax } from "@react-spring/parallax";
import ScriptTag from "react-script-tag";

import Page1 from "./Page1";
// import Page2 from "./Page2";
// import Page3 from "./Page3";
// import Page4 from "./Page4";
// import Page5 from "./Page5";
// import Page6 from "./Page6";
// import Page7 from "./Page7";
// import Page8 from "./Page8";
// import Page9 from "./Page9";

export const Turtle = ({ currentStep }) => {
  const ref = useRef();


  useEffect(() => {
    ref.current.scrollTo(currentStep);
  }, [currentStep]);

  return (
    <>
      <ScriptTag
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
      />
      <ScriptTag
        type="text/javascript"
        src="https://rawgit.com/jquery/jquery-mousewheel/master/jquery.mousewheel.js"
      />
      <ScriptTag type="text/javascript" src="./scripts/scroll.js" />

      <Parallax
        ref={ref}
        className="container"
        pages={9}
        // horizontal={true}
        //enabled={false} //disable scroll
      >
        <Page1 offset={0} color="orange" />
        <Page1 offset={1} color="page2Background" />
        <Page1 offset={2} color="white" />
        <Page1 offset={3} color="white" />
        <Page1 offset={4} color="page5Background" />
        <Page1 offset={5} color="page6Background" />
        <Page1 offset={6} color="page7Background" />
        <Page1 offset={7} color="white" />
        <Page1 offset={8} color="white" />
      </Parallax>
    </>
  );
};
