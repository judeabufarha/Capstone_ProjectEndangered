import { useEffect, useRef } from "react";
import { Parallax } from "@react-spring/parallax";

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
import useWindowDimensions from "../../hooks/windowDimensions";
import { useHistory } from "react-router-dom";

export const Polarbear = () => {
  const appContext = useContext(ToggleContext);
  const { pageState, setPageState } = appContext;
  const pageCurrentState = pageState.currentStep;

  const handleStepNavigation = (index) => {
    const tmpState = { ...pageState };
    tmpState.currentStep = index;
    setPageState(tmpState)
  }
  
  const { width } = useWindowDimensions();
  const ref = useRef();
  const offset = ref.current?.offset

  useEffect(() => {
    ref.current.scrollTo(0)
    handleStepNavigation(0);
  }, [])

  // https://codesandbox.io/s/3nzke?file=/src/App.js:680-688
  useEffect(() => {
    const handleWheel = (e) => {
      if (typeof offset !== "undefined") {
        const currentPage = offset + 1;

        let newOffset;
        let min = width * offset;
        let max = width * (offset + 1)
        window.scrollLeft += e.deltaY
        if (e.deltaY <= 0) {
          newOffset = offset + 1

        } else {
          newOffset = offset - 1
        }
        if (newOffset < 9 && newOffset >= 0) {
          ref.current.scrollTo(newOffset);
          handleStepNavigation(newOffset);
        }
      }
    }
    window.addEventListener("wheel", handleWheel, false);
    return (() => {
      window.removeEventListener("wheel", handleWheel, false);

    })
  }, [offset])

  useEffect(() => {
    ref.current.scrollTo(pageCurrentState);
    console.log("scroll");
  }, [pageCurrentState]);

  const history = useHistory(); 

  useEffect(
    () => {
      checkSize();
    }, []
  );

  const checkSize = () => {
    if (window.innerWidth <= 800) {
        history.push("/polar-bear-mobile")
    }
  }

  return (
    <>
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
