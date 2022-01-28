import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

const Page1 = ({ offset, color }) => (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

    <ParallaxLayer className="title" offset={offset} speed={0.6}>
      <img
        className="title"
        src="https://i.ibb.co/rM1GN44/title.png"
        alt="title"
      />
    </ParallaxLayer>

    <ParallaxLayer className="backgroundMountains" offset={offset} speed={1.9}>
      <img
        className="mountain1"
        src=" https://i.ibb.co/syxV6Pj/mountain1.png"
        alt="mountain1"
      />
      <img
        className="mountain2"
        src=" https://i.ibb.co/4p2g6J4/mountain2.png"
        alt="mountain2"
      />
      <img
        className="mountain3"
        src="https://i.ibb.co/dM6z6qN/mountain3.png "
        alt="mountain3"
      />
    </ParallaxLayer>

    <ParallaxLayer className="water" offset={offset} speed={0.6}>
      <img
        className="waterbase"
        src="https://i.ibb.co/tx0FqC2/water-Base.png"
        alt="waterbase"
      />
      <img
        className="lightdetail"
        src="https://i.ibb.co/vsqYpWc/waterdetail-Light.png"
        alt="lightdetail"
      />
      <img
        className="darkdetail"
        src="https://i.ibb.co/fFxbrr2/waterdetail-Dark.png"
        alt="darkdetail"
      />
      <img className="ice" src="https://i.ibb.co/dGJyCqr/ice.png" alt="ice" />
    </ParallaxLayer>

    

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
        alt="polar"
      />
    </ParallaxLayer>

    <ParallaxLayer className="transitionNext" offset={offset} speed={0.6}>
      <img src="https://i.ibb.co/5W1Bv31/white-Overlay1.png" alt="" />
    </ParallaxLayer> 
  </>
);

export default Page1;


