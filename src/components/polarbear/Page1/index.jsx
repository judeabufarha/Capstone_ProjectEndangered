import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

/** Page 1 for the PolarBear  **/
const Page1 = ({ offset, color }) => (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

   {/* Polarbear title layer **/}
    <ParallaxLayer className="titleContainer" offset={offset} speed={0.6}>
      
    <h1 className="titleText">The<br></br></h1>
    <h1 className="titleTextAnim">Polar Bear</h1>
    </ParallaxLayer>

 {/* Polarbear mountains layer **/}
    <ParallaxLayer className="backgroundMountains" offset={offset} speed={1.9}>
      <img
        className="mountain1"
        src=" https://i.ibb.co/syxV6Pj/mountain1.png"
        alt="mountain 1"
      />
       <img
        className="mountain2"
        src=" https://i.ibb.co/k4Fxhct/mountain-1.png"
        alt="mountain 2"
      /> 
      <img
        className="mountain3"
        src="https://i.ibb.co/yS4qscw/mountain.png "
        alt="mountain 3"
      />
    </ParallaxLayer>

 {/* Polarbear water layer **/}
    <ParallaxLayer className="water" offset={offset} speed={0.6}>
  
      <img
        className="lightdetail"
        src="https://i.ibb.co/vsqYpWc/waterdetail-Light.png"
        alt="light water detail"
      />
      <img
        className="darkdetail"
        src="https://i.ibb.co/fFxbrr2/waterdetail-Dark.png"
        alt="dark water detail"
      />
      <img className="ice" src="https://i.ibb.co/6XXswjQ/Group-47.png" alt="ice" />
    </ParallaxLayer>

    
 {/* Polarbear sky layer **/}
    <ParallaxLayer className="sky" offset={offset} speed={1.6}>
      <img
        className="bird"
        src="https://i.ibb.co/xmWNfr7/birds.png"
        alt="birds"
      />
      <img className="sun" src=" https://i.ibb.co/C0ggdGP/sun.png " alt="sun" />
    </ParallaxLayer>
    <ParallaxLayer className="polarbearOnIce" offset={offset} speed={1.2}>
      <img
        className="polarIce"
        src="https://i.ibb.co/fMtZSVX/polarbear-Ice.png"
        alt="polar bear standing on ice"
      />
    </ParallaxLayer>



   
  </>
);

export default Page1;


