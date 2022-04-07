import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

const Page1 = ({ offset, color }) => (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

    <ParallaxLayer className="craneTitle" offset={offset} speed={0.6}>
    <h1 className="titleText">The<br></br></h1>
    <h1 className="titleTextAnim">Whooping </h1>
    <h1 className="titleTextAnimLine2">Crane </h1>
    </ParallaxLayer>

   
    <ParallaxLayer className="craneWaterDetails" offset={offset} speed={0.6}>
      <img
        className="waterLilypads"
        src="https://i.ibb.co/HNF60cj/water-decor.png"
        alt="Water Detail For Crane"
      />
    </ParallaxLayer>
       
    <ParallaxLayer className="backgroundReedsCrane" offset={offset} speed={0.9}>
      <img
        className="backgroundReeds"
        src="https://i.ibb.co/L6C749J/background-reeds.png"
        alt="Background Reeds"
      />
    </ParallaxLayer>

    <ParallaxLayer className="foregroundReedsCrane" offset={offset} speed={0.9}>
      <img
        className="foregroundReeds"
        src="https://i.ibb.co/58j3WMp/foreground-reeds.png"
        alt="Foreground Reeds"
      />
    </ParallaxLayer>

    <ParallaxLayer className="homeCrane" offset={offset} speed={1.2}>
      <img
        className="homeCraneImg"
        src="https://i.ibb.co/chks5Jt/bird.png"
        alt="Crane Homepage Image"
      />
    </ParallaxLayer>
 
    <ParallaxLayer className="craneSky" offset={offset} speed={1.6}>
      <img
        className="craneSkyDetails"
        src="https://i.ibb.co/TPtMgGh/sky-details.png"
        alt="birds in the sky"
      />
      </ParallaxLayer>

   
  </>
);

export default Page1;


