import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

const Page1 = ({ offset, color }) => (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

    <ParallaxLayer className="elephantTitle" offset={offset} speed={0.6}>
      <img
        className="elephantTitle"
        src="https://i.ibb.co/WHFytmh/The-Asian-Elephant.png"
        alt="title"
      />
    </ParallaxLayer>

   
    <ParallaxLayer className="bottomGrass" offset={offset} speed={0.6}>
      <img
        className="grass"
        src="https://i.ibb.co/41mK2fW/grass.png"
        alt="bottom grass"
      />
    </ParallaxLayer>
       
    <ParallaxLayer className="highGrass" offset={offset} speed={0.9}>
      <img
        className="lightHighGrass"
        src="https://i.ibb.co/HPRTcbz/front-grass.png"
        alt="High grass"
      />
    </ParallaxLayer>

    <ParallaxLayer className="homeElephant" offset={offset} speed={1.2}>
      <img
        className="sideHomeElephant"
        src="https://i.ibb.co/yVc19d4/elephant.png"
        alt="Elephant Image"
      />
    </ParallaxLayer>
 
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


