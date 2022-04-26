import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

/** Page 1 for the Elephant  **/
const Page1 = ({ offset, color }) => (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

    {/* Elephant title layer **/}
    <ParallaxLayer className="elephantTitle" offset={offset} speed={0.6}>
    <h1 className="titleText">The<br></br></h1>
    <h1 className="titleTextAnim">Asian </h1>
    <h1 className="titleTextAnimLine2">Elephant </h1>
    </ParallaxLayer>

    {/* Elephant grass layer **/}
    <ParallaxLayer className="bottomGrass" offset={offset} speed={0.6}>
      <img
        className="grass"
        src="https://i.ibb.co/41mK2fW/grass.png"
        alt="bottom grass"
      />
    </ParallaxLayer>
    
     {/* Elephant high grass layer **/}
    <ParallaxLayer className="highGrass" offset={offset} speed={0.9}>
      <img
        className="lightHighGrass"
        src="https://i.ibb.co/HPRTcbz/front-grass.png"
        alt="High grass"
      />
    </ParallaxLayer>

    {/* Elephant main layer **/}
    <ParallaxLayer className="homeElephant" offset={offset} speed={1.2}>
      <img
        className="sideHomeElephant"
        src="https://i.ibb.co/yVc19d4/elephant.png"
        alt="Elephant Image"
      />
    </ParallaxLayer>
 
 {/* Elepahnt Sky layer **/}
    <ParallaxLayer className="elephantSky" offset={offset} speed={1.6}>
      <img
        className="elephantBirds"
        src="https://i.ibb.co/yN2C85p/birds-1.png"
        alt="birds"
      />
      <img className="elephantSun" src=" https://i.ibb.co/C0ggdGP/sun.png " alt="sun" />
      </ParallaxLayer>


   
  </>
);

export default Page1;


