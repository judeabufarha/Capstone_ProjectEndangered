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


export const Elephant = () => {
  const appContext = useContext(ToggleContext);
  const { pageState, setPageState, animal, AnimalDictionary, subMenuItems ,setsubMenuItems, templateMenu } = appContext;
  const pageCurrentState = pageState.currentStep;

  console.log(pageCurrentState);

  const handleStepNavigation = (index) => {
    const tmpState = { ...pageState };
    tmpState.currentStep = index;
    setPageState(tmpState)
    
    const tmpSubMenuItems = {...subMenuItems}
    tmpSubMenuItems.animals[AnimalDictionary[animal]] = [...templateMenu];
    tmpSubMenuItems.animals[AnimalDictionary[animal]][index].isEnabled = true;
    setsubMenuItems({...tmpSubMenuItems})
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
  }, [pageCurrentState]);

  const history = useHistory(); 

  useEffect(
    () => {
      checkSize();
    }, []
  );

  const checkSize = () => {
    if (window.innerWidth <= 800) {
        history.push("/asian-elephant-mobile")
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
        <Page1 offset={0} color="page1ElephantBackground" />
        <Page2 offset={1} color="page2ElephantBackground" />
        <Page3 offset={2} color="white" />
        <Page4 offset={3} color="white" />
        <Page5 offset={4} color="page5ElephantBackground" />
        <Page6 offset={5} color="page6ElephantBackground" />
        <Page7 offset={6} color="page7ElephantBackground" />
        <Page8 offset={7} color="white" />
        <Page9 offset={8} color="white" />
      </Parallax>
      <img className="resize-desktop-img" src="https://i.ibb.co/m4kxQvn/Full-Screen.png"/>
    </>
  );
};
