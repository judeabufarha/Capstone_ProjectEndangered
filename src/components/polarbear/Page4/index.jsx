// Title - status
// Text
// Paragraph 1
// Paragraph 2
// Paragraph 3
// Side Image

import { ParallaxLayer } from "@react-spring/parallax";
import "./styles.scss";

const Page4 = ({ offset, color }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer className="" offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer statusTitle">
          <div className="commonContainerSpecial">
            <h2>Status:</h2>
            <h3>Vulnerable</h3>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="" offset={offset} speed={0.9}>
        <div className="wrapperCommonContainer statusTextArea">
          <div className="commonContainerSpecial">
            <p>
            The current status of the polar bear population is vulnerable. This means that they face a high risk of extinction in the wild. Polar bears are endangered because of the effects climate change has on the Arctic, which is where polar bears live. {" "}
            </p>
            <p>
            Climate change has caused the Arctic to heat up twice as fast as it used to. This makes it harder for polar bears to hunt seals, rest, and breed because they use the ice to do these things. Now that there is less ice, the polar bears have trouble finding food, and this can lead to malnutrition and starvation.{" "}
            </p>
            <p>
            Because of being underfed, it also makes it harder for polar bears to reproduce. Even when a polar bear is able to have cubs, many die due to a lack of food or because their mother was malnourished. This has caused extinction in certain areas of the Arctic. {" "}
            </p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.2}>
        <div className="sideArcticImage">
          <div className="flexContainer100">
            <img
              className="arcticSnap"
              src="https://i.ibb.co/txT70v8/arctic-Snap.png"
              alt="arctic Snapshot"
            />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page4;
