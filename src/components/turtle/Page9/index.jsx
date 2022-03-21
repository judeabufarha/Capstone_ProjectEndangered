import { ParallaxLayer } from "@react-spring/parallax";
import { TextButton } from "../../text-button";
import "./style.scss";

const Page9 = ({ offset, color }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

 
      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer enviroText">
          <div className="commonContainerSpecial">
            <p className="enviroPara">
            Launch into the green sea turtles’s habitat to explore their home and play activities to learn more about them.
            </p>
          </div>
        </div>
      </ParallaxLayer>
      
    <ParallaxLayer offset={offset} speed={1.2}>
    <img
        className="enviromentOcean3d"
        src="https://i.ibb.co/kJ6Cjmx/Vector-41.png"
        alt="Ocean 3D Enviroment"
      />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={1.2}>
      <div className="exploreButton" aria-label="begin exploring">
      <TextButton type="light" text="Begin Exploring" colour="light" />
      </div>

    </ParallaxLayer>
    
    </>
  );
};

export default Page9;