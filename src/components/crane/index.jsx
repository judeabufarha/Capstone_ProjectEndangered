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


export const Crane = () => {
  const appContext = useContext(ToggleContext);
  const { pageState, setPageState, animal, AnimalDictionary, subMenuItems ,setsubMenuItems, templateMenu } = appContext;
  const pageCurrentState = pageState.currentStep;

  /** Dealing with step navigation to update page postition  */
  const handleStepNavigation = (index) => {
    const tmpState = { ...pageState };
    tmpState.currentStep = index;
    setPageState(tmpState)

    /** Creating a temoprary state to handle animal  */
    const tmpSubMenuItems = {...subMenuItems}
    tmpSubMenuItems.animals[AnimalDictionary[animal]] = [...templateMenu];
    tmpSubMenuItems.animals[AnimalDictionary[animal]][index].isEnabled = true;
    setsubMenuItems({...tmpSubMenuItems})

  }
  /** Getting window dimesions to update the page postion with parallax and scroll */
  const { width } = useWindowDimensions();
  const ref = useRef();
  const offset = ref.current?.offset

  /** Scrolling to each page and updating upon click for handle step every time  */
  useEffect(() => {
    ref.current.scrollTo(0)
    handleStepNavigation(0);
  }, [])


  // https://codesandbox.io/s/3nzke?file=/src/App.js:680-688
  useEffect(() => {
    /** Implementing the wheel scroll */
    const handleWheel = (e) => {
        if (typeof offset !== "undefined") {
          /** Moving forwards, up a page upon scroll*/
          const currentPage = offset + 1;
  
          /** using the offset to change the page  */
          let newOffset;
          let min = width * offset;
          let max = width * (offset + 1)
          window.scrollLeft += e.deltaY
          if (e.deltaY <= 0) {
            newOffset = offset + 1
  
          } else {
             /** Moving backwards,down a page upon scroll*/
            newOffset = offset - 1
          }
          if (newOffset < 9 && newOffset >= 0) {
            ref.current.scrollTo(newOffset);
            handleStepNavigation(newOffset);
          }
        }
    }

     /** Listeining for the wheel scroll*/
    window.addEventListener("wheel", handleWheel, false);
    return (() => {
      window.removeEventListener("wheel", handleWheel, false);

    })
  }, [offset])

  useEffect(() => {
     /** Scrolling each time it updates */
    ref.current.scrollTo(pageCurrentState);
  }, [pageCurrentState]);

  const history = useHistory(); 

  useEffect(
    () => {
      checkSize();
      console.log("switch to crane");
    }, []
  );

  const checkSize = () => {
     /** check size to know what to render desktop or mobile */
    if (window.innerWidth <= 800) {
        history.push("/whooping-crane-mobile");
        console.log("switch to crane")
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
        { /** Rendering all animal pages */}
        <Page1 offset={0} color="page1CraneBackground" />
        <Page2 offset={1} color="page2CraneBackground" />
        <Page3 offset={2} color="white" />
        <Page4 offset={3} color="white" />
        <Page5 offset={4} color="page5Background" />
        <Page6 offset={5} color="page6CraneBackground" />
        <Page7 offset={6} color="page7CraneBackground" />
        <Page8 offset={7} color="white" />
        <Page9 offset={8} color="white" />
      </Parallax>

      <img className="resize-desktop-img" src="https://i.ibb.co/m4kxQvn/Full-Screen.png"/>
    </>
  );
};
