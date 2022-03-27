import { useContext } from "react";
import { ToggleContext } from "../../contexts/ToggleContext";
import { LargeIconButton } from "../large-icon-button";
import { Statusbar } from "../statusBar";
import "./styles.scss";

export const Footer = ({ }) => {

  const appData = useContext(ToggleContext)
  const {pageState, setPageState, animal, AnimalDictionary, subMenuItems ,setsubMenuItems, templateMenu } = appData;
  const { currentStep } = pageState;

  const handleStepNavigation = (index) => {
    const tmpState = {...pageState};
    tmpState.currentStep = index;
    setPageState(tmpState)
    const tmpSubMenuItems = {...subMenuItems}
    tmpSubMenuItems.animals[AnimalDictionary[animal]] = [...templateMenu];
    tmpSubMenuItems.animals[AnimalDictionary[animal]][index].isEnabled = true;
    setsubMenuItems({...tmpSubMenuItems})
  }

  
  const pageCurrentState = pageState.currentStep;
  return (
    <div className="footer-btns">
      <LargeIconButton
        onClick={() => currentStep > 0 && handleStepNavigation(currentStep - 1)}
        style={{ visibility: currentStep === 0 ? "hidden" : "visible" }}
        className="left-button"
        type="left"
      />
      <Statusbar
        handleStepNavigation={handleStepNavigation}
        currentStep={currentStep}
      />
      <LargeIconButton
        onClick={() => currentStep < 8 && handleStepNavigation(currentStep + 1)}
        style={{ visibility: currentStep >= 8 ? "hidden" : "visible" }}
        className="right-button"
        type="right"
      />
    </div>
  );
};
