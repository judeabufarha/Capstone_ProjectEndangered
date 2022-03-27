import { useEffect } from "react";
import { useContext } from "react";
import { ToggleContext } from "../../contexts/ToggleContext";
import "./styles.scss";

export const Statusbar = () => {

  const appContext =  useContext(ToggleContext);
  const { pageState, setPageState, animal, menuStructure, subMenuItems, setsubMenuItems, templateMenu, AnimalDictionary} = appContext;
  const {currentStep} = pageState;

  const handleStepNavigation = (index) => {
    const tmpState = {...pageState};
    tmpState.currentStep = index;
    setPageState(tmpState)
    const tmpSubMenuItems = {...subMenuItems}
    tmpSubMenuItems.animals[AnimalDictionary[animal]] = [...templateMenu];
    tmpSubMenuItems.animals[AnimalDictionary[animal]][index].isEnabled = true;
    setsubMenuItems({...tmpSubMenuItems})


  }

  useEffect(()=> {
    console.log({pageState})
  },[]);

  const statusDots = [
    { backgroundColor: "#FFFFFF" },
    { backgroundColor: "#013440" },
    { backgroundColor: "#013440" },
    { backgroundColor: "#013440" },
    { backgroundColor: "#013440" },
    { backgroundColor: "#FFFFFF" },
    { backgroundColor: "#013440" },
    { backgroundColor: "#013440" },
    { backgroundColor: "#013440" },
  ];

  return (
    <div className="statusbar">
      {statusDots.map((_, index) => (
        <span
          onClick={() => handleStepNavigation(index)}
          className="dot"
          style={{
            backgroundColor: statusDots[currentStep].backgroundColor,
            opacity: index === currentStep ? 1 : 0.5,
          }}
        ></span>
      ))}
    </div>
  );
};
