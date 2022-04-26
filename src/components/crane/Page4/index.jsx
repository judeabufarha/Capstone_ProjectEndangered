import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

/** Crane Page 4*/
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
            The current status of the whooping crane is endangered. This means that they face a very high risk of extinction in the wild. Whooping cranes are endangered because of habitat loss and human interference on their breeding grounds.{" "}
            </p>
            <p>
            Human settlement in the North American prairies has had severe effects on the whooping crane population. The marshes whooping cranes lived in were drained for buildings and farms, leaving them with no home. Now that there is almost no habitat left for whooping cranes, it makes it difficult for them to find food and breed.{" "}
            </p>
            <p>
            In 1941, there were only 21 whooping cranes left on earth, which meant the species was in critical condition and near extinction. However, through conservation efforts, the population is increasing. Today there are about 600 whooping cranes in the wild and captivity.{" "}
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
              src="https://i.ibb.co/hd6mfCK/Vector-33.png"
              alt="Grassland Snapshot"
            />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page4;
