import { ParallaxLayer } from "@react-spring/parallax";
import TextTitle from "../../textTitle";
import "./style.scss";

/** Page 2 for the Elephant  **/
const Page2 = ({ offset, color }) => {
  /** Structure holding elephant about information **/
  const pageItemListEleph = [
    {
      title: "Scientific Name",
      description: "Elephas Maximus"
    },
    {
      title: "Location",
      description: "Asia"
    },
    {
      title: "Population",
      description: "20,000 - 40,000"
    },
    {
      title: "Life Span",
      description: "48 years"
    }
  ]

  return (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

{/** About information layer  **/}
    <ParallaxLayer className="itemlists" offset={offset} speed={0.6}>
      <div className="textListContainer">
        <div className="textListContainer_flex">
          <TextTitle list={pageItemListEleph} />
        </div>
      </div>
    </ParallaxLayer>
    
    {/** Elephant layer  **/}
    <ParallaxLayer className="aboutElephant" offset={offset} speed={0.6}>
      <img
        className="aboutElephantImg"
        src="https://i.ibb.co/3hpGh5S/elephant-1.png"
        alt="About Elephant"
      />
    </ParallaxLayer>

    {/** Grass layer  **/}
    <ParallaxLayer className="sideBottomGrass" offset={offset} speed={0.8}>
      <img
        className="sideBottomGrassImg"
        src="https://i.ibb.co/2sF6q2S/grass-1.png"
        alt="Side Bottom Grass"
      />
    </ParallaxLayer>

  {/** Grass layer  **/}
    <ParallaxLayer className="sideLongGrass" offset={offset} speed={1.0}>
      <img
        className="sideLongGrassImg"
        src="https://i.ibb.co/Cm1wyDW/front-grass-1.png"
        alt="Side Long Grass"
      />
    </ParallaxLayer>

  {/** birds layer  **/}
    <ParallaxLayer className="aboutElephBirds" offset={offset} speed={1.2}>
      <img
        className="aboutElephBirdsImg"
        src="https://i.ibb.co/d6t0w3N/birds-2.png"
        alt="Elephant About Birds"
      />
    </ParallaxLayer>

  </>
);
}

export default Page2;
