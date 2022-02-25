import { useEffect, useRef } from "react";
import { Parallax } from "@react-spring/parallax";
import ScriptTag from "react-script-tag";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";

import './styles.scss';
import { useContext } from "react";
import { ToggleContext } from "../../contexts/ToggleContext";

export const Polarbear = () => {
  const appContext =  useContext(ToggleContext);
  const { pageState, setPageState } = appContext;
  const pageCurrentState = pageState.currentStep;


  const handleStepNavigation = (index) => {
    const tmpState = {...pageState};
    tmpState.currentStep = index;
    setPageState(tmpState)
  }
  


  const ref = useRef();

  useEffect(()=>{
      ref.current.scrollTo(0)
      handleStepNavigation(0);
  },[])

  useEffect(() => {
    console.log(ref.current)
    ref.current.scrollTo(pageCurrentState);
    console.log({ref})
    
  }, [pageCurrentState]);

  return (
    <>
      <ScriptTag defer
        type="text/javascript"
        src="https://rawgit.com/jquery/jquery-mousewheel/master/jquery.mousewheel.js"
      />
      <ScriptTag type="text/javascript" src="./scripts/scroll.js" />

      <Parallax
        ref={ref}
        className="container"
        pages={9}
        horizontal={true}
        enabled={true} //disable scroll
      >
        <Page1 offset={0} color="orange" />
        <Page2 offset={1} color="page2Background" />
        <Page3 offset={2} color="white" />
        <Page4 offset={3} color="white" />
        <Page5 offset={4} color="page5Background" />
        <Page6 offset={5} color="page6Background" />
        <Page7 offset={6} color="page7Background" />
        <Page8 offset={7} color="white" />
        <Page9 offset={8} color="white" />
      </Parallax>
    </>
  );
};
