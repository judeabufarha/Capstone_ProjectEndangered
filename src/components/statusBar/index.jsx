import "./styles.scss";

export const Statusbar = ({ currentStep, handleStepNavigation }) => {
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
