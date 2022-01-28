// image 
// button 

import { ParallaxLayer } from "@react-spring/parallax";
import "./styles.scss";

const Page9 = ({ offset, color }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

  
    <ParallaxLayer offset={offset} speed={0.6}>
    <img
        className="enviromentArtic3d"
        src="https://i.ibb.co/N1fRyXK/final3d-Arctic.png"
        alt="3D Enviroment"
      />
    </ParallaxLayer>

    
    </>
  );
};

export default Page9;
