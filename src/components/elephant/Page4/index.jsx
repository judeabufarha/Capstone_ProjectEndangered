import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

/** Elephant Page 4*/
const Page4 = ({ offset, color }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

   {/** Status and endangered title layer - moving together */}
      <ParallaxLayer className="" offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer statusTitle">
          <div className="commonContainerSpecial">
            <h2>Status:</h2>
            <h3>Endangered</h3>
          </div>
        </div>
      </ParallaxLayer>

    {/** Paragraphs section - moving at the same speed*/}
      <ParallaxLayer className="" offset={offset} speed={0.9}>
        <div className="wrapperCommonContainer statusTextArea">
          <div className="commonContainerSpecial">
            <p>
            The current status of the Asian elephant population is endangered. This means that they face a very high risk of extinction in the wild. Asian elephants are endangered because of habitat loss, fragmentation, poaching, and illegal trade.{" "}
            </p>
            <p>
            The biggest threat Asian elephants face is habitat loss and fragmentation. Because of human developments, including homes, plantations, factories, and transportation the Asian elephant's habitat has been destroyed. This has caused the population to be split into small groups, causing fragmentation, which puts them at great risk.{" "}
            </p>
            <p>
            Because of habitat loss and fragmentation, the Asian elephant population can no longer access important feeding areas and migratory routes. This is because they are blocked by human developments.{" "}
            </p>
          </div>
        </div>
      </ParallaxLayer>

{/** Grassland side image - seperate layer*/}
      <ParallaxLayer offset={offset} speed={1.2}>
        <div className="SideGrasslandImage">
          <div className="flexContainer100">
            <img
              className="grasslandSnap"
              src="https://i.ibb.co/pjr4QTk/Vector-26.png"
              alt="Grasslands snapshot"
            />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page4;
