import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

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

      <ParallaxLayer className="" offset={offset} speed={0.9}>
        <div className="wrapperCommonContainer statusTextArea">
          <div className="commonContainerSpecial">
            <p>
            The current status of the whooping crane population is endangered. This means that they face a very high risk of extinction in the wild. Whooping cranes are endangered because of habitat loss and human interference on their breeding grounds.{" "}
            </p>
            <p>
            Human settlements in the North American prairies has had severe effects on whooping cranes. The marshes whooping cranes lived in were drained for buildings and farms, leaving them with no home. Now that there is almost no habitat left, it makes it difficult for them to find food and breed.{" "}
            </p>
            <p>
            In 1941, there were only 21 whooping cranes left, meaning the species was in critical condition and near extinction. However, through conservation efforts, the population is increasing. Today there are about 600 whooping cranes in the wild and captivity.{" "}
            </p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.2}>
        <div className="SideGrasslandImage">
          <div className="flexContainer100">
            <img
              className="grasslandSnap"
              src="https://i.ibb.co/hd6mfCK/Vector-33.png"
              alt="Ocean Snapshot"
            />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page4;
