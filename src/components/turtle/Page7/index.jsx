import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import ToggleButtons from "../../toggle-buttons";
import "./style.scss";

const Page7 = ({ offset, color }) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    console.log({ showImage });
  }, [showImage]);

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0} className="page7">
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0} className="page7">
        <div className={`${showImage ? "fade-out" : "fade-in"}`}>
          <img src="https://i.ibb.co/YPMKXXW/Negative-4.png" alt="" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} className="page7">
        <div className="wrapperCommonContainer futureTitle">
          <div className="commonContainer">
            <h3>The Future</h3>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.2} className="page7">
        <div className="wrapperCommonContainer futureText">
          <div className="commonContainer commonContainer_whiteRadius">
            <div className="pContainer">
              <p>
              The population of green sea turtles is at great risk if there is no human intervention. The uncontrolled coastal building has destroyed many beaches, and this is affecting the green sea turtle’s environment. As the building continues, the ocean environment becomes more polluted. However, there are two possible future outcomes. Reducing coastal building and protecting the green sea turtle’s habitat would significantly help save the population and ocean environment. If we change our ways, the green sea turtle’s home could be saved, which would help regrow the population.
              </p>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
         className="page7"
        offset={offset}
        speed={0.9}
      >
        <div className="toggleButtonsP7" aria-label="toggle then-now">
        <div className="wrapperCommonContainer ">
          <div className="commonContainerSpecial">
            <div className="flexContainer100">
              <ToggleButtons
                colour="toggle-peach"
                base="base-white"
                onClick={() => {
                  setShowImage(!showImage);
                }}
                text="positive-negative"
              />
            </div>
          </div>
        </div>

        </div>
        
      </ParallaxLayer>
    </>
  );
};

export default Page7;
