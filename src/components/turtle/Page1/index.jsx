import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

const Page1 = ({ offset, color }) => (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

    <ParallaxLayer className="turtleTitle" offset={offset} speed={0.6}>
      <img
        className="turtleTitle"
        src="https://i.ibb.co/nn4KQzr/The-Green-Sea-Turtle.png"
        alt="title"
      />
    </ParallaxLayer>

  
    
    <ParallaxLayer className="turtleImageWithShadow" offset={offset} speed={0.8}>
      <img
        className="swimTurtle"
        src="https://i.ibb.co/ZcyXCwm/turtle-and-shadow-1.png"
        alt="polar"
      />
    </ParallaxLayer>

    <ParallaxLayer className="waterDetails" offset={offset} speed={1.2}>
      <img
        className="bubbles"
        src="https://i.ibb.co/6XkqPqT/water-details.png"
        alt="polar"
      />
    </ParallaxLayer>

    <ParallaxLayer className="lightDetails" offset={offset} speed={1.0}>
      <img
        className="lightEffect"
        src="https://i.ibb.co/NZM04xc/light-1.png"
        alt="polar"
      />
    </ParallaxLayer>

    <ParallaxLayer className="groundDetails" offset={offset} speed={0.6}>
      <img
        className="rockDetail"
        src="  https://i.ibb.co/3CcM0M2/ground-details.png"
        alt="polar"
      />
    </ParallaxLayer>


  

    
    

   
  </>
);

export default Page1;


