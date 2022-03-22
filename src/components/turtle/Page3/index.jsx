import { ParallaxLayer } from "@react-spring/parallax";
import TrioImg from "../../trioImg";
import "./style.scss";

const Page3 = ({ offset, color }) => {
  const groupAnimalsTurt = [
    <img src="https://i.ibb.co/pLSPD4x/Vector-18.png" alt="seaweed" />,
    <img src="https://i.ibb.co/vJrMGFF/Vector-19.png" alt="tutle on shore"/>,
    <img src="https://i.ibb.co/pvscVrb/Vector-20.png" alt="lobster and fish"/>,
  ];
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer importanceTitle">
          <div className="commonContainer">
            <h1>The Importance of the Green Sea Turtle</h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.9}>
        <div className="wrapperCommonContainer textAreaContainer">
          <div className="commonContainer">
            <p>
            The green sea turtle plays an important role in the ocean’s ecosystem. Their job is to be the lawnmowers of the ocean and eat the seagrass on the ocean floor. By maintaining the seagrass beds, the plants stay healthy and productive. This is important because many animals rely on seagrass beds for their homes. When green sear turtles eat seagrass, they quickly digest and release it, which provides many nutrients to the plants and animals in the ecosystem. Without green sea turtles, the health of their ecosystem would be put at risk.
            </p>
            <hr />
            <p>
            Green sea turtles also play an important role in oceans around the world. This is because they migrate large distances with different organisms living on their shells. Because of this, they help to create and maintain diverse oceans.
            </p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.2}>
        <div className="wrapperCommonContainer polarAnimImg">
          <div className="commonContainerSpecial">
            <TrioImg images={groupAnimalsTurt} />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page3;
