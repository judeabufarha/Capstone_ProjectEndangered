
import { ParallaxLayer } from "@react-spring/parallax";
import TextTitle from "../../textTitle";
import "./style.scss";

/** Page 2 for the Turtle  **/
const Page2 = ({ offset, color }) => {
  
  const pageItemListTurt = [
    {
      title: "Scientific Name",
      description: "Chelonia Mydas"
    },
    {
      title: "Location",
      description: "Oceans"
    },
    {
      title: "Population",
      description: "85,000 - 90,000"
    },
    {
      title: "Life Span",
      description: "60 years"
    }
  ]

  return (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

     {/* Turtle title layer **/}
    <ParallaxLayer className="itemlists" offset={offset} speed={0.6}>
      <div className="textListContainer">
        <div className="textListContainer_flex">
          <TextTitle list={pageItemListTurt} />
        </div>
      </div>
    </ParallaxLayer>
    

 {/* Turtle shadow layer **/}
    <ParallaxLayer className="turtleAndShadow" offset={offset} speed={0.6}>
      <img
        className="turtShadow"
        src="https://i.ibb.co/5szb6XS/turtle-and-shadow.png"
        alt="Turtle and Shadow"
      />
    </ParallaxLayer>

  </>
);
}

export default Page2;
