
import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import ToggleButtons from "../../toggle-buttons";
import "./styles.scss";

/** Elephant Page 7 */
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
                        src='https://i.ibb.co/PCqLfv7/Frame-4.png'
                        alt='image of polar bears and seals in arctic.'
                    />

                    <img
                        className={`${showImage ? "fade-out" : "fade-in"}`} 
                        id="future-negative"
                        src="https://i.ibb.co/ZgKjds4/Frame-5.png"
                        alt="image of melted ice and one seal and polar bear."
                    />
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
              Scientists predict that polar bears will be extinct by the end of the century if greenhouse gas emissions continue to increase. Greenhouse gas emissions have caused climate change on our planet, and this is affecting the polar bears??? environment. As the Arctic becomes warmer, the ice begins to melt. However, there are two possible future outcomes. Reducing greenhouse gas emissions globally would significantly help save the arctic environment. If we change our ways, the arctic could be saved, and polar bears would be able to feed and nourish themselves, which would help regrow the population.
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
        <div className="toggleButtonsP7" aria-label=" postive-negative toggle">
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
