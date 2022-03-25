// Background Image
// Standing Polarbear Image 
// Birds Image 
// Text Area (component) - consists of h1:title and h2:text
// Line 

import { ParallaxLayer } from "@react-spring/parallax";
import TextTitle from "../../textTitle";
import "./styles.scss";

const Page2 = ({ offset, color }) => {
  
  const pageItemList = [
    {
      title: "Scientific Name",
      description: "Ursus Maritimus"
    },
    {

      title: "Location",
      description: "Arctic Circle"
    },
    {
      title: "Population",
      description: "22,000 - 31,000"
    },
    {

      title: "Life Span",
      description: "25 Years"
    }
  ]

  return (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

    <ParallaxLayer className="itemlists" offset={offset} speed={0.6}>
      <div className="textListContainer">
        <div className="textListContainer_flex">
          <TextTitle list={pageItemList} />
        </div>
      </div>
    </ParallaxLayer>
    

    <ParallaxLayer className="standingPolarbear" offset={offset} speed={0.6}>
      <img
        className="standPolar"
        src="https://i.ibb.co/qD465kv/standing-Polar.png"
        alt="Standing Polarbear"
      />
    </ParallaxLayer>

    <ParallaxLayer className="birdsSkyImg" offset={offset} speed={1.0}>
      <img
        className="birdsSky"
        src="https://i.ibb.co/xmWNfr7/birds.png"
        alt="Birds"
      />
    </ParallaxLayer>

  </>
);
}

export default Page2;
