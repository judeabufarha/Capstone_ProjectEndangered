import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

/** Turtle Page 4*/
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
            <h3>Endangered</h3>
          </div>
        </div>
      </ParallaxLayer>

    {/** Status and endangered title layer - moving together */}
      <ParallaxLayer className="" offset={offset} speed={0.9}>
        <div className="wrapperCommonContainer statusTextArea">
          <div className="commonContainerSpecial">
            <p>
            The current status of the green sea turtle population is endangered. This means that they face a very high risk of extinction in the wild. Green sea turtles are endangered because of overharvesting and habitat loss on land and in water.{" "}
            </p>
            <p>
            The green sea turtle depends on beaches to lay their eggs, and seagrass beds in the ocean for food. However, coastal development has destroyed the green sea turtle’s nesting grounds and polluted the seagrass beds. Now, green sea turtles struggle to eat and reproduce.{" "}
            </p>
            <p>
            Because of extreme harvesting, the entire green sea turtle population is at even greater risk. Thousands of green sea turtles are hunted and killed each year. Their eggs are also harvested by humans for trade, which makes it even harder for the population to grow.{" "}
            </p>
          </div>
        </div>
      </ParallaxLayer>

      {/** Paragraphs section - moving at the same speed*/}
      <ParallaxLayer offset={offset} speed={1.2}>
        <div className="SideOceanImage">
          <div className="flexContainer100">
            <img
              className="oceanSnap"
              src="https://i.ibb.co/9HX4LwP/Vector-21.png"
              alt="ocean Snapshot"
            />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page4;
