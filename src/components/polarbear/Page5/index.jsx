// Title
// Paragraph
// Interactive map component
// Toggle button

import { ParallaxLayer } from "@react-spring/parallax";
import ToggleButtons from "../../toggle-buttons";
import "./styles.scss";

const Page5 = ({ offset, color }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer populationTitle">
          <div className="commonContainerSpecial">
            <h3>Population</h3>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="toggleButtonsParent" offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer toggleButtons">
        <div className="commonContainerSpecial">
            <div className="flexContainer100">
            <ToggleButtons colour="toggle-orange" base="base-orange" text="then-now" />
            </div>
        </div>
          
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer populationText">
          <div className="commonContainerSpecial">
            <p className="populationParaPolar">
              Explore the population of polar bears in different areas of the
              world.
            </p>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page5;
