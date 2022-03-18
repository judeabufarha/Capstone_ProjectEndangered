// Title
// Textbox paragraph
// Toggle Button
// Background image 1 and 2 (to toggle between)

import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import ToggleButtons from "../../toggle-buttons";
import "./styles.scss";

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
          <img className = "elephNegImg" src="https://i.ibb.co/cbJ0gqK/future-Negative.png" alt="" />
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
                Scientists predict that polar bears will be extinct by the end
                of the century if greenhouse gas emissions continue to increase.
                Greenhouse gas emissions have caused climate change on our
                planet, and this is affecting the polar bears’ environment. As
                the arctic becomes warmer, the ice begins to melt. However,
                there are two possible future outcomes. Reducing greenhouse gas
                emissions globally would significantly help save the arctic
                environment. If we change our ways, the arctic could be saved,
                and polar bears would be able to feed and nourish themselves,
                which would help regrow the population.
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
        <div className="toggleButtonsP7">
        <div className="wrapperCommonContainer ">
          <div className="commonContainerSpecial">
            <div className="flexContainer100">
              <ToggleButtons
                colour="toggle-orange"
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
