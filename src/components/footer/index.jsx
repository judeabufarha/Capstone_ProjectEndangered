import { LargeIconButton } from "../large-icon-button";
import { Statusbar } from "../statusBar";
import "./styles.scss";

export const Footer = ({ currentStep, handleStepNavigation }) => {
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
