import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import ToggleButtons from "../../toggle-buttons";
import "./style.scss";


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
                        src='https://i.ibb.co/P5HJVm4/Positive-5.png'
                        alt='image of elephants in grasslands.'
                    />

                    <img
                        className={`${showImage ? "fade-out" : "fade-in"}`} 
                        id="future-negative"
                        src="https://i.ibb.co/PYyw8Lg/Negative-2.png"
                        alt="image of grasslands with train tracks."
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
              The population of Asian elephants is at great risk if there is no human intervention. Uncontrolled human developments in the Asian elephant’s habitat have put the population in danger. As the developments continue, the population becomes smaller and more fragmented. However, there are two possible future outcomes. Reducing industrial developments and protecting the Asian elephant’s habitat would significantly help save the population and their environment. If we change our ways, the Asian elephant's home could be saved, which would help the population recover.
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
                colour="toggle-pink"
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
