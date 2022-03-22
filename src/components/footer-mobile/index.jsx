import { useContext } from "react";
import { ToggleContext } from "../../contexts/ToggleContext";
import { Statusbar } from "../statusBar";
import "./styles.scss";

export const FooterMobile = ({ }) => {

  const appData = useContext(ToggleContext)
  const {pageState, setPageState } = appData;
  const { currentStep } = pageState;

  const handleStepNavigation = (index) => {
    const tmpState = {...pageState};
    tmpState.currentStep = index;
    setPageState(tmpState)
  }

  
  const pageCurrentState = pageState.currentStep;
  return (
    <div className="footer-mobile">
        <Statusbar
          handleStepNavigation={handleStepNavigation}
          currentStep={currentStep}
        />
    </div>
  );
};
