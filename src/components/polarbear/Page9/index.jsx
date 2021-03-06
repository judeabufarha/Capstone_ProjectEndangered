
import { ParallaxLayer } from "@react-spring/parallax";
import { TextButton } from "../../text-button";
import "./styles.scss";

 /** Page 9 Polarbear */
const Page9 = ({ offset, color }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

 
  {/** Explore text layer layer */} 
      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer enviroText">
          <div className="commonContainerSpecial">
            <p className="enviroPara">
            Launch into the polar bear’s habitat to explore their home and play activities to learn more about them.
            </p>
          </div>
        </div>
      </ParallaxLayer>
       {/** Enviroment image layer */}
    <ParallaxLayer offset={offset} speed={1.2}>
    <img
        className="enviromentArtic3d"
        src="https://i.ibb.co/KXP3hfd/Vector-17.png"
        alt="Arctic 3D Enviroment"
      />
    </ParallaxLayer>
 {/** Button layer links to immersive experience */}
    <ParallaxLayer offset={offset} speed={1.2}>
      <div className="exploreButton" aria-label="begin exploring">
      <TextButton type="light" text="Begin Exploring" colour="light" 
        onClick={() => {
          window.open("https://project-endangered-experience.com/public/arctic/", "_blank");
        }}
      />
      </div>

    </ParallaxLayer>

   
    
    </>
  );
};

export default Page9;
