import { ParallaxLayer } from "@react-spring/parallax";
import "./style.scss";

/** Page 1 for the Turtle  **/
const Page1 = ({ offset, color }) => (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>


    {/* Turtle title layer **/}
    <ParallaxLayer className="turtleTitle" offset={offset} speed={0.6}>
    <h1 className="titleText">The<br></br></h1>
    <h1 className="titleTextAnim">Green Sea </h1>
    <h1 className="titleTextAnimLine2">Turtle </h1>
    </ParallaxLayer>

  
    {/* Swimming Turtle layer **/}
    <ParallaxLayer className="turtleImageWithShadow" offset={offset} speed={0.8}>
      <img
        className="swimTurtle"
        src="https://i.ibb.co/ZcyXCwm/turtle-and-shadow-1.png"
        alt="swimming turtle"
      />
    </ParallaxLayer>

    {/* Bubble layer **/}
    <ParallaxLayer className="waterDetails" offset={offset} speed={1.2}>
      <img
        className="bubbles"
        src="https://i.ibb.co/6XkqPqT/water-details.png"
        alt="bubbles in water"
      />
    </ParallaxLayer>

  {/* Light layer **/}
    <ParallaxLayer className="lightDetails" offset={offset} speed={1.0}>
      <img
        className="lightEffect"
        src="https://i.ibb.co/NZM04xc/light-1.png"
        alt="light shadow effect"
      />
    </ParallaxLayer>


  {/* Ground layer **/}
    <ParallaxLayer className="groundDetails" offset={offset} speed={0.6}>
      <img
        className="rockDetail"
        src="  https://i.ibb.co/3CcM0M2/ground-details.png"
        alt="rocks in water"
      />
    </ParallaxLayer>


  

    
    

   
  </>
);

export default Page1;


