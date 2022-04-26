import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import ToggleButtons from "../../toggle-buttons";
import "./style.scss";

/** Crane Page 7 */
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

     {/** Render background - 2 options postive and negative. Default is positive and can toggle between both with transition fade animation */}
      <ParallaxLayer offset={offset} speed={0} className="page7">
        <div className="future-background">
                    <img
                        id="future-positive"
                        src='https://i.ibb.co/hfkhCNb/Positive-8.png'
                        alt='image of whooping cranes in wet prairies.'
                    />

                    <img
                        className={`${showImage ? "fade-out" : "fade-in"}`} 
                        id="future-negative"
                        src="https://i.ibb.co/Kqwj94Q/Negative-6.png"
                        alt="image of drained wet prairies."
                    />
        </div>
      </ParallaxLayer>

      {/** Future Title layer */}
      <ParallaxLayer offset={offset} speed={0.6} className="page7">
        <div className="wrapperCommonContainer futureTitle">
          <div className="commonContainer">
            <h3>The Future</h3>
          </div>
        </div>
      </ParallaxLayer>

      {/** Paragraph layer*/}
      <ParallaxLayer offset={offset} speed={1.2} className="page7">
        <div className="wrapperCommonContainer futureText">
          <div className="commonContainer commonContainer_whiteRadius">
            <div className="pContainer">
              <p>
              Several factors put the whooping crane population at risk, including habitat loss and human disturbance, such as airplanes, hunting, and ATV traffic. Although the population of whooping cranes is slowly increasing, conservation efforts must continue or the population is still at severe risk. There are two possible future outcomes the whooping crane faces. Continuing to preserve the whooping crane’s habitat would significantly help save the population. If we continue to conserve and protect the wetlands and prairies the whooping cranes live in, the population would continue to grow, until it is no longer at risk.
              </p>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/** Toggle Button layer */}
      <ParallaxLayer
         className="page7"
        offset={offset}
        speed={0.9}
      >
        <div className="toggleButtonsP7" aria-label="positive-negative toggle">
        <div className="wrapperCommonContainer ">
          <div className="commonContainerSpecial">
            <div className="flexContainer100">
              <ToggleButtons
                colour="toggle-green"
                base="base-white"
                onClick={() => {
                  /** Changing image on click */
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
